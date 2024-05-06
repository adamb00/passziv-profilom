import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Introduction() {
   const router = useRouter();
   const { t } = useTranslation();
   return (
      <div className='introduction'>
         <h2 className='heading-secondary'>{t('Üdvözlünk az oldalon')}</h2>
         <p className='paragraph'>{t('Gratulálunk Az első lépést megtetted egy szabadabb és passzívabb élet felé.')}</p>
         <p className='paragraph'>
            {t(
               'A passzív bevétel nem álom, a mai világban egyre több eszköz áll a rendelkezésünkre, hogy minnél könnyebben megteremtsük szabadabb életünket. Mi ezeket a projecteket használjuk fel a saját álmunk, a passzív jövedelem kialakítására.'
            )}
         </p>
         <p className='paragraph'>
            {t(
               'A mi kis csapatunk tagjai is voltak alkalmazottak, akik nap mint nap dolgoztak keményen egy jobb fizetés érdekében.'
            )}
         </p>
         <p className='paragraph'>
            {t(
               'Alkalmazottból vállalkozók lettünk egy szabadabb élet reményében, itt még többet dolgoztunk, csak a magunk főnökei voltunk (még rosszabb). Később elértük azt a szintet, hogy a pénzünket dolgoztassuk magunk helyett.'
            )}
         </p>
         <p className='paragraph'>
            {t(
               'Ekkor értettük meg, egyszer élünk, és ha kicsivel is kezdjük, de a legjobb kezdés mindig a MOST, előbb utóbb eredményes lesz ha kitartóak vagyunk..'
            )}
         </p>
         <button className='btn btn--green' onClick={() => router.push('/projects')}>
            {t('Következő lépések')}
         </button>
      </div>
   );
}
