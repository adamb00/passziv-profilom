import Link from 'next/link';
import React from 'react';

export default function Pooolse() {
   return (
      <div className='project'>
         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <h2 className='heading-secondary'>Pooolse - Your Crypto Tripppler</h2>
         </Link>
         <div className='project__desc'>
            <p className='paragraph'>
               A Pooolse Projekt legfőbb célja, hogy a crypto piac kiemelkedő hozamaiból MINDENKI részesülhessen, Te is
               - akkor is ha nem állnak közel hozzád a cryptok, s azok kereskedésével sem foglalkozol.
            </p>

            <p className='paragraph'>
               A Pooolse figyeli a crypto piacot, a különböző idősíkokat és végzi a kereskedési tranzakciókat (neked
               semmilyen kereskedési paramétert nem kell megadnod). A Pooolse használata egyszerű, érthető, a napi
               hozamokat pedig a Pooolse walletedben követheted minden nap.
            </p>

            <p className='paragraph'>
               A Pooolse NFT-k értékét teljes egészében a profi kereskedők által beállított, szintén díjnyertes
               Tradensea motorja növeli a megvásárolt NFT-k összegével történő automatikus kereskedések révén addig,
               amíg az NFT értékének a háromszorosát el nem éri - a{' '}
               <strong className='strong'> napi hozam naponta kerül kifizetésre </strong> a Pooolse felhasználóinak.
            </p>
            <p className='paragraph'>
               A Pooolse <strong className='strong'> kiváló megtakarítás diverzifikációs eszköz </strong>, ötvözve a
               rövid -, közép - és hosszútávú megtakarítás jellemzőit. Kiemelkedő hozamai eredményeként egy igazán
               attraktív alternatívát jelent a hagyományos megtakarítási instrumentumokkal szemben, amely segít az
               infláció okozta elértéktelenedéstől megvédeni pénzedet!
            </p>
         </div>

         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <button className='btn btn--animated btn--green'>Kezdjük el most!</button>
         </Link>
      </div>
   );
}
