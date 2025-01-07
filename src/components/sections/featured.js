import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Featured = () => {
  const featuredProjects = [
    {
      title: 'Helika.io Platform',
      description:
        'Led the frontend development of Helika.io’s analytics platform, integrating ReactJS, TypeScript, and modern UI/UX principles to deliver data-driven insights.',
      tech: ['ReactJS', 'TypeScript', 'Redux-saga', 'MUI', 'AWS'],
      github: 'https://github.com/helika-io',
      external: 'https://helika.io',
    },
    {
      title: 'TwistResources Internal Tools',
      description:
        'Developed and maintained internal tools for real estate data management, collaborating closely with UI/UX teams and backend developers.',
      tech: ['NextJS', 'React Native', 'Spring Boot', 'SQL'],
      github: 'https://github.com/twistresources',
      external: 'https://twistresources.com',
    },
    {
      title: 'Entrego Logistics Platform',
      description:
        'Modernized legacy tech stacks and led frontend projects for Entrego’s logistics and delivery management systems.',
      tech: ['ReactJS', 'JavaScript', 'Redux', 'Figma'],
      github: 'https://github.com/entrego',
      external: 'https://entrego.com.ph',
    },
    {
      title: 'Batch Processing System - Accenture',
      description:
        'Designed and implemented complex SQL solutions and batch processing systems to improve operational efficiency.',
      tech: ['Oracle SQL', 'PL/SQL', 'Spring Boot'],
      github: null,
      external: 'https://accenture.com',
    },
  ];

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects.map((project, i) => (
          <StyledProject key={i} ref={(el) => (revealProjects.current[i] = el)}>
            <div className="project-content">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a href={project.external}>{project.title}</a>
              </h3>
              <div className="project-description">{project.description}</div>
              <ul className="project-tech-list">
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} aria-label="GitHub Link">
                    <Icon name="GitHub" />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} aria-label="External Link" className="external">
                    <Icon name="External" />
                  </a>
                )}
              </div>
            </div>
          </StyledProject>
        ))}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
