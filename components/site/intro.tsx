import Image from 'next/image'

export function Intro() {
  return (
    <section id="about" className="relative py-16 lg:py-[101px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="px-6 md:px-[6%] lg:w-[57%] lg:px-0 lg:pt-[126px] lg:pl-[8.8%]">
          <h2 className="font-serif text-[2rem] leading-[1.3] font-light text-balance md:text-[2.5rem] lg:max-w-[693px] lg:text-[clamp(2.25rem,3.33vw,3rem)]">
            Functional on the outside, quietly exhausted on the inside?
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-5 lg:mt-[52px] lg:max-w-[748px]">
            <div>
              <p className="text-[0.8rem] font-normal uppercase leading-[1.7] tracking-[0.12em]">
                {"You don't have to keep pushing through on your own."}
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.75]">
                {"Many of the Santa Monica adults I work with are high-achieving, thoughtful, and self-aware. Yet underneath, they're stuck in overthinking, carrying tension in their body, struggling to sleep, or always bracing for something to go wrong."}
              </p>
            </div>
            <p className="text-[0.95rem] leading-[1.75]">
              {"Others are navigating earlier life experiences that still shape their relationships, confidence, or sense of safety. Therapy can be a place to slow down and understand what's happening, both emotionally and physically, so you can feel more regulated in your daily life, not just during sessions."}
            </p>
          </div>
        </div>

        <div className="relative mx-6 aspect-[436/626] md:mx-[6%] lg:mx-0 lg:w-[30.3%]">
          <Image
            src="/images/office-calm.jpeg"
            alt="A calm, light-filled therapy room in Santa Monica with a gray sofa, olive tree, and sheer curtains"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover object-[32%_50%]"
          />
        </div>
      </div>
    </section>
  )
}
