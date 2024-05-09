import React from 'react';
import { Button, Container, Hr, Img, Section, Text, Link } from '@react-email/components';
import {
   heading,
   hr,
   listElem,
   image,
   heading__secondary,
   heading__tertiary,
   btnContainer,
   paragraph,
   button,
} from './Welcome.styles';

export default function WelcomeEng({ name }: { name: string }) {
   return (
      <>
         <Text style={heading}>Welcome, {name}!</Text>
         <Hr style={hr} />
         <Section>
            <Text style={{ color: '#333' }}>
               You have taken the second step, which means you want to create a certain level or even more passive
               income for yourself. With this new source of income, you can stand on more legs, become independent from
               others.
            </Text>
            <Text style={listElem}>
               🟢 If you are an entrepreneur and work for yourself, you can go on vacation while something is making
               money for you.
            </Text>
            <Text style={listElem}>
               🟢 If you are an employee, you don not have to fear being fired and what will happen then.
            </Text>
            <Text style={listElem}>
               🟢 If you are already successful, you can diversify your waiting capital for investment.
            </Text>
            <Text style={{ color: '#7ed56f', textAlign: 'center' }}>
               The decision is yours whether you enter the future and the door leading to freedom.
            </Text>
            <Text style={{ color: '#333', textAlign: 'center' }}>
               We have brought you the following to help you, we haveve collected all the possible
               information-containing platforms, join our community.
            </Text>
         </Section>
         <Section>
            <Text style={heading__secondary}>Compound Interest</Text>

            <Container>
               <Img
                  src='https://fbfythyraexrdhlkdana.supabase.co/storage/v1/object/public/images/kamatos_kamat.jpg'
                  alt='Compound Interest'
                  width={300}
                  style={image}
               />
               <Text style={{ color: '#333', textAlign: 'right' }}>
                  Compound interest is the eighth wonder of the world.
               </Text>
               <Text style={{ color: '#333', textAlign: 'right', marginTop: '-1.2rem' }}>
                  He who understands it, earns it…he who does not, pays it.
               </Text>
               <Text style={{ color: '#28b485', textAlign: 'right', marginTop: '-1rem' }}>- Albert Einstein</Text>
            </Container>
         </Section>
         <Section style={btnContainer}>
            <Text style={paragraph}>You already know our website:</Text>
            <Link href='https://passzivprofilom.com' target='_blank'>
               Passive Profile
            </Link>
         </Section>
         <Section style={btnContainer}>
            <Text style={paragraph}>Our Facebook page, brief presentation of every project:</Text>
            <Button style={button} href='https://www.facebook.com/profile.php?id=61558493619317'>
               Facebook page
            </Button>
            <Text style={paragraph}>
               Our Facebook group, where we share fresh and useful information about the projects every day:
            </Text>
            <Button style={button} href='https://www.facebook.com/share/sveL7fyDy372Q6c8'>
               Facebook group
            </Button>
            <Text style={paragraph}>
               Our WhatsApp contact, if you are seriously interested and have already watched a few videos, we can help
               you take the next step:
            </Text>
            <Button
               style={button}
               href='https://api.whatsapp.com/send/?phone=36304497364&text&type=phone_number&app_absent=0'
            >
               WhatsApp
            </Button>
         </Section>
         <Section style={btnContainer}>
            <Text>We recommend reviewing them, don not rush with the decision, ask and we will help!</Text>
            <Text style={heading__tertiary}>{"Let's get rich and independent together."}</Text>
         </Section>
         <Section>
            <Text style={{ color: '#28b485', textAlign: 'right' }}>With greetings,</Text>
            <Text style={{ color: '#28b485', textAlign: 'right', marginTop: '-1.2rem' }}>Passive Profile team</Text>
            <Text style={{ color: '#ff7730', textAlign: 'center' }}>
               ⚠️ Trading on financial markets carries significant risks and can bring both profit and loss.
            </Text>
            <Text style={{ color: '#ed4245', textAlign: 'center' }}>
               ⚠️ Past trading performance does not guarantee future successful trades. This information is for
               educational and informational purposes only, and does not constitute individual investment advice. You
               are solely responsible for your actions and decisions when using this information!
            </Text>
         </Section>
      </>
   );
}
