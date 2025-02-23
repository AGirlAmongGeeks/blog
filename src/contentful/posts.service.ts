import * as contentful from 'contentful';
import { TypePostSkeleton } from './types/TypePost';

export type Post = contentful.Entry<TypePostSkeleton, undefined, string>;

type PaginationOptions = {
  limit: number;
  skip: number;
};

export class PostsService {
  private client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT!,
  });

  async getPosts(
    { limit = 12, skip = 0 }: PaginationOptions = { limit: 12, skip: 0 },
  ): Promise<Post[]> {
    const response = await this.client.getEntries<TypePostSkeleton>({
      content_type: 'post',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      order: '-fields.date' as any,
      limit,
      skip,
    });
    return response.items;
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const post = await this.client.getEntries<TypePostSkeleton>({
      content_type: 'post',
      'fields.slug': slug,
    });

    if (post.items.length === 0) {
      throw new Error('Post not found');
    }

    return post.items[0];
  }
}
