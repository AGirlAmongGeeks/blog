/* eslint-disable @next/next/no-img-element */
import contentService from '@/services/content.service';
import imagesService from '@/services/images.service';
import { Post } from '@/services/posts.service';
import { Asset } from 'contentful';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
  const coverImageSrcWide =
    post.fields.coverImage &&
    imagesService.getImage(post.fields.coverImage as Asset, {
      width: 800,
      height: 300,
      fit: 'thumb',
    });

  const coverImageSrcSide =
    post.fields.coverImage &&
    imagesService.getImage(post.fields.coverImage as Asset, {
      width: 200,
      height: 300,
      fit: 'thumb',
    });

  return (
    <Link className="block" href={`/posts/${post.fields.slug}`}>
      <div className="card glass md:card-side shadow-xl h-[250px]">
        <figure>
          <img
            className="w-[100%] md:hidden"
            src={coverImageSrcWide}
            alt={((post.fields.coverImage as Asset).fields?.title ?? '') as string}
          />
          <img
            className="h-[100%] max-md:hidden"
            src={coverImageSrcSide}
            alt={((post.fields.coverImage as Asset).fields?.title ?? '') as string}
          />
        </figure>
        <div className="card-body md:max-w-[70%] lg:max-w-[350px]">
          <h2 className="card-title">{post.fields.title}</h2>
          <p className="line-clamp-2 max-h-[50px]">{contentService.getLead(post.fields.content)}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Read</button>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
