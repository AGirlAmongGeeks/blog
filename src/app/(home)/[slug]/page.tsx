import pagesService from '@/services/pagesService';
import contentService from '@/services/content.service';
import { metadata as appMetadata } from '@/config/metadata';

type PageParams = {
  slug: string;
};

const pageNotFoundText = 'not-found';

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const paramsValue = await params;
  const post = await pagesService.getPageBySlug(paramsValue.slug);
  const contentHtml = await contentService.getHtmlContent(post.fields.content);

  if (paramsValue.slug === pageNotFoundText) return null;

  return (
    <div className="py-4">
      <div className="flex flex-row items-center gap-2">
        <h1 className="py-8 text-4xl flex-auto">{post.fields.title}</h1>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const pages = await pagesService.getPages();

  if (pages.length === 0) return [{ slug: pageNotFoundText }];

  return pages.map(page => ({ slug: page.fields.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const post = await pagesService.getPageBySlug((await params).slug);

  return {
    title: `${await post.fields.title} 🔹 ${appMetadata.title}`,
  };
}
