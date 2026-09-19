
import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = ({ images, onShowAll }) => {
  return (
    <div className="photo-grid">
      <img src={images[0]} alt="Property main view" />

      <div className="small-images">
        <img src={images[1]} alt="Property interior" />
        <img src={images[2]} alt="Jacuzzi" />
        <img src={images[3]} alt="Bedroom" />
        <div className="last-image">
          <img src={images[4]} alt="Property exterior" />

          <button onClick={onShowAll}>
            ▦ Show all photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;