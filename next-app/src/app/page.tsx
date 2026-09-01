import { ContactSection } from '@/components/sections/contact-section'
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section'
import { HeroSection } from '@/components/sections/hero-section'
import { HorizonSection } from '@/components/sections/horizon-section'
import { JobsSection } from '@/components/sections/jobs-section'
import { OptimizeForSection } from '@/components/sections/optimize-for-section'
import { WritingTeaserSection } from '@/components/sections/writing-teaser-section'
import { CONTACT_EMAIL } from '@/lib/site-contact'
import { about, contact, featuredProjects, hero, jobs, projects, writing } from '@/data/site'

export default function Home() {
  return (
    <>
      <HeroSection hero={hero} />
      <OptimizeForSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <HorizonSection projects={projects} />
      <JobsSection jobs={jobs} about={about} />
      <WritingTeaserSection writing={writing} />
      <ContactSection contact={contact} email={CONTACT_EMAIL} />
    </>
  )
}
