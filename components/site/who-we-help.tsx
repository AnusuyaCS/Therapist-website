import Image from 'next/image'
import { Script } from './primitives'

const SERVICES = [
  {
    title: 'Anxiety & Panic Therapy',
    image: '/images/service-anxiety.png',
    alt: 'Hands holding a warm mug of tea by a sunlit window',
    body: 'Constant worry, racing thoughts, and panic can leave you feeling on edge even when life looks fine. Together we work with both the mind and body to quiet overthinking, ease physical tension, and help you feel calmer day to day.',
  },
  {
    title: 'Trauma Therapy & EMDR',
    image: '/images/service-trauma.png',
    alt: 'A woman seated on a rug with a hand over her heart, breathing slowly',
    body: 'For single-incident trauma and complex patterns rooted in childhood, relationships, or chronic stress. Our work is paced carefully, with an emphasis on safety and stabilization, so the past has less hold on your present.',
  },
  {
    title: 'Burnout & Perfectionism',
    image: '/images/service-burnout.png',
    alt: 'A closed laptop beside a journal and olive sprig in warm afternoon light',
    body: 'For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. We explore high internal pressure and build more sustainable ways of living and working in a fast-paced city.',
  },
]

export function WhoWeHelp() {
  return (
    <section id="services" className="bg-card py-16 lg:pt-[97px] lg:pb-[108px]">
      <h2 className="px-6 font-serif text-[2.2rem] leading-[1.3] font-light md:px-[6%] lg:px-[5%] lg:text-[clamp(2.25rem,3.33vw,3rem)]">
        How I can <Script>help</Script>
      </h2>

      <ul className="mt-12 grid gap-12 px-6 md:grid-cols-3 md:gap-5 md:px-[6%] lg:mt-[63px] lg:ml-[16.45%] lg:gap-[1.4%] lg:px-0 lg:pr-[5%]">
        {SERVICES.map((item) => (
          <li key={item.title}>
            <div className="relative aspect-[364/416] w-full">
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 26vw, 100vw" className="object-cover" />
            </div>
            <h3 className="mt-8 font-serif text-[1.6rem] leading-[1.3] font-light lg:mt-10 lg:text-[1.7rem]">
              {item.title}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-[1.75] lg:pr-[10%]">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
