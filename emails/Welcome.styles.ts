export const main = {
   backgroundColor: '#f7f7f7',
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

export const container: React.CSSProperties = {
   margin: '0 auto',
   padding: '20px 0 48px',
   display: 'flex',
};

export const paragraph = {
   fontSize: '16px',
   lineHeight: '26px',
   color: '#777',
};

export const btnContainer = {
   textAlign: 'center' as const,
};

export const button: React.CSSProperties = {
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

export const hr = {
   borderColor: '#cccccc',
   margin: '20px 0',
};

export const heading: React.CSSProperties = {
   textTransform: 'uppercase',
   fontSize: '1.6rem',
   letterSpacing: '0.2rem',
   backgroundColor: '#7ed56f',
   padding: '1rem',
   borderRadius: '0.2rem',
   color: '#f7f7f7',
};
export const heading__secondary: React.CSSProperties = {
   textTransform: 'uppercase',
   textAlign: 'center',
   color: '#7ed56f',
   fontSize: '2rem',
};
export const heading__tertiary: React.CSSProperties = {
   textTransform: 'uppercase',
   textAlign: 'center',
   color: '#ffb900',
   fontSize: '2=1.6rem',
};

export const listElem: React.CSSProperties = {
   paddingLeft: '.5rem',
   color: '#444',
};

export const image: React.CSSProperties = {
   position: 'relative',
   left: '50%',
   transform: 'translate(-50%)',
};
