import { Plus } from 'lucide-react'
import { Script } from './primitives'

const FAQS = [
  {
    q: 'Do you offer in-person therapy in Santa Monica?',
    a: 'Yes. I see clients in person at my office at 123th Street 45 W, Santa Monica, CA 90401. It is a quiet, private space with natural light and a calm, uncluttered feel, and many clients say the space itself helps them feel more at ease when they arrive.',
  },
  {
    q: 'Can I do therapy online?',
    a: 'Yes. I offer secure telehealth sessions for clients located anywhere in California, so you can receive the same care from home or work.',
  },
  {
    q: 'Who do you typically work with?',
    a: 'I work with adults, often high-achieving, thoughtful entrepreneurs, creatives, and professionals, who are dealing with anxiety, panic, trauma, burnout, perfectionism, or high internal pressure.',
  },
  {
    q: 'What does trauma therapy with you look like?',
    a: 'Trauma work is paced carefully. We begin by focusing on safety and stabilization, then gradually process what happened using approaches such as EMDR and body-oriented techniques. The aim is for you to feel more regulated in your daily life, not just during sessions.',
  },
  {
    q: 'Is EMDR right for me?',
    a: 'EMDR can be helpful for both single-incident trauma and longer-standing patterns from childhood, relationships, or chronic stress. We will decide together whether it fits your goals, alongside other methods like CBT and mindfulness.',
  },
  {
    q: 'How do I know if we are a good fit?',
    a: 'If you are looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit. A brief consultation is a good way to find out.',
  },
]

export function Faqs() {
  return (
    <section id="faqs" className="bg-background py-16 lg:py-[110px]">
      <div className="flex flex-col gap-10 px-6 md:px-[6%] lg:flex-row lg:gap-0 lg:px-0 lg:pl-[8.75%]">
        <h2 className="font-serif text-[2rem] leading-[1.25] font-light lg:w-[26.5%] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]">
          Frequently asked
          <br />
          <Script className="inline-block translate-y-3">questions</Script>
        </h2>
        <ul className="lg:w-[59.7%]">
          {FAQS.map((item, i) => (
            <li key={item.q} className={i < FAQS.length - 1 ? 'border-b border-border' : ''}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-[1.2rem] leading-[1.4] font-light md:text-[1.35rem]">{item.q}</h3>
                  <Plus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-accent transition-transform group-open:rotate-45"
                    strokeWidth={1.25}
                  />
                </summary>
                <p className="max-w-[640px] pb-7 text-[0.95rem] leading-[1.75]">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
