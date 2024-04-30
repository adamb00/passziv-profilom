import { useEffect, useState } from 'react';
import FeatureBox from './FeatureBox';

export default function Features() {
   const [boxes, setBoxes] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('/boxData.json');
            const data = await response.json();
            setBoxes(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <div className='features'>
         <div className='features__row'>
            {boxes.map((box: { title: string; content: string }, index) => (
               <FeatureBox key={index} title={box.title}>
                  {box.content}
               </FeatureBox>
            ))}
         </div>
      </div>
   );
}
