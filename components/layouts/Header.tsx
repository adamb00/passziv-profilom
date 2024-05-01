'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
   const router = useRouter();
   return (
      <header className='header'>
         <div>
            <h2 className='heading-primary heading-primary--main'>A pénz a kitartás fáján nő</h2>
         </div>
         <button className='btn btn--white btn--animated' onClick={() => router.push('/projects')}>
            Projektek
         </button>
      </header>
   );
}
