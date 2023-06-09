import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Restaurant({ id, Name, Location, Icon, link }) {
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/detect/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBoundingBoxes(data.bounding_boxes);
        setLoading(false);
      });
  }, [id]);

  console.log(boundingBoxes);
  const numTables = boundingBoxes.filter((box) => box.name === 'empty-table').length;

  return (
    <a href={link}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="h-52 relative shadow-lg">
          <Image className="h-full w-full object-cover" src={Icon} alt={Name} layout="fill" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{Name}</h1>
          <p className="text-md text-gray-600">{Location}</p>
          <p className="text-md text-gray-600 mt-2">
            Number of Open Tables: {!loading ? numTables : 'Loading..'}
          </p>
        </div>
      </div>
    </a>
  );
}

