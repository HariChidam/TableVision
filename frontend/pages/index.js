import React from 'react';
import Room from '../components/Room';
import Image from 'next/image';

// Import images
import ross from '../public/ross.jpeg';
import ugli from '../public/ugli.jpeg';
import skb from '../public/skb.jpeg';
import cccb from '../public/cccb.jpeg';
import BBB from '../public/BBB.jpeg';
import hatcher from '../public/hatcher.jpeg';
import Dude from '../public/Dude.jpeg';
import Pierpont from '../public/Pierpont.jpeg';
import Logo from '../public/Logo.svg';

export default function Home() {
  return (
    <div classname = 'className="bg-gradient-to-br from-purple-900 to-purple-700 min-h-screen"'>
      <div className='flex items-center justify-center h-full pt-16'>
        <Image src={Logo} alt="Logo" width={300} height={300} />
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
        <Room
          id = "BBB"
          Name="Bob and Betty Beyster Building"
          Location="2260 Hayward St, Ann Arbor, MI 48109"
          Icon={BBB}
          link="https://cse.engin.umich.edu/about/beyster-building/"
        />
        <Room
          id = "hatcher"
          Name="Harlan Hatcher Graduate Library"
          Location="913 S University Ave, Ann Arbor, MI 48109"
          Icon={hatcher}
          link="https://www.lib.umich.edu/locations-and-hours/hatcher-library"
        />
        <Room
          id = "Dude"
          Name="James and Anne Duderstadt Center"
          Location="2281 Bonisteel Blvd, Ann Arbor, MI 48109"
          Icon={Dude}
          link="https://www.dc.umich.edu/"
        />
        <Room
          id = "pierpont"
          Name="Pierpont Commons"
          Location="2101 Bonisteel Blvd, Ann Arbor, MI 48109"
          Icon={Pierpont}
          link="https://uunions.umich.edu/pierpont/"
        />
      </div>
    </div>
  );
}