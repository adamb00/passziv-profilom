import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Pooolse() {
   const { t, i18n } = useTranslation();
   let lang = i18n.language;
   lang = lang == 'hu' ? 'HUN' : 'ENG';
   return (
      <div className='project'>
         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <h2 className='heading-secondary'>Pooolse - Your Crypto Tripppler</h2>
         </Link>
         <div className='project__desc'>
            <p className='paragraph'>
               {t(
                  'A Pooolse Projekt legfőbb célja, hogy a crypto piac kiemelkedő hozamaiból MINDENKI részesülhessen, Te is - akkor is ha nem állnak közel hozzád a cryptok, s azok kereskedésével sem foglalkozol.'
               )}
            </p>

            <p className='paragraph'>
               {t(
                  'A Pooolse figyeli a crypto piacot, a különböző idősíkokat és végzi a kereskedési tranzakciókat (neked semmilyen kereskedési paramétert nem kell megadnod). A Pooolse használata egyszerű, érthető, a napi hozamokat pedig a Pooolse walletedben követheted minden nap.'
               )}
            </p>

            <p className='paragraph'>
               {t(
                  'A Pooolse NFT-k értékét teljes egészében a profi kereskedők által beállított, szintén díjnyertes Tradensea motorja növeli a megvásárolt NFT-k összegével történő automatikus kereskedések révén addig, amíg az NFT értékének a háromszorosát el nem éri - a'
               )}
               <strong className='strong'> {t('napi hozam naponta kerül kifizetésre')} </strong>
               {t('a Pooolse felhasználóinak.')}
            </p>
            <p className='paragraph'>
               {t('A Pooolse')} <strong className='strong'> {t('kiváló megtakarítás diverzifikációs eszköz')} </strong>,
               {t(
                  'ötvözve a rövid -, közép - és hosszútávú megtakarítás jellemzőit. Kiemelkedő hozamai eredményeként egy igazán attraktív alternatívát jelent a hagyományos megtakarítási instrumentumokkal szemben, amely segít az infláció okozta elértéktelenedéstől megvédeni pénzedet!'
               )}
            </p>
         </div>
         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <button className='btn btn--animated btn--green'>{t('Kezdjük el most!')}</button>
         </Link>

         <div className='project__video'>
            <video className='project__video--content' controls preload='preload' id='pooolse'>
               <source
                  src='https://fbfythyraexrdhlkdana.supabase.co/storage/v1/object/public/videos/pooolse.mp4?t=2024-05-07T06%3A33%3A04.454Z'
                  type='video/mp4'
               />
            </video>
         </div>

         <div>
            <h2 className='heading-secondary heading-secondary--sub'>{t('Miért a Pooolse ?')}</h2>
            <p className='paragraph paragraph__alt heading-tertiary'>{t('Szerintünk ezek a tényezők fontosak')}</p>
            <p className='paragraph paragraph__alt'>
               {t(
                  'A cég tulajdonosai és munkatársai elérhetőek valamint nyilvánosság előtt is magukat vállaló személyek'
               )}
            </p>
            <p className='paragraph paragraph__alt'>
               {t('Biztonság a legfontosabb számukra (tőkét védik, inkább kisebb bónusz, minthogy ne legyen holnap)')}
            </p>
            <p className='paragraph paragraph__alt'>{t('Nemzetközi díjak elnyerése')}</p>
            <p className='paragraph paragraph__alt'>{t('Hosszú távú célok és folyamatos fejlesztések')}</p>

            <Link className='link' target='_blank' href='https://app.pooolse.com/join/9232'>
               <p className='paragraph paragraph_alt important'>{t('2%-12% közötti havi hozam')}</p>
            </Link>
         </div>
         <picture className='project__picture'>
            <source srcSet={`/pooolse-sells.png 320w, /pooolse-sells.png 620w, /pooolse-sells.png 1980w`} />
            <img loading='lazy' src={`/pooolse-sells.png`} alt='Pooolse' className='project__image' />
         </picture>
         <p className='paragraph paragraph__alt'>{t('Csináljuk meg együtt, legyünk passzívan szabadok‼️')}</p>

         <p className='paragraph'>
            <Link
               className='link'
               target='_blank'
               href='https://drive.google.com/drive/folders/1g_bYEXT3oGoACPLzwWknDOyn0lC5SraC?usp=share_link'
            >
               {t('Fontos tudnivalók és hasznos videók')}
            </Link>
         </p>
         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <button className='btn btn--animated btn--green'>{t('Kezdjük el most!')}</button>
         </Link>

         <picture className='project__picture'>
            <source srcSet='/pooolse-details.jpg 320w, /pooolse-details.jpg 620w, /pooolse-details.jpg 1980w' />
            <img loading='lazy' src={`/pooolse-details.jpg`} alt='TLC trading ai' className='project__image' />
         </picture>

         <p className='paragraph'>
            <Link
               className='link link--green'
               target='_blank'
               href={`https://pooolse.fra1.digitaloceanspaces.com/pooolse-app/documents/newdocs/Presentation%20${lang}.mp4
               `}
            >
               {t('Hivatalos prezentáció')}
            </Link>
         </p>

         <Link href='https://app.pooolse.com/join/9232' target='_blank'>
            <button className='btn btn--animated btn--orange'>{t('Ne hagyd ki az esélyt!')}</button>
         </Link>
      </div>
   );
}
