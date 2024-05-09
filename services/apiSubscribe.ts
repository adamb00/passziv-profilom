import { supabase } from '@/utils/supabase';
import { getCookie } from 'cookies-next';
import { FieldValues } from 'react-hook-form';

export const subscribe = async (subscription: FieldValues) => {
   const { data, error } = await supabase.from('subscriptions').insert(subscription).select();
   const cookie = getCookie('i18next');
   let message_23505;

   if (cookie === 'hu') {
      message_23505 = 'Korábban már feliratkozál!';
   } else if (cookie === 'en') {
      message_23505 = 'You already subscribed!';
   }

   if (error) {
      if (+error.code === 23505) throw new Error(message_23505);
   }

   return data;
};
