import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import PhotoTour from "./components/PhotoTour";
import { propertyData } from "./data/propertyData";
import ListingPage from "./pages/ListingPage";
import ListingNav from "./components/ListingNav";

function App() {
  const [showPhotoTour, setShowPhotoTour] = useState(
    new URLSearchParams(window.location.search).get("modal") ===
      "PHOTO_TOUR_SCROLLABLE"
  );

  const openPhotoTour = () => {
    window.history.pushState({}, "", "?modal=PHOTO_TOUR_SCROLLABLE");
    setShowPhotoTour(true);
  };

  const closePhotoTour = () => {
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = () => {
      const modal = new URLSearchParams(
        window.location.search
      ).get("modal");

      setShowPhotoTour(modal === "PHOTO_TOUR_SCROLLABLE");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      {!showPhotoTour && <Header />}

      {showPhotoTour ? (
        <PhotoTour
          photos={propertyData.images}
          onClose={closePhotoTour}
        />
      ) : (
        <main className="listing-page">
          <h1>{propertyData.title}</h1>

         <PhotoGrid
  images={propertyData.images}
  onShowAll={openPhotoTour}
/>

<ListingNav />


          <ListingPage images={propertyData.images} />
        </main>
      )}
    </>
  );
}

export default App;