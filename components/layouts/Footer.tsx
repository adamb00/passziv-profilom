import { FieldValues, useForm } from 'react-hook-form';
import UserInput from '../atoms/UserInput';

import { useCreateSubscription } from '@/hooks/useSubscribe';

export default function Footer() {
   const { control, handleSubmit, reset } = useForm();
   const { isCreating, createSubscription } = useCreateSubscription();
   const handleOnSubmit = async (data: FieldValues) => {
      console.log(data);
      createSubscription(
         { ...data },
         {
            onSuccess: () => {
               reset();
            },
         }
      );
   };
   return (
      <footer className='footer'>
         <h2 className='heading-secondary heading-secondary--sub'>Most Te következel!</h2>
         <form className='footer__form' onSubmit={handleSubmit(handleOnSubmit)}>
            <UserInput
               control={control}
               name='name'
               placeholder='Add meg a neved'
               label='Név'
               rules={{
                  required: 'Kérjük add meg a neved!',
               }}
            />
            <UserInput
               control={control}
               name='email'
               placeholder='Add meg az e-mail címed'
               label='E-mail cím'
               rules={{
                  required: 'Kérjük add meg az e-mail címed!',
               }}
            />

            <button disabled={isCreating} className='btn btn--animated btn--orange' type='submit'>
               Kezdjük el!
            </button>
         </form>
      </footer>
   );
}
