import React from 'react';
import { useTranslation } from 'react-i18next';

interface SloganProps {
   slogan: string;
   writer: string;
}

export default function Slogan({ slogan, writer }: SloganProps) {
   const lines = slogan.split('\n');
   const { t } = useTranslation();
   return (
      <div className='slogan'>
         {lines.map((line, index) => (
            <div key={index}>
               <p>{t(line)}</p>
            </div>
         ))}
         <p className='green'>{writer}</p>
      </div>
   );
}
