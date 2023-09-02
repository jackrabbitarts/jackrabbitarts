import React, { useState, useEffect } from 'react';
import './DigitalPainting.css';
import paintings from './paintingsData';

const DigitalPainting = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const loadImageData = async () => {
      const imagePromises = paintings.map(async (painting) => {
        const imageModule = await import(`./Paintings/${painting.filename}.png`);
        
        return {
          ...painting,
          imageSrc: imageModule.default,
        };
      });

      const loadedImageData = await Promise.all(imagePromises);
      setImageData(loadedImageData);
    };

    loadImageData();
  }, []);

  return (
    <div className="painting-container">
      {imageData.map((data, index) => (
        <figure key={index} className="painting">
          <img src={data.imageSrc} alt={`Painting ${index + 1}`} />
          <figcaption>{data.title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default DigitalPainting;
