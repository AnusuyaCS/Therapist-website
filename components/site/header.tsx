'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandMark } from './primitives'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Methods', href: '#methods' },
  { label: 'Meet Maya', href: '#meet-maya' },
  { label: 'Office', href: '#office' },
  { label: 'FAQs', href: '#faqs' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40">
      <div className="flex items-center justify-between px-6 py-6 md:px-[6%] md:py-8 lg:px-[5%]">
        <Link href="/" aria-label="Dr. Maya Reynolds, PsyD home" className="lg:pl-[1.2%]">
          <BrandMark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.83rem] font-normal uppercase tracking-[0.12em]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-flex h-12 w-[110px] items-center justify-center rounded-[50%] border border-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" strokeWidth={1.25} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="bg-background fixed inset-0 z-50 flex flex-col px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <BrandMark />
            <button type="button" className="p-2" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="size-6" strokeWidth={1.25} />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-16">
            <ul className="flex flex-col gap-6">
              {[...NAV, { label: 'Contact', href: '#contact' }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
