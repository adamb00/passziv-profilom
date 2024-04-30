import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Pooolse() {
   const router = useRouter();

   return (
      <div className='projects__project'>
         <h2 className='heading-secondary'>Pooolse - Your Crypto Tripppler</h2>

         <div className='projects__desc'>
            <picture onClick={() => router.push('/pooolse')} className='projects__image'>
               <source srcSet={`/pooolse-sm.jpg 320w, /pooolse-md.jpg 620w, /pooolse-lg.jpg 1980w`} />
               <img loading='lazy' src='/pooolse-md.jpg' alt='Pooolse' />
            </picture>
            <ul className='projects__list'>
               <li className='projects__item'>Folyamatosan fejlődő magyar vállalkozás </li>
               <li className='projects__item'>Saját fejlesztésű robotokkal való kereskedés</li>
               <li className='projects__item'>Nyilvánosság előtt magukat vállaló tulajdonosok</li>
               <li className='projects__item'>Több nemzetközi díj</li>
               <li className='projects__item'>7% átlagos havi bónusz</li>
            </ul>
         </div>
         <button className='btn btn--orange' onClick={() => router.push('/pooolse')}>
            Érdekel
         </button>
      </div>
   );
}
