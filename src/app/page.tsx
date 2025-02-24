import postsService from '@/services/posts.service';
import PostCard from '@/components/post-card';

export default async function Home() {
  const posts = await postsService.getPosts();

  return (
    <main>
      <div className={'grid grid-cols-3 gap-4'}>
        {posts?.map(post => <PostCard key={post.sys.id} post={post} />)}
      </div>
    </main>
  );
}
