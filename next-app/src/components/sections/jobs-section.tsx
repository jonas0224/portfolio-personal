'use client';

import type { JobContent } from '@/types/content';
import { ExternalLink } from '@/components/external-link';
import { SECTION_SHELL } from '@/components/sections/constants';
import { KEY_CODES } from '@/lib/key-codes';
import { useState } from 'react';

type Props = {
  jobs: JobContent[];
};

export function JobsSection({ jobs }: Props) {
  const [activeTabId, setActiveTabId] = useState(0);

  const bump = (delta: number) => {
    setActiveTabId((id) => {
      const next = Math.min(jobs.length - 1, Math.max(0, id + delta));
      return next;
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP:
      case KEY_CODES.ARROW_UP_IE11:
        e.preventDefault();
        bump(-1);
        break;
      case KEY_CODES.ARROW_DOWN:
      case KEY_CODES.ARROW_DOWN_IE11:
        e.preventDefault();
        bump(1);
        break;
      default:
        break;
    }
  };

  return (
    <section id="jobs" className={`${SECTION_SHELL} max-w-[700px]`}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="jobs-inner flex flex-col [@media(min-width:700px)]:min-h-[340px] [@media(min-width:600px)]:flex-row">
        <div
          className="jobs-tablist relative z-[3] m-0 w-max max-w-full p-0 [@media(max-width:600px)]:-mx-[50px] [@media(max-width:600px)]:mb-[30px] [@media(max-width:600px)]:flex [@media(max-width:600px)]:w-[calc(100%+100px)] [@media(max-width:600px)]:overflow-x-auto [@media(max-width:600px)]:pl-[50px] [@media(max-width:480px)]:-mx-[25px] [@media(max-width:480px)]:w-[calc(100%+50px)] [@media(max-width:480px)]:pl-[25px]"
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          {jobs.map((job, i) => (
            <button
              key={job.company}
              type="button"
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              className="jobs-tab-btn flex h-[var(--tab-height)] w-full cursor-pointer items-center border-0 border-l-2 border-[var(--lightest-navy)] bg-transparent px-5 pb-0.5 text-left font-mono text-[length:var(--fz-xs)] whitespace-nowrap transition-colors hover:bg-[var(--light-navy)] focus-visible:outline-none [@media(max-width:768px)]:px-[15px] [@media(max-width:600px)]:flex [@media(max-width:600px)]:min-w-[120px] [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:border-b-2 [@media(max-width:600px)]:border-l-0 [@media(max-width:600px)]:text-center"
              style={{
                color: activeTabId === i ? 'var(--green)' : 'var(--slate)',
              }}
              onClick={() => setActiveTabId(i)}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <span
            className="pointer-events-none absolute top-0 left-0 z-10 hidden h-[var(--tab-height)] w-0.5 rounded-[var(--border-radius)] bg-[var(--green)] transition-transform duration-[250ms] [transition-timing-function:cubic-bezier(0.645,0.045,0.355,1)] delay-100 md:block"
            style={{
              transform: `translateY(calc(${activeTabId} * var(--tab-height)))`,
            }}
            aria-hidden
          />
        </div>

        <div className="jobs-panels relative ml-5 w-full [@media(max-width:600px)]:ml-0">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-labelledby={`tab-${i}`}
              aria-hidden={activeTabId !== i}
              hidden={activeTabId !== i}
              className={
                activeTabId === i ? 'job-panel-fade w-full px-[10px] py-[10px]' : 'hidden'
              }
            >
              <h3 className="mb-0.5 text-[length:var(--fz-xxl)] font-medium leading-snug text-[var(--lightest-slate)]">
                <span>{job.title}</span>
                <span className="text-[var(--green)]">
                  &nbsp;@&nbsp;
                  <ExternalLink href={job.url}>{job.company}</ExternalLink>
                </span>
              </h3>
              <p className="mb-[25px] font-mono text-[length:var(--fz-xs)] text-[var(--light-slate)]">
                {job.range}
              </p>
              <ul className="fancy-list">
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
