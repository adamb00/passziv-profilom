import React from 'react';
import CompoundListItem from './CompoundListItem';

export default function CompoundList() {
   return (
      <div>
         <ul className='compound__list'>
            <CompoundListItem key={1} title='Mi a kamatos kamat és miért jó neked?'>
               <li className='compound__item--list__item'>
                  Kamatos kamat alatt azt értjük, amikor nem csak a kezdeti tőkénk kamatozik, hanem a tőkénk után kapott
                  kamatok is tovább kamatoznak.
               </li>
               <li className='compound__item--list__item'>
                  Ez azt jelenti, hogy a tőkénk után kapott kamat nem kerül kifizetésre egy adott periódus után, hanem
                  hozzáadódik a tőkénkhez, és ez az összeg tovább kamatozik.
               </li>
            </CompoundListItem>
            <CompoundListItem key={2} title='Miért fontos a kamatos kamat és hol találkozhatsz vele?'>
               <li className='compound__item--list__item'>
                  A hétköznapokban számos fontos pénzügyi döntés során – pl.: betéti számla választásakor,
                  hitelfelvételkor vagy befektetéseknél – találkozhatsz a kamatos kamat fogalmával.
               </li>
               <li className='compound__item--list__item'>
                  Ha érted ennek működését, akkor megalapozott és számodra előnyös pénzügyi döntéseket tudsz hozni.
               </li>
               <li className='compound__item--list__item'>
                  Ha azonban a kamatos kamat ismeretlen fogalom számodra, akkor könnyen belefuthatsz olyan döntésekbe,
                  amelynek évekig érzed a negatív hatását.
               </li>
            </CompoundListItem>
         </ul>
      </div>
   );
}
