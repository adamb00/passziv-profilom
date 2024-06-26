import React from 'react';
import CompoundListItem from './CompoundListItem';
import { useTranslation } from 'react-i18next';

export default function CompoundList() {
   const { t } = useTranslation();
   return (
      <div>
         <ul className='compound__list'>
            <CompoundListItem key={1} title={t('Mi a kamatos kamat és miért jó neked?')}>
               <li className='compound__item--list__item'>
                  {t(
                     'Kamatos kamat alatt azt értjük, amikor nem csak a kezdeti tőkénk kamatozik, hanem a tőkénk után kapott kamatok is tovább kamatoznak.'
                  )}
               </li>
               <li className='compound__item--list__item'>
                  {t(
                     'Ez azt jelenti, hogy a tőkénk után kapott kamat nem kerül kifizetésre egy adott periódus után, hanem hozzáadódik a tőkénkhez, és ez az összeg tovább kamatozik.'
                  )}
               </li>
            </CompoundListItem>
            <CompoundListItem key={2} title={t('Miért fontos a kamatos kamat és hol találkozhatsz vele?')}>
               <li className='compound__item--list__item'>
                  {t(
                     'A hétköznapokban számos fontos pénzügyi döntés során – pl.: betéti számla választásakor, hitelfelvételkor vagy befektetéseknél – találkozhatsz a kamatos kamat fogalmával.'
                  )}
               </li>
               <li className='compound__item--list__item'>
                  {t(
                     'Ha érted ennek működését, akkor megalapozott és számodra előnyös pénzügyi döntéseket tudsz hozni.'
                  )}
               </li>
               <li className='compound__item--list__item'>
                  {t(
                     'Ha azonban a kamatos kamat ismeretlen fogalom számodra, akkor könnyen belefuthatsz olyan döntésekbe, amelynek évekig érzed a negatív hatását.'
                  )}
               </li>
            </CompoundListItem>
         </ul>
      </div>
   );
}
