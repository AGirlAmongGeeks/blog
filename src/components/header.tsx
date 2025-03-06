import { metadata } from '@/config/metadata';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sm:w-[100%] md:w-[700px] lg:w-[980px] m-auto pt-8 pb-4 text-4xl font-extrabold">
      <Link href="/">{metadata.title}</Link>
    </header>
  );
}
