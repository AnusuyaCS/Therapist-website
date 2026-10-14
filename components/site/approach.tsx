import Image from 'next/image'
import { Eyebrow, TextLink } from './primitives'

export function Approach() {
  return (
    <section id="approach" className="bg-secondary py-16 lg:py-[117px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="px-6 md:px-[6%] lg:w-[65%] lg:px-0 lg:pl-[8.8%]">
          <Eyebrow className="text-[0.78rem] md:text-[0.78rem]">My approach</Eyebrow>
          <h2 className="mt-12 font-serif text-[2rem] leading-[1.3] font-light md:text-[2.5rem] lg:mt-[120px] lg:text-[clamp(2.25rem,3.33vw,3rem)]">
            Warm, collaborative, and grounded.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-5 lg:mt-[62px] lg:max-w-[858px]">
            <div>
              <p className="text-[0.8rem] font-normal uppercase leading-[1.7] tracking-[0.12em]">
                Sessions are structured enough to feel supportive, with space left for reflection and depth.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.75]">
                {"I integrate evidence-based methods, including CBT, EMDR, mindfulness, and body-oriented techniques, to help you understand both the emotional and physiological sides of what you're experiencing."}
              </p>
            </div>
            <p className="text-[0.95rem] leading-[1.75]">
              {"I believe therapy works best when you feel respected, understood, and actively involved in the process. Beyond symptom relief, our goal is to build insight, resilience, and a stronger relationship with yourself that lasts well beyond our time together."}
            </p>
          </div>

          <TextLink href="#methods" className="mt-12 lg:mt-14">
            Explore my methods
          </TextLink>
        </div>

        <div className="relative mx-6 aspect-[326/688] max-h-[640px] md:mx-[6%] lg:mx-0 lg:max-h-none lg:w-[22.6%]">
          <Image
            src="/images/approach-light.png"
            alt="Sheer curtains glowing in sunlight beside an exposed brick wall"
            fill
            sizes="(min-width: 1024px) 23vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
