import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-wraper">
      <div className="gallery-container">
        <img
          src="https://images.pexels.com/photos/1212408/pexels-photo-1212408.jpeg?cs=srgb&dl=pexels-alexander-grey-1212408.jpg&fm=jpg"
          alt=""
        />
        <div className="gallery-text">
          <h3>take a look at our gallery you will be impressed</h3>
        </div>
      </div>
      <div className="gallery-images">
        <div className="gallery-btns">
          <button className="gallery-tag-btn">All images</button>
          <button className="gallery-tag-btn">Videos</button>
          <button className="gallery-tag-btn">Nature</button>
          <button className="gallery-tag-btn">Weddings</button>
          <button className="gallery-tag-btn">Birthdays</button>
          <button className="gallery-tag-btn">HIkings</button>
          <button className="gallery-tag-btn">Indoor</button>
          <button className="gallery-tag-btn">Drone Shoots</button>
          <button className="gallery-tag-btn">Real Estate</button>
        </div>
        <div className="gallery-all-images">
          <div class="gallery-item">
            <img
              src="https://images.pexels.com/photos/18363423/pexels-photo-18363423/free-photo-of-a-girl-in-nature.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Imag"
            />
          </div>
          <div class="gallery-item">
            <img
              src="https://images.pexels.com/photos/17653368/pexels-photo-17653368/free-photo-of-a-woman-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              alt="Ima "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
