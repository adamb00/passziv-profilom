import { useEffect, useState } from 'react';
import FeatureBox from './FeatureBox';
import { useFetchBoxes } from '@/hooks/useFetchBoxes';
import { getCookie } from 'cookies-next';

export default function Features() {
   const cookie = getCookie('i18next') as string;
   const { boxes } = useFetchBoxes(cookie);

   if (!boxes) return;

   return (
      <div className='features'>
         <div className='features__row'>
            {boxes.map((box: { title: string; content: string }, index: number) => (
               <FeatureBox key={index} title={box.title}>
                  {box.content}
               </FeatureBox>
            ))}
         </div>
      </div>
   );
}
