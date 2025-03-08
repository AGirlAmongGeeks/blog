import postsService, { CategoryPost } from '@/services/posts.service';
import contentService from '@/services/content.service';
import { Asset } from 'contentful';

type PageParams = {
  slug: string;
};

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const post = await postsService.getPostBySlug((await params).slug);
  const contentHtml = await contentService.getHtmlContent(post.fields.content);

  return (
    <div className="py-4">
      <div className="flex flex-row items-center gap-2">
        <h1 className="py-8 text-4xl flex-auto">{post.fields.title}</h1>
        {post.fields?.categories?.map(category => (
          <div key={category.sys.id} className="badge badge-accent">
            {(category as CategoryPost).fields.name}
          </div>
        ))}
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const posts = await postsService.getPosts({ limit: 1000 });
  return posts.items.map(post => ({ slug: post.fields.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const post = await postsService.getPostBySlug((await params).slug);

  return {
    title: await post.fields.title,
    background: (post.fields.coverImage as Asset)?.fields?.file?.url,
  };
}
