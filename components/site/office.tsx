import Image from 'next/image'
import { Eyebrow, PillLink, Script } from './primitives'

const DETAILS = [
  {
    label: 'Location',
    value: '123th Street 45 W, Santa Monica, CA 90401',
  },
  {
    label: 'Sessions',
    value: 'In person in Santa Monica, or secure telehealth anywhere in California',
  },
  {
    label: 'Privacy',
    value: 'A quiet, private room where your comfort, safety, and confidentiality come first',
  },
]

export function Office() {
  return (
    <section id="office" aria-labelledby="office-heading" className="bg-secondary py-16 lg:py-[110px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 px-6 md:px-[6%] lg:w-[48%] lg:px-0 lg:pl-[8.8%]">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/our-office-sunlit.jpeg"
              alt="Sunlit therapy room with exposed brick, tall windows with sheer curtains, a gray sofa, and a soft swivel armchair"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-[72%] self-end">
            <Image
              src="/images/our-office-lounge.jpeg"
              alt="Bright counseling room with a gray sofa, round glass coffee table, olive tree, leather armchair, and bookshelves"
              fill
              sizes="(min-width: 1024px) 25vw, 62vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="px-6 md:px-[6%] lg:w-[44%] lg:px-0 lg:pr-[8.8%] lg:pt-[20px]">
          <Eyebrow className="text-[0.78rem] md:text-[0.78rem]">Our office</Eyebrow>
          <h2
            id="office-heading"
            className="mt-10 font-serif text-[2rem] leading-[1.3] font-light text-balance md:text-[2.4rem] lg:mt-[56px] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]"
          >
            A calm space to <Script className="ml-1">land</Script>.
          </h2>

          <p className="mt-8 text-[0.8rem] font-normal uppercase leading-[1.7] tracking-[0.12em]">
            Natural light, soft textures, and room to breathe.
          </p>
          <p className="mt-4 text-[0.95rem] leading-[1.75]">
            {"My Santa Monica office is a quiet, private space designed to feel grounding from the moment you arrive. Tall windows let in gentle daylight, the furniture is comfortable and unhurried, and the room is intentionally uncluttered, so there's space for whatever you bring in with you."}
          </p>
          <p className="mt-4 text-[0.95rem] leading-[1.75]">
            {"Many clients tell me the space itself helps them settle. You're welcome to take the armchair or the sofa, grab a blanket, and simply take a breath before we begin."}
          </p>

          <dl className="mt-10 divide-y divide-foreground/15 border-y border-foreground/15">
            {DETAILS.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="text-accent text-[0.72rem] font-normal uppercase tracking-[0.14em] sm:w-24 sm:shrink-0 sm:pt-1">
                  {item.label}
                </dt>
                <dd className="text-[0.95rem] leading-[1.6]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <PillLink href="#contact" className="mt-10 h-12 w-[190px] whitespace-nowrap">
            Visit the office
          </PillLink>
        </div>
      </div>
    </section>
  )
}
