import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function TLC() {
   const router = useRouter();
   const { t } = useTranslation();

   return (
      <div className='projects__project'>
         <h2 className='heading-secondary'>TLC Trading ai.</h2>
         <div className='projects__desc'>
            <picture onClick={() => router.push('/tlc-trading')} className='projects__image'>
               <source srcSet={`/tlc-sm.jpg 320w, /tlc-md.jpg 620w, /tlc-lg.jpg 1980w`} />
               <img loading='lazy' src='/tlc-md.jpg' alt='TLC trading ai' />
            </picture>
            <ul className='projects__list'>
               <li className='projects__item'>{t('Egyszerű, felhasználó barát felület')}</li>
               <li className='projects__item'>{t('Forex és Cryptocurrency Kereskedés')}</li>
               <li className='projects__item'>{t('Hosszútávú, kormány által támogatott project')}</li>
               <li className='projects__item'>
                  <strong className='strong'>15%-30%</strong> {t('közötti havi hozam')}
               </li>
               <li className='projects__item'>{t('Nagyon erős és jövedelmező affeliate rendszer')}</li>
            </ul>
         </div>
         <button className='btn btn--orange' onClick={() => router.push('/tlc-trading')}>
            {t('Érdekel')}
         </button>
      </div>
   );
}
