
import React from "react";
import "./PhotoTour.css";

// Deployed image URL
const imageUrl = (name) => {
  return `https://airbnb-clone-umber-two.vercel.app/assets/images/${name}.jpeg`;
};

const sections = [
  {
    title: "Living room 1",
    amenities: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [
      imageUrl("a9831aeb-f441-44f5-a38f-4cf54e3f0fcf"),
      imageUrl("090d8b0b-b539-42c0-84f8-e1fb0cdf9a93"),
      imageUrl("56c44812-52c0-4481-90d8-101ec1f34c7a"),
    ],
  },
  {
    title: "Living room 2",
    amenities: "Ceiling fan · Hot tub",
    images: [
      imageUrl("3c6e6809-1bb1-47a6-8e24-aff593e1c28f"),
    ],
  },
  {
    title: "Full kitchen",
    amenities:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    images: [
      imageUrl("56c44812-52c0-4481-90d8-101ec1f34c7a"),
      imageUrl("ddc853d7-e658-405c-bedc-8f31106c447e"),
    ],
  },
  {
    title: "Bedroom",
    amenities:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning products · Private entrance · Wifi",
    images: [
      imageUrl("67c61c6f-6260-4809-9510-0360e58a345d"),
      imageUrl("1c827136-4a85-4fe0-8e69-3fd8ea19bb17"),
      imageUrl("0622ab42-b851-4d55-9d9f-df3143bc5909"),
      imageUrl("a74e3c0b-3188-4442-9146-1cd4d6ea45df"),
      imageUrl("48a8ffbc-fbf7-4f84-bc29-ee400da3f08b"),
      imageUrl("3cf31697-f3f3-4c60-82c4-029acb119ae4"),
    ],
  },
  {
    title: "Full bathroom",
    amenities: "Hairdryer · Hot water · Shampoo · Shower gel",
    images: [
      imageUrl("97c78f8a-5090-4663-aebc-ba4e13b47092"),
    ],
  },
  {
    title: "Gym",
    amenities: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    images: [
      imageUrl("9aa8e65f-94ac-4ba0-9a10-9ec91e536d22"),
      imageUrl("246bd88d-4dd6-4117-a401-02a36ebfcf16"),
      imageUrl("4fede77d-7a71-446f-89e3-263af937f3fa"),
      imageUrl("79f59adb-5a5f-4d6c-8109-1f01f4ca0d03"),
      imageUrl("f19d8c0a-1d88-42a4-9218-686d4f0db7e4"),
    ],
  },
  {
    title: "Exterior",
    amenities: "",
    images: [
      imageUrl("23ea6621-6f74-4baa-acea-2fd03e312b41"),
      imageUrl("5adfdf3e-d497-4efc-ab8c-fc559dab311e"),
      imageUrl("608748cd-6ee7-4a71-88a2-ba79d3ddba5a"),
      imageUrl("5b856fde-a393-41bf-b373-c9d02e64221f"),
      imageUrl("c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d"),
      imageUrl("42befad7-fb29-473d-91db-b03e7a544d1d"),
    ],
  },
  {
    title: "Pool",
    amenities: "Pool",
    images: [
      imageUrl("fc02f48f-a937-42c5-895d-f9cc3113d6ca"),
      imageUrl("929545d3-e241-46c0-8a70-c24531ce7b54"),
      imageUrl("8eb65a8b-e795-4870-b141-6f63b1be24ae"),
    ],
  },
  {
    title: "Additional photos",
    amenities: "",
    images: [
      imageUrl("70325367-cbae-4993-b560-18cd3f6edd53"),
      imageUrl("cc7a56bd-242c-498a-9aef-0cffac619e54"),
      imageUrl("30ad93b2-293f-494d-b645-626303c6cb93"),
      imageUrl("9642a60d-e9de-4e1a-89c2-9ebd230f4a74"),
      imageUrl("b6599f26-d65c-4df0-baf2-ef18c82a86a3"),
      imageUrl("dc01fd46-b119-48d3-a43b-f6c093e26eca"),
      imageUrl("fe37b80e-da8a-4225-b27b-dfbb5d763c01"),
      imageUrl("3c90338e-86b4-423f-aae1-279e0ccc3a18"),
      imageUrl("862d936c-0f34-4e50-af87-b519e2781d19"),
      imageUrl("79addceb-8c2d-419b-80ff-e29af426a94c"),
    ],
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
                  key={image}
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