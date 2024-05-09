import UserInput from '@/components/atoms/UserInput';
import CompoundList from '@/components/organisms/Compound/CompoundList';
import Slogan from '@/components/organisms/Home/Slogan';
import { formatNumberWithCommas, numberPattern } from '@/utils/helpers';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function CompoundInterestCalculator() {
   const { control, handleSubmit, watch } = useForm();
   const cookie = getCookie('i18next');
   const { t } = useTranslation();
   const { x, P, n } = watch();
   const [compound, setCompound] = useState<number>();
   const message = t('Kérjük, csak számokat adjon meg');
   const assetRequired = t('Kérjük add meg a befektetett tőkéd értékét');
   const interestRequired = t('Kérjük add meg a kamat értékét');
   const prediodRequired = t('Kérjük add meg a vizsgált időszakot');
   const slogan = t('A kamatos kamat a világ nyolcadik csodája.\n Az, aki megérti, kapja… aki nem, az megfizeti.');
   const handleOnSubmit = async (data: FieldValues) => {
      const { x, P, n } = data;
      setCompound(Math.floor(+x * Math.pow(1 + +P / 100, +n)));
   };
   const compoundCalculated =
      cookie === 'en' && compound && compound !== 0
         ? `The invested capital ( ${formatNumberWithCommas(
              +x
           )}$ ) with ${P}% interest rate after ${n} months will be <br /><span class='green'>${formatNumberWithCommas(
              +compound.toFixed(0)
           )}$</span>.`
         : cookie === 'hu' && compound && compound !== 0
         ? ` A befektett tőke ( ${formatNumberWithCommas(+x)}$ ) ${P}% kamathozammal ${n} hónap után 
            <br /><span class='green green__compound'>${formatNumberWithCommas(+compound.toFixed(0))}$</span>`
         : '';

   return (
      <div className='compound'>
         <h2 className='heading-secondary'>{t('Kamatos kamat kalkulátor')}</h2>
         <form className='compound__form' id='compound__form' onSubmit={handleSubmit(handleOnSubmit)}>
            <h3 className='headig-tertiary'>{t('Kamatos kamat számítás')}</h3>
            <UserInput
               id='x'
               control={control}
               name='x'
               label={t('Befektett tőke értéke dollárban')}
               placeholder={t('Tőke')}
               color='#777'
               rules={{
                  required: assetRequired,
                  pattern: {
                     value: numberPattern,
                     message,
                  },
               }}
            />
            <UserInput
               id='P'
               control={control}
               name='P'
               label={t('Kamat százalék értéke')}
               placeholder={t('Kamat')}
               color='#777'
               rules={{
                  required: interestRequired,
                  pattern: {
                     value: numberPattern,
                     message,
                  },
               }}
            />
            <UserInput
               id='n'
               color='#777'
               control={control}
               name='n'
               label={t('Vizsgált időszak hónapokban')}
               placeholder={t('Időszak')}
               rules={{
                  required: prediodRequired,
                  pattern: {
                     value: numberPattern,
                     message,
                  },
               }}
            />

            <button className='btn btn--green btn--animated' type='submit'>
               {t('Számítás')}
            </button>

            {compound && compound !== 0 && (
               <p className='compound__income' dangerouslySetInnerHTML={{ __html: compoundCalculated }}></p>
            )}
         </form>

         <CompoundList />

         <Slogan writer='Albert Einstein' slogan={slogan} />
      </div>
   );
}
