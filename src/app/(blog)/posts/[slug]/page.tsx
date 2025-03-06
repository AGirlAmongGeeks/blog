import postsService from '@/services/posts.service';
import contentService from '@/services/content.service';
import { Asset } from 'contentful';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await postsService.getPostBySlug((await params).slug);
  const contentHtml = await contentService.getHtmlContent(post.fields.content);

  return (
    <div className="py-4">
      <h1 className="m-auto pt-8 pb-4 text-4xl">{post.fields.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await postsService.getPosts();
  return posts.map(post => ({ slug: post.fields.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = await postsService.getPostBySlug((await params).slug);

  return {
    title: await post.fields.title,
    background: (post.fields.coverImage as Asset)?.fields?.file?.url,
  };
}
