import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text, Link } from '@react-email/components';
import * as React from 'react';

interface WelcomeProps {
   name: string;
}

const Welcome = ({ name }: WelcomeProps) => (
   <Html>
      <Head />
      <Preview>A pénz a kitartás fáján nő.</Preview>
      <Body style={main}>
         <Container style={container}>
            <Text style={heading}>Üdvözlünk, {name}!</Text>
            <Hr style={hr} />

            <Section>
               <Text style={{ color: '#333' }}>
                  Megtetted a második lépést, ez azt jelenti, hogy Te is szeretnél egy bizonyos szintű vagy akár jóval
                  több passzív bevételt teremteni magadnak. Ezzel az új bevételi forrással több lábra állni,
                  függetlenedni másoktól.
               </Text>
               <Text style={listElem}>
                  🟢 Ha vállakozó vagy és meg magadnak dolgozol, el tudsz menni nyaralni úgy, hogy közben van ami pénzt
                  termel.
               </Text>
               <Text style={listElem}>
                  🟢 Ha alkalmazott vagy, akkor nem kell attól rettegj, hogy kirúgnak és mi lesz akkor.
               </Text>
               <Text style={listElem}>
                  🟢 Ha pedig már sikeres vagy, akkor tudod diverzifikálni a beketetésre váró tőkéd.
               </Text>
               <Text style={{ color: '#7ed56f', textAlign: 'center' }}>
                  A döntés rád vár, belépsz-e a jövőbe és a szabadság felé vezető út ajtaján.
               </Text>
               <Text style={{ color: '#333' }}>
                  Segítségül hoztuk Neked a következőket, összeszedtük az összes lehetséges információkat tartalmazó
                  platformjainkat, lépj be, csatlakozz közösségünkhöz.
               </Text>
            </Section>
            <Section>
               <Text style={heading__secondary}>Kamatos kamat</Text>

               <Container>
                  <Img
                     src='https://fbfythyraexrdhlkdana.supabase.co/storage/v1/object/public/images/kamatos_kamat.jpg'
                     alt='Kamatos Kamat'
                     width={300}
                     style={image}
                  />
                  <Text style={{ color: '#333', textAlign: 'right' }}>
                     A kamatos kamat a világ nyolcadik csodája. Az, aki megérti, kapja…aki nem, az megfizeti.
                  </Text>
                  <Text style={{ color: '#28b485', textAlign: 'right', marginTop: '-1rem' }}>- Albert Einstein</Text>
               </Container>
            </Section>
            <Section style={btnContainer}>
               <Text style={paragraph}>A weboldalunkat már ismered:</Text>
               <Link href='https://passzivprofilom.com' target='_blank'>
                  Passziv Profilom
               </Link>
            </Section>
            <Section style={btnContainer}>
               <Text style={paragraph}>Facebook oldalunk, minden project rövid bemutatása:</Text>
               <Button style={button} href='https://www.facebook.com/profile.php?id=61558493619317'>
                  Facebook oldal
               </Button>
               <Text style={paragraph}>
                  Facebook csoportunk, itt minden nap friss és hasznos információkat osztunk meg a projectekről:
               </Text>
               <Button style={button} href='https://www.facebook.com/share/sveL7fyDy372Q6c8'>
                  Facebook csoport
               </Button>
               <Text style={paragraph}>
                  WhatsApp elérhetőségünk, ha komolyan érdekelnek és már megnéztél pár videót, tudunk a tovább lépésben
                  segíteni:
               </Text>
               <Button
                  style={button}
                  href='https://api.whatsapp.com/send/?phone=36304497364&text&type=phone_number&app_absent=0'
               >
                  WhatsApp
               </Button>
            </Section>
            <Section style={btnContainer}>
               <Text>Javasoljuk, nézd át őket, ne kapkodj a döntéssel, kérdezz és segítünk!</Text>
               <Text style={heading__tertiary}>Gazdagodjunk és függetlenedjünk együtt.</Text>
            </Section>
            <Section>
               <Text>Üdvözlettel</Text>
               <Text style={{ color: '#28b485' }}>Passzív Profilom csapata</Text>
               <Text style={{ color: '#ff7730' }}>
                  ⚠️ A pénzügyi piacokon folytatott kereskedés jelentős kockázatokkal jár, és nyereséget és veszteséget
                  is hozhat.
               </Text>
               <Text style={{ color: '#ed4245' }}>
                  ⚠️ ⚠︎ A múltbeli kereskedési teljesítmény nem garantálja a jövőbeli sikeres kereskedéseket. Ez az
                  információ csak oktatási és tájékoztatási célokat szolgál, és nem minősül egyéni befektetési
                  tanácsadásnak. Kizárólag Ön felelős a tetteiért és döntéseiért, amikor ezeket az információkat
                  használja!
               </Text>
            </Section>
         </Container>
      </Body>
   </Html>
);

export default Welcome;

const main = {
   backgroundColor: '#f7f7f7',
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
   color: '#777',
};

const btnContainer = {
   textAlign: 'center' as const,
};

const button: React.CSSProperties = {
   backgroundColor: '#7ed56f',
   letterSpacing: '0.1rem',
   borderRadius: '3px',
   color: '#f7f7f7',
   fontSize: '16px',
   textDecoration: 'none',
   textAlign: 'center' as const,
   width: '90%',
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
   backgroundColor: '#7ed56f',
   padding: '1rem',
   borderRadius: '0.2rem',
   color: '#f7f7f7',
};
const heading__secondary: React.CSSProperties = {
   textTransform: 'uppercase',
   textAlign: 'center',
   color: '#7ed56f',
   fontSize: '2rem',
};
const heading__tertiary: React.CSSProperties = {
   textTransform: 'uppercase',
   textAlign: 'center',
   color: '#ffb900',
   fontSize: '2=1.6rem',
};

const listElem: React.CSSProperties = {
   paddingLeft: '.5rem',
   color: '#444',
};

const image: React.CSSProperties = {
   position: 'relative',
   left: '50%',
   transform: 'translate(-50%)',
};
