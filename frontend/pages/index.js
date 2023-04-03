import React from 'react';
import Restaurant from '../components/Restaurant';

// Import images
import totoro from '../public/totoro.jpeg';
import mani from '../public/mani.jpeg';
import isalita from '../public/isalita.jpg';
import Fritas from '../public/fritas.jpeg';

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center py-8">Table Vision</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Restaurant
          Name="Totoro"
          Location="215 S State St #2031, Ann Arbor, MI 48104"
          Icon={totoro}
          link="https://totoroannarbor.com/"
        />
        <Restaurant
          Name="Mani Osteria"
          Location="341 E Liberty St, Ann Arbor, MI 48104"
          Icon={mani}
          link="https://maniosteria.com/"
        />
        <Restaurant
          Name="Isalita"
          Location="341 E Liberty St, Ann Arbor, MI 48104"
          Icon={isalita}
          link="https://isalita.com/"
        />
        <Restaurant
          Name="Frtia Batidos"
          Location="117 W Washington St, Ann Arbor, MI 48104"
          Icon={Fritas}
          link="https://fritabatidos.com/"
        />
      </div>
    </div>
  );
}