import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Intro } from '@/components/site/intro'
import { WhoWeHelp } from '@/components/site/who-we-help'
import { Banner } from '@/components/site/banner'
import { Expertise } from '@/components/site/expertise'
import { Approach } from '@/components/site/approach'
import { Statement } from '@/components/site/statement'
import { Specialties } from '@/components/site/specialties'
import { Schedule } from '@/components/site/schedule'
import { Faqs } from '@/components/site/faqs'
import { Footer } from '@/components/site/footer'
import { Office } from '@/components/site/office'
import { ContactForm } from '@/components/site/contact-form'
import { Contact } from '@/components/site/contact'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Banner />
        <Expertise />
        <Approach />
        <Statement />
        <Specialties />
        <Schedule />
        <Office />
        <Contact/>
        {/* <ContactForm /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
