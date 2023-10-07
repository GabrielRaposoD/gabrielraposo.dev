import './globals.css';

import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import type { Metadata } from 'next';
import cs from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export const metadata: Metadata = {
  title: { default: 'gabrielraposo.dev', template: '%s | gabrielraposo.dev' },
  description: 'Software Engineer at kunaico.com',
  openGraph: {
    title: 'gabrielraposo.dev',
    description: 'Software Engineer at kunaico.com',
    url: 'https://gabrielraposo.dev',
    siteName: 'gabrielraposo.dev',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': '-1',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
      <body
        className={cs(`bg-black`, {
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        {children}
      </body>
    </html>
  );
}
