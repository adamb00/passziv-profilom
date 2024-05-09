import { Body, Container, Head, Html, Preview, Link } from '@react-email/components';
import * as React from 'react';
import WelcomeHun from './WelcomeHun';
import { main, container } from './Welcome.styles';

interface WelcomeProps {
   name: string;
   lang: string;
}

const Welcome = ({ name = 'adam', lang = 'en' }: WelcomeProps) => (
   <Html lang={lang}>
      <Head />
      <Preview>{lang === 'hu' ? 'A pénz a kitartás fáján nő.' : 'Money grows on the tree of persistence'}</Preview>
      <Body style={main}>
         <Container style={container}>{lang == 'hu' && <WelcomeHun name={name} />}</Container>
      </Body>
   </Html>
);

export default Welcome;
