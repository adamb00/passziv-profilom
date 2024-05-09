import { useMutation, useQueryClient } from '@tanstack/react-query';
import { subscribe as subscribeFn } from '@/services/apiSubscribe';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useCreateSubscription = () => {
   const queryClient = useQueryClient();
   const { t } = useTranslation();
   const successMessage = t('Sikeresen feliratkozál! 🤩');
   const errorMessage = t('Valami hiba történt! 🤯');
   const { mutate: createSubscription, isPending: isCreating } = useMutation({
      mutationFn: subscribeFn,

      onSuccess: () => {
         toast.success(successMessage);
         queryClient.invalidateQueries({ queryKey: ['subscription'] });
      },

      onError: err => toast.error(err.message || errorMessage),
   });

   return { createSubscription, isCreating };
};
