import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }: PropsWithChildren) => {
   const { t } = useTranslation();

   return (
      <div>
         <Head>
            <meta
               name='description'
               content='Passziv Profilom is a platform for passive income generation through various investment opportunities. Learn more about how you can grow your wealth effortlessly.'
            />
            <title>{t('Passziv Profilom')}</title>
         </Head>
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
