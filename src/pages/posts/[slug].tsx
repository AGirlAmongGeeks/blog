import { Post, PostsService } from '@/contentful/posts.service';
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

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

  return { props: { post } };
}) satisfies GetStaticProps<PostProps>;

export default function Page({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <div>{post.fields.content}</div>
    </div>
  );
}
