import { closeMenu } from '@/utils/helpers';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';

export default function Navigation() {
   const { t } = useTranslation();
   return (
      <div className='navigation'>
         <input type='checkbox' name='' id='navi-toggle' className='navigation__checkbox' />
         <label htmlFor='navi-toggle' className='navigation__button'>
            <span className='navigation__icon'>&nbsp;</span>
         </label>
         <div className='navigation__background'>&nbsp;</div>
         <div className='navigation__nav'>
            <div className='navigation__proverb'>
               {t('Egy befektető élete')} <br /> <br />
               {t('Első év: Azt mondják, hogy túl kockázatos')} <br />
               {t('Második év: Azt mondják, hogy hazárdőr')} <br />
               {t('Harmadik év: Azt mondják, hogy csak vesztegeted az idődet')} <br />
               {t('Ötödik év: Azt mondják, hogy szerencséd volt')} <br />
               {t('Tizedik év: Megkérnek, hogy segíts nekik')}
            </div>
            <ul className='navigation__list'>
               <li className='navigation__item'>
                  <Link onClick={() => closeMenu()} href='/' className='navigation__link'>
                     {t('Kezdőlap')}
                  </Link>
               </li>
               <li className='navigation__item'>
                  <Link onClick={() => closeMenu()} href='/pooolse' className='navigation__link'>
                     Pooolse
                  </Link>
               </li>
               <li className='navigation__item'>
                  <Link onClick={() => closeMenu()} href='/tlc-trading' className='navigation__link'>
                     TLC Trading AI.
                  </Link>
               </li>
               <li className='navigation__item'>
                  <Link
                     onClick={() => closeMenu()}
                     href='https://drive.google.com/drive/folders/13boqiY0rrrsjtLcNnFpfxPOrVwIGVK5g?usp=share_link'
                     target='_blank'
                     className='navigation__link'
                  >
                     {t('Hasznos videók')}
                  </Link>
               </li>
               <li className='navigation__itam'>
                  <Link onClick={() => closeMenu()} href='/#availability' className='navigation__link'>
                     {t('Elérhetőségeink')}
                  </Link>
               </li>
               {/* <li className='navigation__item'>
                  <div className='navigation__social'>
                     <SocialIcon
                        network='facebook'
                        url='https://www.facebook.com/groups/771466154955044'
                        target='_blank'
                     />
                  </div>
               </li> */}
            </ul>
         </div>
      </div>
   );
}
