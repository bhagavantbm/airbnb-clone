
import React from "react";
import "./PhotoTour.css";
import { propertyData } from "../data/propertyData";

const sections = [
  {
    title: "Living room 1",
    amenities: "Sofa · Air conditioning · Ceiling fan · TV",
    images: propertyData.images.slice(0, 3),
  },
  {
    title: "Living room 2",
    amenities: "Ceiling fan · Hot tub",
    images: propertyData.images.slice(1, 4),
  },
  {
    title: "Full kitchen",
    amenities:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses",
    images: propertyData.images.slice(0, 3),
  },
  {
    title: "Bedroom",
    amenities:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Hangers · Iron · Wifi",
    images: propertyData.images.slice(2, 5),
  },
  {
    title: "Full bathroom",
    amenities: "Hairdryer · Hot water · Shampoo · Shower gel",
    images: propertyData.images.slice(1, 3),
  },
  {
    title: "Gym",
    amenities: "Air conditioning · Exercise equipment · Ceiling fan",
    images: propertyData.images.slice(0, 3),
  },
  {
    title: "Exterior",
    amenities: "Outdoor space · Garden · Parking",
    images: propertyData.images.slice(2, 5),
  },
  {
    title: "Pool",
    amenities: "Pool · Outdoor relaxation",
    images: propertyData.images.slice(0, 3),
  },
  {
    title: "Additional photos",
    amenities: "",
    images: propertyData.images,
  },
];

function PhotoTour({ onClose }) {
  return (
    <div className="photo-tour-page">
      <header className="photo-tour-header">
        <button
          className="back-button"
          onClick={onClose}
          type="button"
          aria-label="Close photo tour"
        >
          ‹
        </button>

        <h2>Photo tour</h2>

        <div className="header-actions">
          <button type="button" aria-label="Share">
            ↗
          </button>

          <button type="button" aria-label="Save">
            ♡
          </button>
        </div>
      </header>

      <main className="photo-tour-content">
        {sections.map((section) => (
          <section className="photo-section" key={section.title}>
            <div className="section-info">
              <h1>{section.title}</h1>

              {section.amenities && <p>{section.amenities}</p>}
            </div>

            <div className="section-gallery">
              {section.images.map((image, imageIndex) => (
                <img
                  key={`${section.title}-${imageIndex}`}
                  src={image}
                  alt={`${section.title} ${imageIndex + 1}`}
                  className={
                    imageIndex === 0 ? "main-photo" : "small-photo"
                  }
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default PhotoTour;