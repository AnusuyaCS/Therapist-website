import Image from 'next/image'
import { Eyebrow, Script, TextLink } from './primitives'

export function Hero() {
  return (
    <section className="relative pb-20 md:pb-[5.5%] lg:pb-[78px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0 lg:pt-[39px]">
        <div className="relative order-2 aspect-[497/572] w-full lg:order-none lg:w-[34.5%]">
          <Image
            src="/images/office-sunlit.jpeg"
            alt="Dr. Maya Reynolds' sunlit Santa Monica therapy office with exposed brick, tall windows, and a soft armchair"
            fill
            priority
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover object-[62%_50%]"
          />
        </div>

        <div className="order-1 flex flex-col px-6 md:px-[6%] lg:order-none lg:w-[49.5%] lg:justify-between lg:px-0 lg:pl-[8.3%]">
          <Eyebrow className="max-w-[26rem] lg:pt-1.5">
            In-person therapy in Santa Monica &amp; telehealth across California
          </Eyebrow>

          <div className="mt-8 lg:mt-0 lg:pb-[17px]">
            <h1 className="font-serif text-[2.5rem] leading-[1.25] font-light tracking-[-0.01em] text-balance md:text-[3.2rem] lg:text-[clamp(2.75rem,4.17vw,3.75rem)]">
              Anxiety &amp; trauma therapy in Santa Monica, so you can finally <Script>exhale</Script>.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1rem] leading-[1.8] lg:mt-9 lg:text-[1.05rem]">
              Warm, grounded therapy with licensed clinical psychologist Dr. Maya Reynolds, PsyD, for adults who feel
              overwhelmed by anxiety, panic, burnout, or the lingering effects of past experiences.
            </p>
            <TextLink href="#contact" className="mt-8 lg:mt-10">
              Request a consultation
            </TextLink>
          </div>
        </div>

        <div className="relative hidden self-end lg:ml-auto lg:block lg:aspect-[115/378] lg:w-[8%]">
          <Image src="/images/detail-olive.png" alt="" fill sizes="8vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
