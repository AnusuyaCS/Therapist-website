import { Script, TextLink } from './primitives'

const METHODS = [
  {
    title: 'Cognitive-Behavioral Therapy',
    body: 'CBT offers practical, structured tools to notice anxious thought patterns, loosen the grip of overthinking and perfectionism, and respond to stress in ways that feel more balanced.',
  },
  {
    title: 'EMDR Therapy',
    body: 'Eye Movement Desensitization and Reprocessing helps the brain process distressing memories so they carry less emotional charge, supporting healing from both single-incident and complex trauma.',
  },
  {
    title: 'Mindfulness-Based Practices',
    body: 'Mindfulness helps you step out of constant bracing and into the present moment, building the awareness and calm you need to slow down and reconnect with yourself.',
  },
  {
    title: 'Body-Oriented Techniques',
    body: "Anxiety and trauma live in the body as well as the mind. Gentle body-based work helps you recognize tension, regulate your nervous system, and feel safer in your own skin.",
  },
]

export function Specialties() {
  return (
    <section id="methods" className="bg-card pb-16 lg:pt-[98px] lg:pb-[130px]">
      <div className="flex flex-col gap-12 px-6 md:px-[6%] lg:flex-row lg:gap-0 lg:px-0 lg:pl-[8.75%]">
        <h2 className="font-serif text-[2rem] leading-[1.25] font-light lg:w-[30.3%] lg:text-[clamp(1.9rem,2.72vw,2.45rem)]">
          My <Script className="mx-1">methods</Script>
          <br />
          include…
        </h2>
        <ul className="grid gap-14 md:grid-cols-2 md:gap-x-[6%] lg:w-[56%] lg:gap-x-[7.2%] lg:gap-y-[100px] lg:pt-[18px]">
          {METHODS.map((item) => (
            <li key={item.title} className="lg:max-w-[370px]">
              <h3 className="font-serif text-[1.45rem] leading-[1.3] font-light">{item.title}</h3>
              <p className="mt-6 text-[0.9rem] leading-[1.8]">{item.body}</p>
              <TextLink href="#contact" className="mt-6 text-[0.68rem]">
                Ask about this approach
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
