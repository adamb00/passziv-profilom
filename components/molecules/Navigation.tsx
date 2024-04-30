import { closeMenu } from '@/utils/helpers';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Navigation() {
   return (
      <div className='navigation'>
         <input type='checkbox' name='' id='navi-toggle' className='navigation__checkbox' />
         <label htmlFor='navi-toggle' className='navigation__button'>
            <span className='navigation__icon'>&nbsp;</span>
         </label>
         <div className='navigation__background'>&nbsp;</div>
         <div className='navigation__nav'>
            <ul className='navigation__list'>
               <li className='navigation__item'>
                  <Link onClick={() => closeMenu()} href='/' className='navigation__link'>
                     Kezdőlap
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
                  <div className='navigation__social'>
                     <SocialIcon
                        network='facebook'
                        url='https://www.facebook.com/groups/771466154955044'
                        target='_blank'
                     />
                     <SocialIcon network='telegram' url='https://t.me/+XkPfDVZJO4xhZDZkx' target='_blank' />
                     <SocialIcon network='linktree' url='https://linktr.ee/passzivprofilom' target='_blank' />
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
