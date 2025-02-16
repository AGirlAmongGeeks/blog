import { Post, PostsService } from '@/contentful/posts.service';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

const postsService = new PostsService();

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.sys.id}>
            <Link href={`/posts/${post.fields.slug}`}>{post.fields.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = (async () => {
  const posts = await postsService.getPosts();

  return { props: { posts } };
}) satisfies GetStaticProps<PostsProps>;
