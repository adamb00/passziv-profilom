import { supabase } from '@/utils/supabase';

export const getBlogPosts = async () => {
   const { data, error } = await supabase.from('blog').select('*');

   if (error) {
      console.error(error);
      throw new Error('Blogs could not be loaded');
   }

   return data;
};
