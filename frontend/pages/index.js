import React from 'react';
import Room from '../components/Room';
import Descripton from '../components/Descripton';
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
import Math from '../public/Math.jpeg';
import Palmer from '../public/Palmer.jpeg';
import SocialWork from '../public/SocialWork.jpeg';
import EQ from '../public/EQ.jpeg';

import Logo from '../public/Logo.svg';

export default function Home() {
  return (
    <div classname = 'className="bg-gradient-to-br from-purple-900 to-purple-700 min-h-screen"'>
      <div className='flex items-center justify-center h-full pt-16'>
        <Image src={Logo} alt="Logo" width={300} height={300} />
      </div>
      <div>
        <Descripton />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2 text-center pt-20 pb-4 ">Study Spaces</h1>
        <h1 className= "text-2xl font-bold mb-2 text-center">Click on a study space to see the photo our model is running on!</h1>
        <h1 className="text-2xl font-bold mb-2 text-center px-60 text-red-500 bg-gray-800">
          <div className="py-4">
            DISCLAIMER!! 
          </div>
          <div className="pb-4">
            This is running on the default YOLOv5 model and showing the number of "dining tables". 
            Our custom model is way more accurate at finding tables and empty tables than YOLOv5. 
            To check out our model, email me at hari.chidam@gmail.com and I will send it over. 
            Here is the Github Repo: 
            <a href="https://github.com/HariChidam/TableVision" class="text-red-500 hover:underline"> https://github.com/HariChidam/TableVision</a>. 
            You can clone it and run it with our custom model to see it in action! 
          </div>
        </h1> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
          Name="School of Kinesiology Building"
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
        <Room
          id = "Math"
          Name="East Hall"
          Location="530 CHURCH ST Ann Arbor, MI 48109"
          Icon={Math}
          link="https://maps.studentlife.umich.edu/building/east-hall"
        />
        <Room
          id = "Palmer"
          Name="Palmer Commons"
          Location="100 Washtenaw Ave, Ann Arbor, MI 48109"
          Icon={Palmer}
          link="https://palmercommons.umich.edu/"
        />
        <Room
          id = "SocialWork"
          Name="School of Social Work Building"
          Location="1080 South University Avenue Ann Arbor, MI 48109-1106"
          Icon={SocialWork}
          link="https://ssw.umich.edu/contact"
        />
         <Room
          id = "EQ"
          Name="East Quadrangle"
          Location="701 E University Ave, Ann Arbor, MI 48109"
          Icon={EQ}
          link="https://housing.umich.edu/residence-hall/east-quadrangle/"
        />
      </div>
    </div>
  );
}