import * as contentful from 'contentful';
import { TypePostSkeleton } from './TypePost';

export type Post = contentful.Entry<TypePostSkeleton, undefined, string>;

export class PostsService {
  private client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  async getPosts(): Promise<Post[]> {
    const response = await this.client.getEntries<TypePostSkeleton>({ content_type: 'post' });
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
