import postsService from '@/services/posts.service';
import PostHero from '@/components/post-hero';
import { pagination } from '@/config/pagination';
import { PostsGrid } from '@/components/posts-grid';
import { Pagination } from '@/components/pagination';

export default async function Home() {
  const posts = await postsService.getPosts({ limit: pagination.homePagePosts });

  return (
    <main>
      <div className="pb-4">
        {posts.items
          .slice(0, pagination.featuredPosts)
          ?.map(post => <PostHero key={post.sys.id} post={post} />)}
      </div>
      <PostsGrid posts={posts.items.slice(pagination.featuredPosts)} />
      <Pagination currentPage={1} total={posts.total} />
    </main>
  );
}
