import React, { useState, useEffect } from 'react';

//import './Carousel.css'; // Import your CSS file for styling

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'España.png',
    'Francia/png',
    'Inglaterra.png',
    'Inglaterra.png',
    'Inglaterra.png',
    'Inglaterra.png',
    
    // Add more image paths as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed (3000ms for 3 seconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;