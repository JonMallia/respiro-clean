import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

function Gallery() {
  const images = [
    { src: '/assets/img1.jpg', thumb: '/assets/thumb1.jpg' },
    { src: '/assets/img2.jpg', thumb: '/assets/thumb2.jpg' },
    { src: '/assets/img3.jpg', thumb: '/assets/thumb3.jpg' }
  ];

  return (
    <LightGallery speed={500}>
      {images.map((img, index) => (
        <a key={index} href={img.src}>
          <img src={img.thumb} alt={`Villa image ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        </a>
      ))}
    </LightGallery>
  );
}

export default Gallery;
