import Header from '@/components/layouts/Header';
import Features from '@/components/organisms/Home/Features';
import Invest from '@/components/organisms/Home/Invest';
import Now from '@/components/organisms/Home/Now';
import Slogan from '@/components/organisms/Home/Slogan';
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
         <Slogan />
      </div>
   );
};

export default Home;
