import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';
import * as React from 'react';

interface WelcomeProps {
   name: string;
}

const Welcome = ({ name = 'Adam' }: WelcomeProps) => (
   <Html>
      <Head />
      <Preview>A pénz a kitartás fáján nő.</Preview>
      <Body style={main}>
         <Container style={container}>
            <Text style={heading}>
               Üdvözlünk <br /> {name}!
            </Text>
            <Hr style={hr} />

            <Section style={btnContainer}>
               <Text>
                  A Pooolse Projekt legfőbb célja, hogy a crypto piac kiemelkedő hozamaiból MINDENKI részesülhessen, Te
                  is - akkor is ha nem állnak közel hozzád a cryptok, s azok kereskedésével sem foglalkozol.
               </Text>
               <Button style={button} href='https://app.pooolse.com/join/9232'>
                  Pooolse
               </Button>
            </Section>
            <Section style={btnContainer}>
               <Text style={paragraph}>
                  A TLC nagy hangsúlyt fektet a kockázatok csökkentésére, ezért a rendelkezésére álló tőkének csak
                  legfeljebb a 2-5%-ával kereskedik egyidejűleg, ráadásul minimális tőkeáttéttel.
               </Text>
               <Button style={button} href='https://app.tlctrading.ai/register/galamb65'>
                  TLC Trading AI.
               </Button>
            </Section>
            <Text style={paragraph}>
               Köszönjük, hogy minket választottál! Nagy örömmel üdvözölünk a közösségünkben. Ha bármilyen kérdésed vagy
               kéréseid lennének, ne habozz felvenni velünk a kapcsolatot.
            </Text>
            <Text style={paragraph}>
               A legjobbakat,
               <br />
               <strong style={strong}>Passzív Profilom</strong>
            </Text>
         </Container>
      </Body>
   </Html>
);

export default Welcome;

const main = {
   backgroundColor: '#ffffff',
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
   margin: '0 auto',
   padding: '20px 0 48px',
   display: 'flex',
};

const paragraph = {
   fontSize: '16px',
   lineHeight: '26px',
};

const btnContainer = {
   textAlign: 'center' as const,
};

const button: React.CSSProperties = {
   backgroundImage: 'linear-gradient(to right bottom,#7ed56f, #28b485)',
   letterSpacing: '0.1rem',
   borderRadius: '3px',
   color: '#f7f7f7',
   fontSize: '16px',
   textDecoration: 'none',
   textAlign: 'center' as const,
   width: '50%',
   padding: '12px',
   textTransform: 'uppercase',
};

const hr = {
   borderColor: '#cccccc',
   margin: '20px 0',
};

const heading: React.CSSProperties = {
   textTransform: 'uppercase',
   fontSize: '1.6rem',
   letterSpacing: '0.2rem',
   backgroundImage: 'linear-gradient(to right bottom,#7ed56f, #28b485)',
   padding: '1rem',
   borderRadius: '0.2rem',
   color: '#f7f7f7',
};

const strong: React.CSSProperties = {
   color: '#ffb900',
};
