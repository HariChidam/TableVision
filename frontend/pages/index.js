import React from 'react';
import Room from '../components/Room';

// Import images
import ross from '../public/ross.jpeg';
import ugli from '../public/ugli.jpeg';
import skb from '../public/skb.jpeg';
import cccb from '../public/cccb.jpeg';

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center py-8">Table Vision</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Room
          id = "ross"
          Name="Ross School of Business"
          Location="701 Tappan Ave, Ann Arbor, MI 48109"
          Icon={ross}
          link="https://michiganross.umich.edu/"
        />
        <Room
          id = "ugli"
          Name="Shapiro Undergraduate Library"
          Location="919 S University Ave, Ann Arbor, MI 48109"
          Icon={ugli}
          link="https://www.lib.umich.edu/locations-and-hours/shapiro-library"
        />
        <Room
          id = "skb"
          Name="School of Kinesiology"
          Location="341 E Liberty St, Ann Arbor, MI 48104"
          Icon={skb}
          link="https://www.kines.umich.edu/about/kinesiology-building"
        />
        <Room
          id = "cccb"
          Name="Central Campus Classroom Building"
          Location="1225 Geddes Ave, Ann Arbor, MI 48109"
          Icon={cccb}
          link="https://cccb.provost.umich.edu/"
        />
      </div>
    </div>
  );
}