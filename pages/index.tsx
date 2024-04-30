import Header from '@/components/layouts/Header';
import Features from '@/components/organisms/Home/Features';
import Invest from '@/components/organisms/Home/Invest';
import Now from '@/components/organisms/Home/Now';
import Video from '@/components/organisms/Home/Video';
import React from 'react';

const Home = () => {
   return (
      <div className='home'>
         <Header />
         <Video />
         <Invest />
         <Features />
         <Now />
      </div>
   );
};

export default Home;
