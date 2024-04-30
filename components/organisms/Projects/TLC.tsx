import Image from 'next/image';
import { useRouter } from 'next/router';

export default function TLC() {
   const router = useRouter();
   return (
      <div className='projects__project'>
         <h2 className='heading-secondary'>TLC Trading ai.</h2>
         <div className='projects__desc'>
            <picture onClick={() => router.push('/tlc-trading')} className='projects__image'>
               <source srcSet={`/tlc-sm.jpg 320w, /tlc-md.jpg 620w, /tlc-lg.jpg 1980w`} />
               <img loading='lazy' src='/tlc-md.jpg' alt='TLC trading ai' />
            </picture>
            <ul className='projects__list'>
               <li className='projects__item'>Egyszerű, felhasználó barát felület</li>
               <li className='projects__item'>Forex és Cryptocurrency Kereskedés</li>
               <li className='projects__item'>Hosszútávú, kormány által támogatott project</li>
               <li className='projects__item'>
                  <strong className='strong'>15%-30%</strong> közötti havi hozam
               </li>
               <li className='projects__item'>Nagyon erős és jövedelmező affeliate rendszer</li>
            </ul>
         </div>
         <button className='btn btn--orange' onClick={() => router.push('/tlc-trading')}>
            Érdekel
         </button>
      </div>
   );
}
