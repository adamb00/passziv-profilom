import Link from 'next/link';
import React from 'react';

export default function TLCtrading() {
   return (
      <div className='project'>
         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <h2 className='heading-secondary'>Tlc Trading AI.</h2>
         </Link>
         <div className='project__desc'>
            <p className='paragraph'>
               A TLC Trading AI (korábban TradeLikeCrazy) platform 2024. januárjában indult hivatalos, Örményországban
               bejegyzett társaság. A TLC működésének lényege a kriptotőzsdei kereskedés, ezen belül konkrétan:
               kriptovaluta arbitrázs, futures és spot kereskedés skalpoló technikával
            </p>
            <p className='paragraph'>
               A TLC nagy hangsúlyt fektet a kockázatok csökkentésére, ezért a rendelkezésére álló tőkének csak
               legfeljebb a 2-5%-ával kereskedik egyidejűleg, ráadásul minimális tőkeáttéttel.
            </p>
            <p className='paragraph'>
               Ez az óvatos megközelítés az egyik garanciája a cég{' '}
               <strong className='strong'> hosszútávú működésének és pénzügyi stabilitásának. </strong> A másik garancia
               az örmény kormányzat által biztosított tőkevédelem!
            </p>
            <p className='paragraph'>
               A cég öt napon át forexen, és hat napon át kriptovalutával generál nyereséget hetente! Hétfőn emiatt
               nincs jóváírás.
            </p>
            <p className='paragraph'>
               Kereskedési csomagok vásárolhatók 20 USDT-től. Minél több csomagja van egy felhasználónak, nyilván
               annyival több eredményre számíthat.
            </p>
         </div>
         <Link href='https://app.tlctrading.ai/register/galamb65' target='_blank'>
            <button className='btn btn--animated btn--green'>Kezdjük el most!</button>
         </Link>
      </div>
   );
}
