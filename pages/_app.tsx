import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/main.scss';
import Layout from '@/components/layouts/Layout';
import Navigation from '@/components/molecules/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Switch from '@/components/molecules/Switch';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 0,
      },
   },
});

i18n
   .use(initReactI18next)
   .use(LanguageDetector)
   .use(HttpApi)
   .init({
      supportedLngs: ['en', 'hu'],
      fallbackLng: 'hu',
      detection: {
         order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
         caches: ['cookie', 'localStorage'],
      },
      backend: {
         loadPath: '/locales/{{lng}}/translation.json',
      },
      react: { useSuspense: false },
   });

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <Component {...pageProps} />
            <Switch />
            <Navigation />
         </Layout>

         <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{
               margin: '8px',
            }}
            toastOptions={{
               success: {
                  duration: 3000,
                  style: { color: '#55c57a' },
               },
               error: {
                  duration: 5000,
                  style: { color: '#ed4245' },
               },
               style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: '#f7f7f7',
               },
            }}
         />
      </QueryClientProvider>
   );
};

export default App;
