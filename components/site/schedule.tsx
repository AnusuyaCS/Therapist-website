import Image from 'next/image'
import { Eyebrow, PillLink, Script } from './primitives'

export function Schedule() {
  return (
    <section id="meet-maya" className="bg-card py-16 lg:py-[95px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="relative hidden aspect-[170/489] w-[11.8%] lg:mt-[117px] lg:block">
          <Image src="/images/detail-vase.png" alt="" fill sizes="12vw" className="object-cover" />
        </div>

        <div className="px-6 md:px-[6%] lg:w-[37%] lg:px-0 lg:ml-[8.3%]">
          <Eyebrow className="text-[0.78rem] md:text-[0.78rem]">Meet your Santa Monica therapist</Eyebrow>
          <h2 className="mt-10 font-serif text-[2rem] leading-[1.3] font-light text-balance md:text-[2.4rem] lg:mt-[100px] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]">
            {"Hi, I'm "}
            <Script className="ml-1">Maya</Script>.
          </h2>
          <p className="mt-6 text-[0.8rem] font-normal uppercase leading-[1.7] tracking-[0.12em]">
            Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
          </p>
          <p className="mt-6 text-[0.95rem] leading-[1.75]">
            {"I'm a licensed clinical psychologist based in Santa Monica, California, helping adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My work centers on anxiety, panic, trauma, and burnout, often with people who appear to be holding it all together while quietly struggling."}
          </p>
          <p className="mt-6 text-[0.95rem] leading-[1.75]">
            {"My style is warm, collaborative, and grounded, blending practical tools with depth-oriented work. I see clients in person at my Santa Monica office and through secure telehealth across California."}
          </p>
          <PillLink href="#contact" className="mt-8 h-12 w-[150px]">
            Book a session
          </PillLink>
        </div>

        <div className="relative mx-6 aspect-[497/606] md:mx-[6%] lg:mx-0 lg:ml-auto lg:w-[34.5%]">
          <Image
            src="/images/dr-maya-reynolds.png"
            alt="Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
        </div>
      </div>
    </section>
  )
}
