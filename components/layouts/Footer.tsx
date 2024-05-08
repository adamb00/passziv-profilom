import { FieldValues, useForm } from 'react-hook-form';
import UserInput from '../atoms/UserInput';

import { useCreateSubscription } from '@/hooks/useSubscribe';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
   const { control, handleSubmit, reset } = useForm();
   const { isCreating, createSubscription } = useCreateSubscription();
   const { t } = useTranslation();

   const nameRequired = t('Kérjük add meg a neved!');
   const emailRequired = t('Kérjük add meg az e-mail címed!');

   const handleOnSubmit = async (data: FieldValues) => {
      createSubscription(
         { ...data },
         {
            onSuccess: async () => {
               reset();
               try {
                  await fetch('/api/emails', { method: 'POST', body: JSON.stringify({ ...data }) });
               } catch (err) {
                  console.log(err);
               }
            },
         }
      );
   };
   return (
      <footer className='footer' id='availability'>
         <h2 className='heading-secondary heading-secondary--sub'>{t('Most Te következel!')}</h2>
         <form className='footer__form' onSubmit={handleSubmit(handleOnSubmit)}>
            <UserInput
               control={control}
               name='name'
               placeholder={t('Add meg a neved')}
               label={t('Név')}
               rules={{
                  required: nameRequired,
               }}
            />
            <UserInput
               control={control}
               name='email'
               placeholder={t('Add meg az e-mail címed')}
               label={t('E-mail cím')}
               rules={{
                  required: emailRequired,
               }}
            />

            <button disabled={isCreating} className='btn btn--animated btn--orange' type='submit'>
               {t('Kezdjük el!')}
            </button>
         </form>

         <div className='footer__availability'>
            <SocialIcon
               network='whatsapp'
               url='https://api.whatsapp.com/send/?phone=36304497364&text&type=phone_number&app_absent=0'
               target='_blank'
               className='footer__social-icon'
               rel='noreferrer noopener'
            />
            <SocialIcon
               network='facebook'
               url='https://www.facebook.com/profile.php?id=61558493619317'
               target='_blank'
               className='footer__social-icon'
               rel='noreferrer noopener'
            />
            <SocialIcon
               bgColor='#ff7730'
               network='email'
               url='mailto:support@passzivprofilom.com'
               target='_blank'
               className='footer__social-icon'
               rel='noreferrer noopener'
            />
         </div>
      </footer>
   );
}
