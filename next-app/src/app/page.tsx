import { ContactSection } from '@/components/sections/contact-section'
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section'
import { HeroSection } from '@/components/sections/hero-section'
import { JobsSection } from '@/components/sections/jobs-section'
import { about, contact, featuredProjects, hero, jobs } from '@/data/site'

export default function Home() {
  return (
    <>
      <HeroSection hero={hero} />
      <JobsSection jobs={jobs} about={about} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ContactSection contact={contact} email={hero.ctaEmail} />
    </>
  )
}
