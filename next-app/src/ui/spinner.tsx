import type { HTMLAttributes } from "react";
import { cx } from "./utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";

/** `brand`: ring uses `--color-brand` on neutral surfaces. `on-solid`: light ring on filled buttons (primary/danger). */
export type SpinnerTone = "brand" | "on-solid";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  tone?: SpinnerTone;
  /** If set, exposes `role="status"` and screen reader text. Omit when nested (e.g. inside a loading button). */
  label?: string;
}

const sizeClass: Record<SpinnerSize, string> = {
  xs: "h-3.5 w-3.5 border-2",
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-10 w-10 border-[3px]",
};

const toneRingClass: Record<SpinnerTone, string> = {
  brand: "border-[var(--color-brand)] border-r-transparent border-b-transparent",
  "on-solid": "border-white border-r-transparent border-b-transparent",
};

export function Spinner({ size = "md", tone = "brand", label, className, ...props }: SpinnerProps) {
  const graphic = (
    <span
      className={cx(
        "inline-block rounded-full border-solid motion-safe:animate-spin motion-reduce:animate-none",
        toneRingClass[tone],
        sizeClass[size],
      )}
      aria-hidden
    />
  );

  if (label) {
    return (
      <span role="status" className={cx("inline-flex items-center gap-2", className)} {...props}>
        {graphic}
        <span className="sr-only">{label}</span>
      </span>
    );
  }

  return (
    <span className={cx("inline-flex items-center", className)} aria-hidden {...props}>
      {graphic}
    </span>
  );
}
