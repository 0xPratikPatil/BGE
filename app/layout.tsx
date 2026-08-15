import type { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bridgeglobeexims.com'),
  title: 'BRIDGEGLOBE EXIMS | Import & Export Company in India',
  description:
    'BRIDGEGLOBE EXIMS connects Indian producers with global buyers — handling sourcing, compliance, and logistics for fresh produce and spice exports across 50+ countries.',
  keywords:
    'import export company, global trade, agricultural products export, spices export, India export, international trade, B2B export',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'BRIDGEGLOBE EXIMS | Import & Export Company in India',
    description:
      'Connecting Indian producers with global buyers through reliable, compliant international trade.',
    type: 'website',
    images: [{ url: '/logo/final logo_1024-1024.png', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRIDGEGLOBE EXIMS | Import & Export Solutions',
    description: 'Connecting Indian producers with global buyers across 50+ countries.',
    images: ['/logo/final logo_1024-1024.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
