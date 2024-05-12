import { getBlogPosts } from '@/services/apiBlogs';
import { useQuery } from '@tanstack/react-query';

export function useBlogs() {
   const {
      isLoading,
      data: blogs,
      error,
   } = useQuery({
      queryKey: ['blog'],
      queryFn: getBlogPosts,
   });
   return { isLoading, error, blogs };
}
