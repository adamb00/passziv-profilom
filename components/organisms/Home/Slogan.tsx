import React from 'react';

interface SloganProps {
   slogan: string;
   writer: string;
}

export default function Slogan({ slogan, writer }: SloganProps) {
   const lines = slogan.split('\n');
   return (
      <div className='slogan'>
         {lines.map((line, index) => (
            <div key={index}>
               <p>{line}</p>
            </div>
         ))}
         <p className='green'>{writer}</p>
      </div>
   );
}
