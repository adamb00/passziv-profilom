import { useRouter } from 'next/router';

export default function Now() {
   const router = useRouter();
   return (
      <div className='now'>
         <h2 className='heading-secondary'>Most van az ideje a befektetésnek</h2>
         <p className='paragraph'>
            Ha itt vagy, valószínűleg fontos számodra az <strong className='strong'>anyagi biztonság</strong> és a jövő
            tervezése. Ebben a világban az egyik legfontosabb lépés, amit tehetünk, hogy elkezdünk befektetni.
         </p>
         <button className='btn btn--orange' onClick={() => router.push('/projects')}>
            Kezdjük el!
         </button>
      </div>
   );
}
