import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Restaurant({ id, Name, Location, Icon, link }) {
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFirstPhoto, setShowFirstPhoto] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(`/detect/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBoundingBoxes(data.bounding_boxes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/image/${id}`);
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [id]);

  const numTables = boundingBoxes.filter((box) => box.name === 'empty-table').length;

  const handleIconClick = () => {
    setShowFirstPhoto(!showFirstPhoto);
  };

  return (
    <div>
      {showFirstPhoto ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:scale-105 hover:shadow-lg">
          <div className="h-64 relative shadow-lg" onClick={handleIconClick}>
            <Image className="h-full w-full object-cover" src={Icon} alt={Name} layout="fill" />
          </div>
          <div className="p-6">
            <a href={link} className="text-2xl font-semibold text-gray-800 hover:font-bold">
              {Name}
            </a>
            <p className="text-md text-gray-600">{Location}</p>
            <p className="text-md text-gray-600 mt-2">
              Number of Open Tables: {!loading ? numTables : 'Loading..'}
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:scale-105 hover:shadow-lg">
          <div className="h-96 relative shadow-lg" onClick={handleIconClick}>
            <Image
              className="h-full w-full object-cover"
              src={imageUrl}
              alt={Name}
              layout="fill"
            />
          </div>
        </div>
      )}
    </div>
  );
}
