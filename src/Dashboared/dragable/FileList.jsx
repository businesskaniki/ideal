import React, { useState } from "react";
import "./FileList.css"; // Import a CSS file for your component's styles
import { BsTrash } from "react-icons/bs";

export const FileList = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [mediaPreviews, setMediaPreviews] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = [...droppedFiles];
    const newPreviews = [...mediaPreviews];

    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      const file = event.dataTransfer.files[i];
      newFiles.push(file);

      if (file.type.startsWith("image/")) {
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
      } else if (file.type.startsWith("video/")) {
        newPreviews.push({
          type: "video",
          file: file,
        });
        setMediaPreviews(newPreviews);
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
            <source src={URL.createObjectURL(media.file)} type={media.file.type} />
            Your browser does not support the video tag.
          </video>
        )}
        <BsTrash onClick={() => handleRemoveMedia(index)} className="remove-button">
          Remove
        </BsTrash>
      </div>
    ));
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="dropzone"
      >
        <div className="dropzone-text">Drag and drop photos and videos here</div>
      </div>
      <div className="media-preview-container">{renderMedia()}</div>
    </div>
  );
};
