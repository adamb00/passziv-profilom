import { PropsWithChildren } from 'react';

interface FeatureBoxProps {
   title: string;
}

export default function FeatureBox({ title, children }: PropsWithChildren<FeatureBoxProps>) {
   return (
      <div className='features__box'>
         <h3 className='heading-tertiary'>{title}</h3>
         <div className='features__box--text'>{children}</div>
      </div>
   );
}
