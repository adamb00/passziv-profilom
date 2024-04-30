import { FaCircleChevronDown, FaCircleChevronUp } from 'react-icons/fa6';
import MenuProps from '@/interfaces/MenuProps';

export default function ChevronIcon({ isOpen, setIsOpen }: MenuProps) {
   const handleOnClick = () => {
      setIsOpen(open => !open);
   };
   return (
      <>
         <div className='chevron-icon' onClick={handleOnClick}>
            {isOpen ? <FaCircleChevronUp /> : <FaCircleChevronDown />}
         </div>
      </>
   );
}
