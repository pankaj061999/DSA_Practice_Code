import React, { useState } from "react";

export const ImageCarousel = () => {
  const ImageList = [
    {
      id: 0,
      image: "https://i.postimg.cc/Yq41zGQ9/Wireless-loadbar-Hero-visual.jpg",
      title: "Advanced Animal Tracking",
    },
    {
      id: 1,
      image: "https://i.postimg.cc/pLj22V9h/animal-Bend.jpg",
      title: "Health Monitoring",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/hP88ZJ21/Carousel-i-Series-no-green.png",
      title: "i Series Energizer System",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/6Q3w8v7W/Gallagher-weight-scales-header.jpg",
      title: "Revolutionary Collar Tech",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImageList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ImageList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Carousel:</h1>
      <div style={{ position: "relative" }}>
        <img
          src={ImageList[currentIndex].image}
          alt={ImageList[currentIndex].title}
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
        <h1 style={{ fontSize: "16px", fontWeight: "400" }}>{ImageList[currentIndex].title}</h1>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePrev} style={{ marginRight: "10px" }}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
