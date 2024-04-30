import Welcome from '@/emails/Welcome';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const send = () =>
   resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'borsodi.dm@gmail.com',
      subject: 'Welcome!',
      react: Welcome(),
   });
