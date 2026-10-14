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

const siteUrl = 'https://therapist-website-anu-6fb1.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds',
    template: '%s | Dr. Maya Reynolds, PsyD',
  },

  description:
    'Explore compassionate therapy for anxiety, panic, trauma, and burnout with Dr. Maya Reynolds, PsyD. In-person sessions in Santa Monica and telehealth across California.',

  applicationName: 'Dr. Maya Reynolds Therapy',

  authors: [{ name: 'Anusuya Pal' }],
  creator: 'Anusuya Pal',

  alternates: {
    canonical: '/',
  },

  keywords: [
    'therapist in Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapy Santa Monica',
    'EMDR therapist Santa Monica',
    'panic attack therapy',
    'burnout therapy Los Angeles',
    'psychologist Santa Monica California',
    'online therapy California',
    'cognitive behavioral therapy',
    'mindfulness-based therapy',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Dr. Maya Reynolds Therapy',
    title: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds',
    description:
      'Compassionate, personalized therapy for anxiety, panic, trauma, and burnout. In-person in Santa Monica and telehealth across California.',
    images: [
      {
        url: '/images/office-sunlit.jpeg',
        alt: 'A warm, sunlit therapy office',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anxiety & Trauma Therapy | Dr. Maya Reynolds',
    description:
      'Explore therapy for anxiety, trauma, panic, and burnout in Santa Monica and online across California.',
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
  width: 'device-width',
  initialScale: 1,
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dr. Maya Reynolds Therapy',
    url: siteUrl,
    creator: {
      '@type': 'Person',
      name: 'Anusuya Pal',
    },
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: 'Dr. Maya Reynolds, PsyD',
    description:
      'Therapy services for anxiety, panic, trauma, and burnout, with in-person sessions in Santa Monica and telehealth across California.',
    image: `${siteUrl}/images/dr-maya-reynolds.png`,
    url: siteUrl,
    areaServed: [
      {
        '@type': 'City',
        name: 'Santa Monica',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Los Angeles County',
      },
      {
        '@type': 'State',
        name: 'California',
      },
    ],
    knowsAbout: [
      'Anxiety',
      'Panic',
      'Trauma',
      'EMDR',
      'Cognitive Behavioral Therapy',
      'Burnout',
      'Perfectionism',
      'Mindfulness',
    ],
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${newsreader.variable} ${script.variable}`}
    >
      <body className="antialiased">
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data).replace(/</g, '\\u003c'),
            }}
          />
        ))}

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}