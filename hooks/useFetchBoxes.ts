import { useEffect, useState } from 'react';

interface Box {
   title: string;
   content: string;
}

export const useFetchBoxes = (lang: string) => {
   const [boxes, setBoxes] = useState<Box[] | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`/boxData.${lang}.json`);
            const data = await response.json();
            setBoxes(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, [lang]);

   return { boxes, setBoxes };
};
