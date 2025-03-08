import { pagination } from '@/config/pagination';
import Link from 'next/link';

type Params = {
  currentPage: number;
  total: number;
  pathTemplate?: string;
};

export function Pagination({ currentPage, total, pathTemplate = '/list/$pageNumber' }: Params) {
  if (currentPage === 1 && total <= pagination.homePagePosts) return null;

  if (currentPage === 1 && total > pagination.homePagePosts)
    return (
      <div className="flex justify-center pb-4">
        <Link href={pathTemplate.replace('$pageNumber', '2')}>
          <button className="btn">Show more</button>
        </Link>
      </div>
    );

  return (
    <div className="flex justify-center pb-4">
      <div className="join">
        <Link href={+currentPage > 2 ? `/${+currentPage - 1}` : '/'}>
          <button className="join-item btn">«</button>
        </Link>

        <button className="join-item btn">Page {currentPage}</button>
        {total >
          (+currentPage - 1) * pagination.perPage +
            (pagination.featuredPosts + pagination.perPage) && (
          <Link href={pathTemplate.replace('$pageNumber', (+currentPage + 1).toString())}>
            <button className="join-item btn">»</button>
          </Link>
        )}
      </div>
    </div>
  );
}
