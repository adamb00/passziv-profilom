'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
   const router = useRouter();
   return (
      <header className='header'>
         <div>
            <h1 className='heading-primary heading-primary--sub'>Ne gyorsan akarj meggazdagodni</h1>
            <h2 className='heading-primary heading-primary--main'>hanem nagyon!</h2>
         </div>
         <button className='btn btn--white btn--animated' onClick={() => router.push('/projects')}>
            Projektek
         </button>
      </header>
   );
}
