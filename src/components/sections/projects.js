import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      margin-right: 15px;
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
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

  const GRID_LIMIT = 6;
  const allProjects = [
    {
      title: 'Helika.io Analytics Platform',
      description:
        'A data-driven analytics platform built with ReactJS and TypeScript. Focused on developing data visualization components and enhancing UI performance.',
      tech: ['ReactJS', 'TypeScript', 'Redux-saga', 'MUI', 'AWS'],
      github: 'https://github.com/helika-io',
      external: 'https://helika.io',
    },
    {
      title: 'Real Estate Management Tools',
      description:
        'Internal tools for real estate data management developed using NextJS and React Native. Collaborated with UI/UX teams to deliver seamless user experiences.',
      tech: ['NextJS', 'React Native', 'Spring Boot', 'SQL'],
      github: 'https://github.com/twistresources',
      external: 'https://twistresources.com',
    },
    {
      title: 'Entrego Logistics Platform',
      description:
        'Modernized legacy tech stacks and led the development of logistics and delivery management applications.',
      tech: ['ReactJS', 'JavaScript', 'Redux', 'Figma'],
      github: 'https://github.com/entrego',
      external: 'https://entrego.com.ph',
    },
    {
      title: 'Batch Processing System',
      description:
        'Designed and implemented SQL-based batch processing systems, improving operational efficiency for various client projects.',
      tech: ['Oracle SQL', 'PL/SQL', 'Spring Boot'],
      github: null,
      external: 'https://accenture.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing my projects and skills, built with Gatsby and styled-components.',
      tech: ['Gatsby', 'ReactJS', 'GraphQL', 'styled-components'],
      github: 'https://github.com/jonasyambao/portfolio',
      external: 'https://jonasyambao.dev',
    },
    {
      title: 'Spotify Connected App',
      description:
        'A web app that connects to the Spotify API, allowing users to search for tracks, view playlists, and analyze their music preferences.',
      tech: ['Node.js', 'ReactJS', 'Spotify API'],
      github: 'https://github.com/jonasyambao/spotify-app',
      external: 'https://spotify-connected-app.dev',
    },
  ];

  const firstSix = allProjects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? allProjects : firstSix;

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      <ul className="projects-grid">
        <TransitionGroup component={null}>
          {projectsToShow.map((project, i) => (
            <CSSTransition
              key={i}
              classNames="fadeup"
              timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
              exit={false}>
              <StyledProject
                ref={(el) => (revealProjects.current[i] = el)}
                style={{ transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms` }}>
                <div className="project-inner">
                  <header>
                    <h3 className="project-title">
                      <a href={project.external} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <div className="project-description">{project.description}</div>
                  </header>
                  <footer>
                    <ul className="project-tech-list">
                      {project.tech.map((tech, j) => (
                        <li key={j}>{tech}</li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </StyledProject>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
