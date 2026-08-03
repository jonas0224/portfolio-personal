import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

type Props = {
  title: string;
  children: ReactNode;
};

export function CaseStudySection({ title, children }: Props) {
  return (
    <Card className="ds-card-portfolio p-6 shadow-none motion-safe:hover:translate-y-0">
      <CardHeader className="mb-0">
        <CardTitle className="mb-3 text-[length:var(--fz-xl)] font-semibold text-[var(--lightest-slate)]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-[var(--light-slate)]">
        {children}
      </CardContent>
    </Card>
  );
}
