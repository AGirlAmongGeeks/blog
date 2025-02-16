import { Post, PostsService } from '@/contentful/posts.service';
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

const postsService = new PostsService();

type PostProps = {
  post: Post;
};

export const getStaticPaths = (async () => {
  const allPosts = await postsService.getPosts();

  return {
    paths: allPosts.map(({ fields }) => ({
      params: { slug: fields.slug as string },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async context => {
  const post = await postsService.getPostBySlug(context.params!.slug as string);

  const processedContent = await remark().use(html).process(post.fields.content);
  const contentHtml = processedContent.toString();

  post.fields.content = contentHtml;

  return { props: { post } };
}) satisfies GetStaticProps<PostProps>;

export default async function Page({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.fields.content }} />
      <hr />
      <Link href="/posts">Back to posts</Link>
    </div>
  );
}
