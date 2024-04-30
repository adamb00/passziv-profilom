import { supabase } from '@/utils/supabase';
import { FieldValues } from 'react-hook-form';

export const subscribe = async (subscription: FieldValues) => {
   const { data, error } = await supabase.from('subscriptions').insert(subscription).select();

   if (error) {
      console.log(error);
      if (+error.code === 23505) throw new Error('Korábban már feliratkozál!');
   }
   console.log(data);

   return data;
};
