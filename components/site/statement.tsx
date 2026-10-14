import Image from 'next/image'
import { Script } from './primitives'

export function Statement() {
  return (
    <section className="bg-card py-16 lg:pt-[95px] lg:pb-[95px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[4.5%]">
        <div className="relative aspect-[769/533] w-full lg:w-[53.4%]">
          <Image
            src="/images/statement-santa-monica.png"
            alt="A woman walking slowly along Santa Monica beach at golden hour"
            fill
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover"
          />
        </div>
        <h2 className="px-6 font-serif text-[2rem] leading-[1.3] font-light md:px-[6%] lg:w-[37%] lg:px-0 lg:pb-[100px] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]">
          Practical tools <Script className="mx-1">&amp;</Script> depth-oriented work for life in a fast-paced world.
        </h2>
      </div>
    </section>
  )
}
