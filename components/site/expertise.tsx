import Link from 'next/link'
import { Script } from './primitives'

const LEFT = ['Anxiety', 'Panic Attacks', 'Trauma & PTSD', 'Childhood Trauma', 'Chronic Stress', 'Overthinking']
const RIGHT = [
  'Professional Burnout',
  'Perfectionism',
  'Sleep Difficulties',
  'Relationship Patterns',
  'Confidence & Self-Worth',
  'High Internal Pressure',
]

function Column({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item} className={i < items.length - 1 ? 'border-b border-border' : ''}>
          <Link
            href="#services"
            className="block py-6 text-[0.78rem] font-normal uppercase tracking-[0.14em] transition-colors hover:text-accent"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Expertise() {
  return (
    <section className="bg-card py-16 lg:py-[110px]">
      <div className="flex flex-col gap-10 px-6 md:px-[6%] lg:flex-row lg:gap-0 lg:px-0 lg:pl-[8.75%]">
        <h2 className="font-serif text-[2rem] leading-[1.25] font-light lg:w-[26.5%] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]">
          Areas
          <br />
          of <Script className="ml-1 inline-block translate-y-3">focus</Script>
        </h2>
        <div className="grid gap-0 md:grid-cols-2 md:gap-[6%] lg:w-[59.7%] lg:gap-[1.4%]">
          <Column items={LEFT} />
          <Column items={RIGHT} />
        </div>
      </div>
    </section>
  )
}
