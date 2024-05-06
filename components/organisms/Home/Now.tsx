import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Now() {
   const router = useRouter();
   const { t } = useTranslation();
   return (
      <div className='now'>
         <h2 className='heading-secondary'>{t('Most van az ideje a befektetésnek')}</h2>
         <p className='paragraph'>
            {t('Ha itt vagy, valószínűleg fontos számodra az')}
            <strong className='strong'>{t('anyagi biztonság')}</strong>
            {t(
               'és a jövő tervezése. Ebben a világban az egyik legfontosabb lépés, amit tehetünk, hogy elkezdünk befektetni.'
            )}
         </p>
         <button className='btn btn--orange' onClick={() => router.push('/projects')}>
            {t('Kezdjük el!')}
         </button>
      </div>
   );
}
