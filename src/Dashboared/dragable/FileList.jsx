import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FileList.css";
import { BsTrash } from "react-icons/bs";
import { addPhotos } from "../../Redux/axios/Images";

export const FileList = () => {
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.Tags);

  const [droppedFiles, setDroppedFiles] = useState([]);
  const [mediaPreviews, setMediaPreviews] = useState([]);

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [images, setImages] = useState([]);


  console.log(selectedTags);

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = [...droppedFiles];
    const newPreviews = [...mediaPreviews];

    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      const file = event.dataTransfer.files[i];
      
      images.push(file)
      if (file.type.startsWith("image/")) {
        newFiles.push(file);

        const reader = new FileReader();
        reader.onload = (e) => {
          newPreviews.push({
            type: "image",
            preview: e.target.result,
            file: file,
          });
          setMediaPreviews(newPreviews);
        };
        reader.readAsDataURL(file);
      }
    }

    setDroppedFiles(newFiles);
  };

  const handleRemoveMedia = (index) => {
    const newPreviews = [...mediaPreviews];
    newPreviews.splice(index, 1);
    setMediaPreviews(newPreviews);

    const newFiles = [...droppedFiles];
    newFiles.splice(index, 1);
    setDroppedFiles(newFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleTagClick = (e) => {
    const tagId = e.target.id;
    // Toggle tag selection

    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tagId)
        ? prevSelectedTags.filter((tag) => tag !== tagId)
        : [...prevSelectedTags, tagId]
    );
    selectedTags.push(tagId)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Extract individual image URLs from mediaPreviews
    
    
    const sharedData = {
      title: title,
      tags: selectedTags,
      description: description,
    };
  

    try {
      for (const imageFile of images) {
        console.log(imageFile);
        const media = {
          ...sharedData,
          image: imageFile.name, // Set the current image file
        };
  
        // Send the current media data to the backend
        await dispatch(addPhotos(media));
      }
    } catch (error) {
      return error.response.data;
    }
  };

  const renderMedia = () => {
    return mediaPreviews.map((media, index) => (
      <div key={index} className="media-container">
        {media.type === "image" ? (
          <img
            src={media.preview}
            alt={`Preview ${media.file.name}`}
            className="media"
          />
        ) : (
          <video controls width="100" height="100">
            <source
              src={URL.createObjectURL(media.file)}
              type={media.file.type}
            />
            Your browser does not support the video tag.
          </video>
        )}
        <BsTrash
          onClick={() => handleRemoveMedia(index)}
          className="remove-button"
        >
          Remove
        </BsTrash>
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      <h4 className="select-media-tag">
        Select all tags that apply to the photos
      </h4>
      <div className="all-tags">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={`tags ${selectedTags.includes(tag.id) ? "selected" : ""}`}
            id={tag.id}
            onClick={handleTagClick}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="tagTitle"
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <input
        type="text"
        id="tagDescription"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
      <input type="file" onDrop={handleDrop} onDragOver={handleDragOver} className="dropzone">
        
      </input>
      <div className="media-preview-container">
        <div className="media">
          <div className="photos">{renderMedia()}</div>
          <button type="submit">Add selected media</button>
        </div>
      </div>
      
    </form>
  );
};
