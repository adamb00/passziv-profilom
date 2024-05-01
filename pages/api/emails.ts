import Welcome from '@/emails/Welcome';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
   const { email, name } = JSON.parse(req.body);
   const response = await resend.emails.send({
      from: 'Passziv Profilom <support@passzivprofilom.com>',
      to: email,
      subject: `Welcome ${name}`,
      react: Welcome({ name }),
   });

   console.log(response);
   res.status(200).json({ status: 'success' });
}
