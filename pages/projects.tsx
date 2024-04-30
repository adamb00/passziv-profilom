import { useEffect } from 'react';
import Pooolse from '@/components/organisms/Projects/Pooolse';
import TLC from '@/components/organisms/Projects/TLC';

export default function Projects() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className='projects'>
         <TLC />
         <Pooolse />
      </div>
   );
}
