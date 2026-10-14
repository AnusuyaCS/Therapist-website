import Link from 'next/link'
import { BrandMark } from './primitives'

const NAVIGATE = [
  { label: 'About', href: '#about' },
  { label: 'Methods', href: '#methods' },
  { label: 'Meet Maya', href: '#meet-maya' },
  { label: 'FAQs', href: '#faqs' },
]
const SERVICES = [
  'Anxiety Therapy',
  'Panic Attack Treatment',
  'Trauma Therapy',
  'EMDR Therapy',
  'Burnout Counseling',
  'Perfectionism',
  'Telehealth in California',
]

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[0.75rem] font-normal uppercase tracking-[0.14em]">{children}</h2>
}

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="grid gap-12 px-6 py-16 md:grid-cols-2 md:px-[6%] lg:grid-cols-[38%_15%_19%_1fr] lg:gap-0 lg:px-0 lg:pt-[60px] lg:pb-[70px] lg:pl-[6.7%]">
        <div className="lg:pt-[42px]">
          <BrandMark size="lg" />
          <p className="mt-8 max-w-[374px] text-[0.9rem] leading-[1.75]">
            {"Anxiety, trauma, and burnout therapy for adults. Visit my calm, light-filled Santa Monica office or meet through secure telehealth from anywhere in California."}
          </p>
        </div>

        <nav aria-label="Footer">
          <ColumnHeading>Navigate</ColumnHeading>
          <ul className="mt-6 space-y-1.5 text-[0.85rem]">
            {NAVIGATE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnHeading>Services</ColumnHeading>
          <ul className="mt-6 space-y-1.5 text-[0.85rem]">
            {SERVICES.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnHeading>Office</ColumnHeading>
          <address className="mt-6 space-y-1.5 text-[0.85rem] not-italic">
            <p>Dr. Maya Reynolds, PsyD</p>
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
          </address>
          <p className="mt-6 max-w-[16rem] text-[0.85rem] leading-[1.6]">
            In-person sessions in Santa Monica &amp; telehealth for clients across California
          </p>
        </div>
      </div>

      <div className="bg-accent px-6 py-3 text-[0.75rem] text-accent-foreground md:px-[6%] lg:px-0 lg:pl-[6.8%]">
        <p>
          Terms | Privacy Policy | Disclaimer | © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · Santa Monica, CA
        </p>
      </div>
    </footer>
  )
}
