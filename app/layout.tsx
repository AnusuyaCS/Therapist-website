import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Mulish, Newsreader, Mrs_Saint_Delafield } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mulish',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
})

const script = Mrs_Saint_Delafield({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script-face',
})

export const metadata: Metadata = {
  title: 'Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
  description:
    'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR, and burnout therapy for adults. In-person sessions and telehealth across California.',
  keywords: [
    'therapist Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapist Santa Monica',
    'EMDR therapy Santa Monica',
    'burnout therapy Los Angeles',
    'psychologist Santa Monica CA',
    'online therapy California',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD',
    description:
      'Warm, grounded therapy for adults navigating anxiety, panic, trauma, and burnout. In-person in Santa Monica and telehealth across California.',
    type: 'website',
    locale: 'en_US',
    images: ['/images/office-sunlit.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f3ede4',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  name: 'Dr. Maya Reynolds, PsyD',
  description:
    'Licensed clinical psychologist in Santa Monica, California offering therapy for anxiety, panic, trauma, and burnout. In-person and telehealth sessions.',
  image: '/images/dr-maya-reynolds.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123th Street 45 W',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  areaServed: ['Santa Monica', 'Los Angeles', 'California'],
  knowsAbout: ['Anxiety', 'Panic', 'Trauma', 'EMDR', 'CBT', 'Burnout', 'Perfectionism', 'Mindfulness'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${mulish.variable} ${newsreader.variable} ${script.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
