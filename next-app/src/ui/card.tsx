import type { HTMLAttributes } from "react";
import { cx } from "./utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-[var(--ref-radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 shadow-md transition-[box-shadow,transform,border-color] duration-[var(--ref-motion-duration-slow)] ease-[var(--ref-motion-ease-standard)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--ref-shadow-lg)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("mb-3 flex flex-col gap-1.5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cx("text-lg font-semibold text-[var(--color-text-primary)]", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx("text-sm text-[var(--color-text-secondary)]", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("text-sm text-[var(--color-text-primary)]", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("mt-4 flex items-center gap-2", className)} {...props} />;
}
