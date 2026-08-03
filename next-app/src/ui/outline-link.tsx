import Link from 'next/link';
import type { ComponentProps } from 'react';
import { buttonClassName, type ButtonSize } from '@/ui/button';

type OutlineLinkProps = ComponentProps<typeof Link> & {
  size?: ButtonSize;
};

/** Internal navigation with design-system outline button styles. */
export function OutlineLink({
  size = 'sm',
  className,
  ...props
}: OutlineLinkProps) {
  return (
    <Link
      className={buttonClassName({ variant: 'outline', size, className })}
      {...props}
    />
  );
}
