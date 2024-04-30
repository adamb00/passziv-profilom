import { useMutation, useQueryClient } from '@tanstack/react-query';
import { subscribe as subscribeFn } from '@/services/apiSubscribe';
import { toast } from 'react-hot-toast';

export const useCreateSubscription = () => {
   const queryClient = useQueryClient();
   const { mutate: createSubscription, isPending: isCreating } = useMutation({
      mutationFn: subscribeFn,

      onSuccess: () => {
         toast.success('Sikeresen feliratkozál! 🤩');
         queryClient.invalidateQueries({ queryKey: ['subscription'] });
      },

      onError: err => toast.error(err.message || 'Valami hiba történt! 🤯'),
   });

   return { createSubscription, isCreating };
};
