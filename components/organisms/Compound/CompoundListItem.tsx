import React, { PropsWithChildren, useState } from 'react';
import ChevronIcon from '@/components/atoms/ChevronIcon';

interface CompoundListItemProps {
   title: string;
}

export default function CompoundListItem({ title, children }: PropsWithChildren<CompoundListItemProps>) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <li className='compound__item'>
         <div className='compound__item--header'>
            <h3 className='heading-tertiary'>{title}</h3>
            <ChevronIcon isOpen={isOpen} setIsOpen={setIsOpen} />
         </div>
         <ul className='compound__item--list'>{isOpen && children}</ul>
      </li>
   );
}
