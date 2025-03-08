import PostCard from '@/components/post-card';
import { Post } from '@/services/posts.service';

export function PostsGrid({ posts }: { posts: Post[]; }) {
  return (
    <div className={'grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-4'}>
      {posts.map(post => <PostCard key={post.sys.id} post={post} />)}
    </div>
  );
}
