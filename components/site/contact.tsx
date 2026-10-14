import { Eyebrow, Script } from './primitives'
import { ContactForm } from './contact-form'

const DETAILS = [
  {
    label: 'Office',
    value: (
      <address className="not-italic">
        123th Street 45 W
        <br />
        Santa Monica, CA 90401
      </address>
    ),
  },
  {
    label: 'Sessions',
    value: 'In person in Santa Monica, or secure telehealth for adults across California',
  },
  {
    label: 'Email',
    value: (
      <a href="mailto:hello@drmayareynolds.com" className="border-b border-current/40 transition-opacity hover:opacity-70">
        hello@drmayareynolds.com
      </a>
    ),
  },
  {
    label: 'Reply',
    value: 'Within one to two business days, with a time for a free 15-minute consultation',
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-primary text-primary-foreground py-16 lg:py-[110px]">
      <div className="flex flex-col gap-14 px-6 md:px-[6%] lg:flex-row lg:items-start lg:justify-between lg:gap-[6%] lg:px-0 lg:pl-[8.8%] lg:pr-[8.8%]">
        <div className="lg:w-[40%] lg:pt-[20px]">
          <Eyebrow className="text-secondary text-[0.78rem] md:text-[0.78rem]">Get in touch</Eyebrow>
          <h2
            id="contact-heading"
            className="mt-10 font-serif text-[2rem] leading-[1.3] font-light text-balance md:text-[2.4rem] lg:mt-[56px] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]"
          >
            {"Let's begin, "}
            <Script className="text-secondary ml-1">gently</Script>.
          </h2>

          <p className="mt-8 text-[0.8rem] font-normal uppercase leading-[1.7] tracking-[0.12em] text-secondary">
            Reaching out is often the hardest step.
          </p>
          <p className="mt-4 text-[0.95rem] leading-[1.75] text-primary-foreground/85">
            {"Share a little about what's bringing you to therapy, and I'll reach out personally to schedule a free consultation. There's no pressure and no need to have the right words, just a conversation to see whether we're a good fit."}
          </p>

          <dl className="mt-10 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {DETAILS.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="text-secondary text-[0.72rem] font-normal uppercase tracking-[0.14em] sm:w-24 sm:shrink-0 sm:pt-1">
                  {item.label}
                </dt>
                <dd className="text-[0.95rem] leading-[1.6]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-[30rem] text-[0.8rem] leading-[1.7] text-primary-foreground/70">
            {"If you're in crisis or thinking about harming yourself, please call or text 988 (Suicide & Crisis Lifeline) or 911. This form isn't monitored for emergencies."}
          </p>
        </div>

        <div className="bg-card text-card-foreground p-6 sm:p-10 lg:w-[48%] lg:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
