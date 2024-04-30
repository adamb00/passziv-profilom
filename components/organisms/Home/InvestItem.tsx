import ChevronIcon from '@/components/atoms/ChevronIcon';
import { PropsWithChildren, useState } from 'react';

interface InvestItemProps {
   title: string;
}

export default function InvestItem({ title, children }: PropsWithChildren<InvestItemProps>) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <li className='invest__item'>
         <div className='invest__item--header'>
            <h3 className='heading-tertiary'>{title}</h3>
            <ChevronIcon isOpen={isOpen} setIsOpen={setIsOpen} />
         </div>
         <ul className='invest__item--list'>{isOpen && children}</ul>
      </li>
   );
}
