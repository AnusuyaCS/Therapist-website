import Image from 'next/image'

export function Banner() {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-primary lg:min-h-[594px]">
      <Image src="/images/banner-coast.png" alt="" fill sizes="100vw" className="object-cover opacity-40" />
      <div className="relative px-6 py-20 md:px-[6%] lg:px-0 lg:pl-[8.75%]">
        <p className="max-w-[860px] font-serif text-[1.75rem] leading-[1.45] font-light text-primary-foreground text-pretty md:text-[2.2rem] lg:text-[clamp(1.9rem,2.65vw,2.4rem)]">
          {"Therapy can be a space to slow down, reconnect, and find a more sustainable way to live. "}
          <em className="italic">{"Not just relief from symptoms, but a stronger relationship with yourself."}</em>
        </p>
      </div>
    </section>
  )
}
