import * as contentful from 'contentful';
import { TypePageSkeleton } from './contentful-types';

export type Page = contentful.Entry<TypePageSkeleton, undefined, 'en-US'>;

class PagesService {
  private client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT!,
  });

  async getPages(): Promise<Array<Page>> {
    const response = await this.client.getEntries<TypePageSkeleton>({
      content_type: 'page',
      include: 1,
    });

    return response.items;
  }

  async getPageBySlug(slug: string): Promise<Page> {
    const post = await this.client.getEntries<TypePageSkeleton>({
      content_type: 'page',
      'fields.slug': slug,
      include: 1,
    });

    if (post.items.length === 0) {
      throw new Error('Page not found');
    }

    return post.items[0];
  }
}

const pagesService = new PagesService();

export default pagesService;
