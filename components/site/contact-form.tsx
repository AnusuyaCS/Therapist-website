'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const CONTACT_EMAIL = 'hello@drmayareynolds.com'
const SESSION_OPTIONS = ['In person', 'Telehealth', 'Not sure yet'] as const

const fieldClass =
  'w-full border-0 border-b border-foreground/25 bg-transparent px-0 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent'
const labelClass = 'text-accent text-[0.72rem] font-normal uppercase tracking-[0.14em]'

export function ContactForm() {
  const [session, setSession] = useState<(typeof SESSION_OPTIONS)[number]>('In person')
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Session preference: ${session}`,
      '',
      message,
    ]
      .filter((line) => line !== false && line !== '')
      .join('\n')

    const subject = `Consultation request from ${name}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" aria-describedby="contact-form-note">
      <div>
        <h3 className="font-serif text-[1.6rem] leading-[1.3] font-light md:text-[1.85rem]">Request a free consultation</h3>
        <p id="contact-form-note" className="text-muted-foreground mt-3 text-[0.85rem] leading-[1.7]">
          Please keep details brief. We can talk through anything personal together, privately.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className={labelClass}>Full name</span>
          <input name="name" type="text" required autoComplete="name" maxLength={100} placeholder="Your name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelClass}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={150}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1">
        <span className={labelClass}>
          Phone <span className="text-muted-foreground normal-case tracking-normal">(optional)</span>
        </span>
        <input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="(310) 000-0000" className={fieldClass} />
      </label>

      <fieldset className="flex flex-col gap-3">
        <legend className={cn(labelClass, 'mb-3')}>Session preference</legend>
        <div className="flex flex-wrap gap-2">
          {SESSION_OPTIONS.map((option) => (
            <label
              key={option}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-[0.75rem] uppercase tracking-[0.12em] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2',
                session === option
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/30 hover:border-foreground',
              )}
            >
              <input
                type="radio"
                name="session"
                value={option}
                checked={session === option}
                onChange={() => setSession(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-1">
        <span className={labelClass}>{"What's bringing you in?"}</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={1500}
          placeholder="A few sentences is plenty."
          className={cn(fieldClass, 'resize-none')}
        />
      </label>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-12 w-[190px] items-center justify-center rounded-[50%] border border-foreground px-5 text-[0.78rem] font-normal uppercase tracking-[0.14em] whitespace-nowrap transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Send message
        </button>
        <p className="text-muted-foreground text-[0.78rem] leading-[1.6] sm:max-w-[14rem] sm:text-right">
          All inquiries are kept confidential.
        </p>
      </div>

      <p role="status" aria-live="polite" className={cn('text-accent text-[0.85rem] leading-[1.6]', !sent && 'sr-only')}>
        {sent ? "Thank you. Your email app should open with your message ready to send. I'll be in touch soon." : ''}
      </p>
    </form>
  )
}
