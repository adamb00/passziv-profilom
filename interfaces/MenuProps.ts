import { Dispatch, SetStateAction } from 'react';

export default interface MenuProps {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}
