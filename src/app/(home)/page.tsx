import postsService from '@/services/posts.service';
import PostCard from '@/components/post-card';
import PostHero from '@/components/post-hero';

export default async function Home() {
  const posts = await postsService.getPosts({ limit: 7 });

  return (
    <main>
      <div className="pt-4 pb-4">
        {posts.slice(0, 1)?.map(post => <PostHero key={post.sys.id} post={post} />)}
      </div>
      <div className={'grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-4'}>
        {posts.slice(1)?.map(post => <PostCard key={post.sys.id} post={post} />)}
      </div>
    </main>
  );
}
