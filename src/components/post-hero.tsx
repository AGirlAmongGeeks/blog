import contentService from '@/services/content.service';
import imagesService from '@/services/images.service';
import { Post } from '@/services/posts.service';
import { Asset } from 'contentful';
import Link from 'next/link';

export default function PostHero({ post }: { post: Post }) {
  const coverImageSrc =
    post.fields.coverImage &&
    imagesService.getImage(post.fields.coverImage as Asset, {
      width: 1000,
      fit: 'thumb',
    });

  return (
    <Link className="block" href={`/posts/${post.fields.slug}`}>
      <div
        className="hero h-[500px] rounded-lg"
        style={{
          backgroundImage: `url(${coverImageSrc})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{post.fields.title}</h1>
            <p className="mb-5">{contentService.getLead(post.fields.content)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
