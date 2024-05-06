import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Pooolse() {
   const router = useRouter();
   const { t } = useTranslation();

   return (
      <div className='projects__project'>
         <h2 className='heading-secondary'>Pooolse - Your Crypto Tripppler</h2>

         <div className='projects__desc'>
            <picture onClick={() => router.push('/pooolse')} className='projects__image'>
               <source srcSet={`/pooolse-sm.jpg 320w, /pooolse-md.jpg 620w, /pooolse-lg.jpg 1980w`} />
               <img loading='lazy' src='/pooolse-md.jpg' alt='Pooolse' />
            </picture>
            <ul className='projects__list'>
               <li className='projects__item'>{t('Folyamatosan fejlődő magyar vállalkozás')} </li>
               <li className='projects__item'>{t('Saját fejlesztésű robotokkal való kereskedés')}</li>
               <li className='projects__item'>{t('Nyilvánosság előtt magukat vállaló tulajdonosok')}</li>
               <li className='projects__item'>{t('Több nemzetközi díj')}</li>
               <li className='projects__item'>{t('7% átlagos havi bónusz')}</li>
            </ul>
         </div>
         <button className='btn btn--orange' onClick={() => router.push('/pooolse')}>
            {t('Érdekel')}
         </button>
      </div>
   );
}
