import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
import { useFetchBoxes } from '@/hooks/useFetchBoxes';

export default function Switch() {
   const { i18n } = useTranslation();
   const [lang, setLang] = useState(getCookie('i18next') as string);
   const { setBoxes } = useFetchBoxes(lang);

   const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const newLanguage = e.target.checked ? 'en' : 'hu';
      i18n.changeLanguage(newLanguage);
      setLang(newLanguage);
      document.documentElement.lang = newLanguage;

      try {
         const response = await fetch(`/boxData.${newLanguage}.json`);
         const data = await response.json();
         setBoxes(data);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   return (
      <label className='switch'>
         <input type='checkbox' onChange={handleOnChange} checked={lang !== 'hu'} />
         <span className='slider'>
            <span className='language'>HU</span>
            <span className='language'>EN</span>
         </span>
      </label>
   );
}
