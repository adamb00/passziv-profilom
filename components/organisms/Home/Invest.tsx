import { useTranslation } from 'react-i18next';
import InvestItem from './InvestItem';

export default function Invest() {
   const { t } = useTranslation();

   return (
      <div className='invest'>
         <h2 className='heading-secondary'>{t('Legyél Te is részese a jövőnek')}</h2>
         <p className='paragraph'>
            {t(
               'Befektetni nem csak a gazdagok kiváltsága, hanem mindenki lehetősége. A pénzünk nemcsak a jelen, hanem a jövőnk is. Induljunk el az úton a'
            )}
            <strong className='strong'> {t('pénzügyi biztonság és siker')} </strong>
            {t('felé, és legyünk részesei a jövőnek!')}
         </p>
         <p className='paragraph'>
            {t('Sokan álmodoznak a')} <strong className='strong'> {t('pénzügyi függetlenségről')} </strong>
            {t(
               'és a biztonságos jövőről. Azonban az álmodozás önmagában nem elegendő. Ahhoz, hogy ezek az álmok valóra váljanak,lépéseket kell tennünk. Az egyik legfontosabb lépés pedig a befektetés.'
            )}
         </p>

         <ul className='invest__list'>
            <InvestItem title={t('Miért érdemes befektetni?')} key={1}>
               <li className='invest__item--list__item'>
                  {t('A befektetések lehetőséget kínálnak arra, hogy pénzünket hosszú távon megsokszorozzuk.')}
               </li>
               <li className='invest__item--list__item'>
                  {t('A befektetések révén részvényesei lehetünk olyan vállalatoknak, amelyek sikerre vannak ítélve.')}
               </li>
               <li className='invest__item--list__item'>
                  {t('A megfelelő befektetésekkel kihasználhatjuk a pénz időértékének növekedését.')}
               </li>
            </InvestItem>
            <InvestItem title={t('Hogyan kezdjünk bele?')} key={2}>
               <li className='invest__item--list__item'>
                  {t(
                     'Ismerjük meg az elérhető befektetési lehetőségeket és válasszuk ki azokat, amelyek leginkább megfelelnek számunkra.'
                  )}
               </li>
               <li className='invest__item--list__item'>
                  {t('Készítsünk terveket és célokat, hogy strukturáltan és tudatosan kezeljük pénzügyeinket.')}
               </li>
               <li className='invest__item--list__item'>
                  {t('Kérjünk szakértő segítséget, ha szükséges, hogy biztos alapokon álljon a befektetési döntésünk.')}
               </li>
            </InvestItem>
            <InvestItem title={t('Miért érdemes most elkezdeni?')} key={3}>
               <li className='invest__item--list__item'>
                  {t(
                     'Az idő egyik legértékesebb eszköze a befektetések világában is. Minél hamarabb elkezdünk befektetni, annál hosszabb idő áll rendelkezésünkre a hozamok növekedéséhez.'
                  )}
               </li>
               <li className='invest__item--list__item'>
                  {t('A piacok mindig változnak, és a legjobb idő a befektetésre gyakran most van.')}
               </li>
            </InvestItem>
         </ul>
      </div>
   );
}
