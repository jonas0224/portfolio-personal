import aboutJson from "@/content/site/about.json";
import contactJson from "@/content/site/contact.json";
import featuredJson from "@/content/site/featured-projects.json";
import heroJson from "@/content/site/hero.json";
import jobsJson from "@/content/site/jobs.json";
import leadershipJson from "@/content/site/leadership.json";
import projectsJson from "@/content/site/projects.json";
import qualitySignalsJson from "@/content/site/quality-signals.json";
import type {
  AboutContent,
  ContactContent,
  HeroContent,
  JobContent,
  LeadershipHighlight,
  ProjectContent,
  QualitySignal,
} from "@/types/content";

export const hero = heroJson as HeroContent;
export const about = aboutJson as AboutContent;
export const featuredProjects = featuredJson as ProjectContent[];
export const projects = projectsJson as ProjectContent[];
export const jobs = jobsJson as JobContent[];
export const contact = contactJson as ContactContent;
export const leadershipHighlights = leadershipJson as LeadershipHighlight[];
export const qualitySignals = qualitySignalsJson as QualitySignal[];
