import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JobsSection } from "@/components/sections/jobs-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { QualitySignalsSection } from "@/components/sections/quality-signals-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import {
  about,
  contact,
  featuredProjects,
  hero,
  jobs,
  leadershipHighlights,
  projects,
  qualitySignals,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection hero={hero} />
      <AboutSection about={about} />
      <LeadershipSection highlights={leadershipHighlights} />
      <JobsSection jobs={jobs} />
      <QualitySignalsSection signals={qualitySignals} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ProjectsSection projects={projects} />
      <RoadmapSection projects={projects} />
      <ContactSection contact={contact} email={hero.ctaEmail} />
    </>
  );
}
