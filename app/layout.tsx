import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'FIT CARDIAC DIAGNOSTIC CENTRE – Cardiac Imaging & Stress Testing in Canada',
  description:
    'FIT CARDIAC DIAGNOSTIC CENTRE provides fully digital cardiac imaging services in Canada, including echocardiogram, ECG, Holter monitor, stress testing, and ambulatory BP monitoring.',
  keywords:
    'FIT CARDIAC DIAGNOSTIC CENTRE, cardiac diagnostic centre, echocardiogram, stress testing, stress echo, ECG, Holter monitor, ambulatory blood pressure, heart disease Canada, cardiac clinic Toronto',
  authors: [{ name: 'FIT CARDIAC DIAGNOSTIC CENTRE' }],
  creator: 'FIT CARDIAC DIAGNOSTIC CENTRE',
  publisher: 'FIT CARDIAC DIAGNOSTIC CENTRE',
  metadataBase: new URL('https://fitcardiac.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FIT CARDIAC DIAGNOSTIC CENTRE – Where Every Heartbeat Matters',
    description:
      'Cardiac diagnostic imaging and stress testing centre offering echocardiogram, ECG, Holter monitor, stress echo, and ambulatory BP monitoring in Canada.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'FIT CARDIAC DIAGNOSTIC CENTRE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FIT CARDIAC DIAGNOSTIC CENTRE – Cardiac diagnostics in Canada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIT CARDIAC DIAGNOSTIC CENTRE – Cardiac Imaging & Stress Testing',
    description:
      'Fully digital cardiac diagnostic services in Canada, focused on early detection and prevention of heart disease.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://fitcardiac.example.com" />
        <meta name="theme-color" content="#14B8A6" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}

