import Header from '@/components/layouts/Header';
import Books from '@/components/organisms/Home/Books';
import Features from '@/components/organisms/Home/Features';
import Introduction from '@/components/organisms/Home/Introduction';
import Invest from '@/components/organisms/Home/Invest';
import Now from '@/components/organisms/Home/Now';
import Slogan from '@/components/organisms/Home/Slogan';
import Video from '@/components/organisms/Home/Video';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
   const { t } = useTranslation();
   const slogan = t('A pénz okos embernek: zsebben ülő szolga.\nAz oktalan embernek: zsebben ülő úr.');
   return (
      <div className='home'>
         <Header />
         <Video />
         <Introduction />
         <Invest />
         <Features />
         <Now />
         <Slogan writer='Gárdonyi Géza' slogan={slogan} />
         {/* <Books /> */}
      </div>
   );
};

export default Home;
