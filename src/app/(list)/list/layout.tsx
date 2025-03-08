import type { Metadata } from 'next';
import Layout from '@/components/layout';
import { metadata as appMetadata } from '@/config/metadata';
import { geistMono, geistSans } from '@/components/typography/geistSans';
import { theme } from '@/config/theme';

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
    <html lang="en" data-theme={theme.list}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
