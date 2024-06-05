import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TLCtrading() {
   const { t, i18n } = useTranslation();
   const lang = i18n.language;
   const video =
      lang === 'hu'
         ? 'https://fbfythyraexrdhlkdana.supabase.co/storage/v1/object/public/videos/TLC.mp4?t=2024-05-07T06%3A34%3A02.330Z'
         : 'https://fbfythyraexrdhlkdana.supabase.co/storage/v1/object/public/videos/TLC_EN.mp4';

   return (
      <div className='project'>
         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <h2 className='heading-secondary'>Tlc Trading AI.</h2>
         </Link>
         <div className='project__desc'>
            <p className='paragraph'>
               {t(
                  'A TLC Trading AI (korábban TradeLikeCrazy) platform 2024. januárjában indult hivatalos, Örményországban bejegyzett társaság. A TLC működésének lényege a kriptotőzsdei kereskedés, ezen belül konkrétan: kriptovaluta arbitrázs, futures és spot kereskedés skalpoló technikával'
               )}
            </p>
            <p className='paragraph'>
               {t(
                  'A TLC nagy hangsúlyt fektet a kockázatok csökkentésére, ezért a rendelkezésére álló tőkének csak legfeljebb a 2-5%-ával kereskedik egyidejűleg, ráadásul minimális tőkeáttéttel.'
               )}
            </p>
            <p className='paragraph'>
               {t('Ez az óvatos megközelítés az egyik garanciája a cég')}
               <strong className='strong'> {t('hosszútávú működésének és pénzügyi stabilitásának. ')}</strong>{' '}
               {t('A másik garancia az örmény kormányzat által biztosított tőkevédelem!')}
            </p>
            <p className='paragraph'>
               {t(
                  'A cég öt napon át forexen, és hat napon át kriptovalutával generál nyereséget hetente! Hétfőn emiatt nincs jóváírás.'
               )}
            </p>
            <p className='paragraph'>
               {t(
                  'Kereskedési csomagok vásárolhatók 20 USDT-től. Minél több csomagja van egy felhasználónak, nyilván annyival több eredményre számíthat.'
               )}
            </p>
         </div>

         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <button className='btn btn--animated btn--green'>{t('Kezdjük el most!')}</button>
         </Link>

         <div className='project__video'>
            <video className='project__video--content' controls preload='preload' id='tlc'>
               <source src={video} type='video/mp4' />
            </video>
         </div>

         <div>
            <h2 className='heading-secondary heading-secondary--sub'>{t('Mi lehet ennél jobb és egyszerűbb ??')}</h2>

            <p className='paragraph paragraph__alt'>
               {t(
                  'Az egyik legsikeresebb, automatizált kereskedés. December óta figyeljük, de most már muszáj volt beszállnunk annyi jót hallottunk róla és hatalmas projecté nőtte ki magát, ígéretes tervekkel.'
               )}
            </p>
            <p className='paragraph paragraph__alt'>{t('Ha még nem vagy benne, nem késő!')}</p>
            <p className='paragraph paragraph__alt'>
               {t(
                  'Szerintünk ez egy igazán hosszútávú, fent tartható és nem utolsó sorban kormány által támogatott project!'
               )}
            </p>
            <Link className='link' target='_blank' href='https://app.tlctrading.ai/register/galamb65'>
               <p className='paragraph paragraph_alt important'>{t('15%-30% közötti havi hozam')}</p>
            </Link>
         </div>

         <picture className='project__picture'>
            <source
               srcSet={
                  lang === 'hu'
                     ? `/tlc-boss.png 320w, /tlc-boss.png 620w, /tlc-boss.png 1980w`
                     : `/tlc-boss-en.png 320w, /tlc-boss-en.png 620w, /tlc-boss-en.png 1980w`
               }
            />
            <img
               loading='lazy'
               src={`/tlc-boss${lang == 'en' ? '-en' : ''}.png`}
               alt='TLC trading ai'
               className='project__image'
            />
         </picture>

         <p className='paragraph paragraph__alt'>{t('Csináljuk meg együtt, legyünk passzívan szabadok‼️')}</p>

         <p className='paragraph'>
            <Link
               className='link'
               target='_blank'
               href='https://drive.google.com/drive/u/2/folders/10oI6tmZCrWQ-Us3Qy5E8bfvAD3uRRFfI'
            >
               {t('Fontos tudnivalók és hasznos videók')}
            </Link>
         </p>

         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <button className='btn btn--animated btn--green'>{t('Kezdjük el most!')}</button>
         </Link>

         <picture className='project__picture'>
            <source
               srcSet={
                  lang === 'hu'
                     ? `/tlc-details.png 320w, /tlc-details.png 620w, /tlc-details.png 1980w`
                     : `/tlc-details-en.png 320w, /tlc-details-en.png 620w, /tlc-details-en.png 1980w`
               }
            />
            <img
               loading='lazy'
               src={`/tlc-details${lang == 'en' ? '-en' : ''}.png`}
               alt='TLC trading ai'
               className='project__image'
            />
         </picture>

         <p className='paragraph'>
            <Link
               className='link link--green'
               target='_blank'
               href={`https://cdn.tlctrading.ai/presentations%2FAffiliate_${lang && lang.toLocaleUpperCase()}.pdf`}
            >
               {t('Hivatalos prezentáció')}
            </Link>
         </p>

         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <button className='btn btn--animated btn--orange'>{t('Ne hagyd ki az esélyt!')}</button>
         </Link>
      </div>
   );
}
