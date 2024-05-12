import BlogItem from '@/components/organisms/Blog/BlogItem';
import { useBlogs } from '@/hooks/useBlogs';
import IBlogPost from '@/interfaces/IBlogPost';
import React from 'react';

export default function Blog() {
   const { blogs } = useBlogs();

   if (!blogs) return null;

   const sortedBlogs = blogs.sort((a: IBlogPost, b: IBlogPost) => +b.id - +a.id);

   return (
      <div className='blog'>
         {sortedBlogs.map((blog: IBlogPost) => (
            <BlogItem blog={blog} key={blog.id} />
         ))}
      </div>
   );
}
