import UserInput from '@/components/atoms/UserInput';
import CompoundList from '@/components/organisms/Compound/CompoundList';
import Slogan from '@/components/organisms/Home/Slogan';
import { formatNumberWithCommas, numberPattern } from '@/utils/helpers';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function CompoundInterestCalculator() {
   const { control, handleSubmit, watch } = useForm();
   const [compound, setCompound] = useState<number>();
   const handleOnSubmit = async (data: FieldValues) => {
      const { x, P, n } = data;
      setCompound(+x * Math.pow(1 + +P / 12 / 100, +n * 10));
   };

   const { x, P, n } = watch();

   return (
      <div className='compound'>
         <h2 className='heading-secondary'>Kamatos kamat kalkulátor</h2>
         <form className='compound__form' id='compound__form' onSubmit={handleSubmit(handleOnSubmit)}>
            <h3 className='headig-tertiary'>Kamatos kamat számítás</h3>
            <UserInput
               id='x'
               control={control}
               name='x'
               label='Befektett tőke értéke dollárban'
               placeholder='Tőke'
               color='#777'
               rules={{
                  required: 'Kérjük add meg a befektetett tőkéd értékét',
                  pattern: {
                     value: numberPattern,
                     message: 'Kérjük, csak számokat adjon meg',
                  },
               }}
            />
            <UserInput
               id='P'
               control={control}
               name='P'
               label='Kamat százalék értéke'
               placeholder='Kamat'
               color='#777'
               rules={{
                  required: 'Kérjük add meg a kamat értékét',
                  pattern: {
                     value: numberPattern,
                     message: 'Kérjük, csak számokat adjon meg',
                  },
               }}
            />
            <UserInput
               id='n'
               color='#777'
               control={control}
               name='n'
               label='Vizsgált időszak hónapokban'
               placeholder='Időszak'
               rules={{
                  required: 'Kérjük add meg a vizsgált időszakot',
                  pattern: {
                     value: numberPattern,
                     message: 'Kérjük, csak számokat adjon meg',
                  },
               }}
            />

            <button className='btn btn--green btn--animated' type='submit'>
               Számítás
            </button>

            {compound && compound !== 0 && (
               <p className='compound__income'>
                  A befektett tőke ( {formatNumberWithCommas(+x)}$ ) {P}% kamathozammal {n} hónap után{' '}
                  <span className='green'>{formatNumberWithCommas(+compound.toFixed(0))}$</span> lesz.
               </p>
            )}
         </form>

         <CompoundList />

         <Slogan
            writer='Albert Einstein'
            slogan={'A kamatos kamat a világ nyolcadik csodája.\n Az, aki megérti, kapja… aki nem, az megfizeti.'}
         />
      </div>
   );
}
