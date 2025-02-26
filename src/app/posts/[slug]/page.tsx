import postsService from '@/services/posts.service';
import contentService from '@/services/content.service';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await postsService.getPostBySlug((await params).slug);
  const contentHtml = await contentService.getHtmlContent(post.fields.content);

  return (
    <div>
      <h1 className="prose">{post.fields.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <hr />
      <Link href="/">Home</Link>
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
  };
}
