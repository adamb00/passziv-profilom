import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Slogan() {
   const { t } = useTranslation();
   return (
      <div className='slogan'>
         {t('A pénz okos embernek: zsebben ülő szolga.')} <br /> {t('Az oktalan embernek: zsebben ülő úr.')} <br />
         <span className='green'>Gárdonyi Géza</span>
      </div>
   );
}
