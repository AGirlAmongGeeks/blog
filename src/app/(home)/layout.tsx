import type { Metadata } from 'next';
import Layout from '@/components/layout';
import { metadata as appMetadata } from '@/config/metadata';
import { geistMono, geistSans } from '@/components/typography/geistSans';

export const metadata: Metadata = {
  title: appMetadata.title,
  description: appMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
