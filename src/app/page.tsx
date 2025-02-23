import Link from 'next/link';
import { PostsService } from '@/contentful/posts.service';

export default async function Home() {
  const postsService = new PostsService();
  const posts = await postsService.getPosts();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className={'grid grid-cols-4 gap-4'}>
        {posts?.map(post => (
          <div
            key={post.sys.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/posts/${post.fields.slug}`}>
              {/* {
                <Image
                  className="p-8 rounded-t-lg"
                  src={post.fields.coverImage}
                  alt="product image"
                />
              } */}
            </Link>
            <div className="px-5 pb-5">
              <Link href={`/posts/${post.fields.slug}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {post.fields.title}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
