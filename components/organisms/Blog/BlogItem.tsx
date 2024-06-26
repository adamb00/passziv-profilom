import IBlogPost from '@/interfaces/IBlogPost';
import { formatDate } from '@/utils/helpers';
import { getCookie } from 'cookies-next';
import React from 'react';
import { FacebookIcon, FacebookMessengerIcon, XIcon } from 'react-share';
import { FacebookShareButton, FacebookMessengerShareButton, TwitterShareButton } from 'react-share';
import { IoIosLink } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function BlogItem({ blog }: { blog: IBlogPost }) {
   const { id, title, blog_post, created_at } = blog;
   const lang = getCookie('i18next');
   const url = `https://passzivprofilom.com/blog#${id}`;

   return (
      <div id={id} className='blog__item'>
         <h2 className='heading-secondary heading-secondary--left'>{title}</h2>
         <div className='blog__share'>
            <FacebookShareButton url={url}>
               <FacebookIcon className='blog__share--icon' round />
            </FacebookShareButton>
            {/* <FacebookMessengerShareButton url={url} appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}>
               <FacebookMessengerIcon className='blog__share--icon' round />
            </FacebookMessengerShareButton> */}
            <TwitterShareButton url={url}>
               <XIcon className='blog__share--icon' round />
            </TwitterShareButton>
            <CopyToClipboard text={url}>
               <IoIosLink className='blog__share--icon blog__share--icon__share' />
            </CopyToClipboard>
         </div>
         <div className='blog__post' dangerouslySetInnerHTML={{ __html: blog_post }}></div>
         <div className='blog__created'>{formatDate(created_at.toString(), lang ?? 'hu')}</div>
      </div>
   );
}
