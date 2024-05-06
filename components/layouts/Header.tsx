'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Header() {
   const router = useRouter();
   const { t } = useTranslation();
   return (
      <header className='header'>
         <h2 className='heading-primary heading-primary--main'>{t('A pénz a kitartás fáján nő')}</h2>

         <button className='btn btn--white btn--animated' onClick={() => router.push('/projects')}>
            {t('Projektek')}
         </button>
      </header>
   );
}
