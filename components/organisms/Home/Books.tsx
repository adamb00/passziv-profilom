import React from 'react';

export default function Books() {
   return (
      <div className='books'>
         <picture className='books__image'>
            {/* <source srcSet={`/gazdag_papa_sm.jpg 320w, /gazdag_papa_md.jpg 620w, /gazdag_papa_lg.jpg 1980w,`} /> */}
            <img src='/gazdag_papa_sm.jpg' alt='Gazdag Papa Szegeny Papa' loading='lazy' />
         </picture>
      </div>
   );
}
