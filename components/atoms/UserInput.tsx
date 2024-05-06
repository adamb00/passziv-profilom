import { ComponentPropsWithoutRef } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface UserInputProps extends ComponentPropsWithoutRef<'input'> {
   name: string;
   control: Control;
   label: string;
   rules: RegisterOptions;
}

export default function UserInput({ control, name, label, placeholder, rules }: UserInputProps) {
   return (
      <Controller
         control={control}
         name={name}
         rules={rules}
         render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <div className='user-input'>
               <label htmlFor={name} className='user-input__label'>
                  {label}
               </label>
               <input
                  autoComplete='off'
                  autoFocus={false}
                  defaultValue={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  type='text'
                  id={name}
                  className='user-input__input'
                  placeholder={placeholder}
               />
               {error && (
                  <p className='user-input__error'>{error.message || 'Something went wrong. Please try again.'}</p>
                  // TODO TRANSLATE THIS
               )}
            </div>
         )}
      />
   );
}
