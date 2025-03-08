import postsService from '@/services/posts.service';
import { pagination } from '@/config/pagination';
import { Pagination } from '@/components/pagination';
import { PostsGrid } from '@/components/posts-grid';
import { metadata } from '@/config/metadata';

type PageParams = {
  pageNumber: string;
};

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const paramsValue = await params;

  const posts = await postsService.getPosts({
    limit: pagination.perPage,
    skip: (+paramsValue.pageNumber - 1) * pagination.perPage + pagination.featuredPosts,
  });

  return (
    <main>
      <PostsGrid posts={posts.items} />
      <Pagination currentPage={+paramsValue.pageNumber} total={posts.total} />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await postsService.getPosts();

  if (posts.total <= pagination.homePagePosts) return [];

  return Array.from(
    { length: Math.ceil((posts.total - pagination.homePagePosts) / pagination.perPage) - 1 },
    (_, i) => ({
      pageNumber: (i + 2).toString(),
    }),
  );
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  return {
    title: `Page ${(await params).pageNumber} - ${metadata.title}`,
  };
}
