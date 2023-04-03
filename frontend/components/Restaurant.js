import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Restaurant({ Name, Location, Icon, link}) {

  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/detect')
      .then((res) => res.json())
      .then((data) => {
        setBoundingBoxes(data.bounding_boxes);
        setLoading(false);
      });
  }, []);

  const numTables = boundingBoxes.filter((box) => box.name === 'dining table').length;

  return (
    <a href={link}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="h-52 relative">
          <Image className="h-full w-full object-cover" src={Icon} alt={Name} layout="fill" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{Name}</h1>
          <p className="text-md text-gray-600">{Location}</p>
          <p className="text-md text-gray-600 mt-2">
            Number of Tables: {!loading ? numTables : 'Loading..'}
          </p>
        </div>
      </div>
    </a>
    
  );
}
