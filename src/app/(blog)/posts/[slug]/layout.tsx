import Layout from '@/components/layout';
import postsService from '@/services/posts.service';
import { Asset } from 'contentful';
import { geistSans, geistMono } from '@/components/typography/geistSans';

export default async function PostLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const post = await postsService.getPostBySlug((await params).slug);
  const newLocal = {
    background: `
      linear-gradient(180deg, rgba(0, 0, 0, 0) 150px, var(--fallback-b1, oklch(var(--b1) / 1)) 450px),
      url(${(post.fields.coverImage as Asset).fields.file?.url})
    `,
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <html lang="en" data-theme="retro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[200px]`}
        style={newLocal}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
