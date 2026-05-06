import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JobsSection } from "@/components/sections/jobs-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { about, contact, featuredProjects, hero, jobs, projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection hero={hero} />
      <AboutSection about={about} />
      <JobsSection jobs={jobs} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ProjectsSection projects={projects} />
      <ContactSection contact={contact} email={hero.ctaEmail} />
    </>
  );
}
