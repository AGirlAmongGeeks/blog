import contentService from '@/services/content.service';
import imagesService from '@/services/images.service';
import { Post } from '@/services/posts.service';
import { Asset } from 'contentful';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
  const coverImageSrc =
    post.fields.coverImage &&
    imagesService.getImage(post.fields.coverImage as Asset, {
      width: 400,
      height: 600,
      fit: 'thumb',
    });

  const backgroundStyle = {
    background: `linear-gradient(180deg, #ffffff00 0%, #ffffff00 10%, #ffffffee 60%, #ffffffff 100%), url(${coverImageSrc}) no-repeat`,
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link className="block pt-10" href={`/posts/${post.fields.slug}`} style={backgroundStyle}>
        <div className="px-5 pb-5 pt-14">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {post.fields.title}
          </h5>
        </div>
        <div className="px-5 mb-5 line-clamp-3">{contentService.getLead(post.fields.content)}</div>
      </Link>
    </div>
  );
}
