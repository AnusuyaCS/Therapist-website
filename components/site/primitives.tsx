import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Script({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'font-script text-accent inline-block align-baseline text-[1.35em] leading-[0] font-normal tracking-normal normal-case not-italic',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-[0.8rem] font-normal uppercase leading-[1.8] tracking-[0.14em] md:text-[0.95rem]', className)}>
      {children}
    </p>
  )
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block border-b border-current pb-1.5 text-[0.78rem] font-normal uppercase tracking-[0.14em] transition-opacity hover:opacity-60',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function PillLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-[50%] border border-foreground px-5 py-3 text-[0.78rem] font-normal uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function BrandMark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span className="flex flex-col items-start leading-none">
      <span
        className={cn(
          'font-serif font-light tracking-[-0.01em]',
          size === 'lg' ? 'text-[2.6rem] md:text-[3.1rem]' : 'text-[1.7rem] md:text-[2.2rem]',
        )}
      >
        Maya Reynolds
      </span>
      <span
        className={cn(
          'text-accent mt-1.5 pl-1 font-normal uppercase tracking-[0.3em]',
          size === 'lg' ? 'text-[0.8rem] md:text-[0.95rem]' : 'text-[0.58rem] md:text-[0.72rem]',
        )}
      >
        PsyD · Clinical Psychologist
      </span>
    </span>
  )
}
