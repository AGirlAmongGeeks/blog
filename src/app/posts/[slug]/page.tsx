import { PostsService } from '@/contentful/posts.service';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

const postsService = new PostsService();

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await postsService.getPostBySlug((await params).slug);

  const processedContent = await remark().use(html).process(post.fields.content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <h1>{post.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
