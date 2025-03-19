import { metadata } from '@/config/metadata';
import { theme } from '@/config/theme';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sm:w-[100%] md:w-[700px] lg:w-[980px] m-auto lg:py-8 px-2 py-4 text-4xl lg:text-5xl font-extrabold">
      <div className="flex flex-row justify-between items-center">
        <Link className="title" href="/">{metadata.title}</Link>
        <div className="logo" dangerouslySetInnerHTML={{ __html: theme.logoSvg }}></div>
      </div>
    </header>
  );
}
