import { useState } from "react";

export const FileList = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = [...droppedFiles];
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      newFiles.push(event.dataTransfer.files[i]);
    }
    setDroppedFiles(newFiles);

    const newImageUrls = [...imageUrls];
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      const imageUrl = event.dataTransfer.files[i].name;
      newImageUrls.push(imageUrl);
      console.log("Image URL:", imageUrl); // Log the image URL
    }
    setImageUrls(newImageUrls);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderImages = () => {
    return imageUrls.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Preview ${droppedFiles[index].name}`}
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
    ));
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #cccccc",
          padding: "20px",
          textAlign: "center",
          width: "300px", // Adjust the width as needed
          height: "300px", // Adjust the height as needed
          background: "black", // Set the background color to black
          overflow: "auto", // Enable scroll if too many images are dropped
        }}
      >

          <div style={{ color: "white" }}>Drag and drop photos here</div>
          
      </div>
      {
          renderImages()

      }
    </div>
  );
};
