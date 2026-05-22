import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Spinner } from "./spinner";
import { cx } from "./utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-[var(--ref-radius-md)] font-medium transition-[color,background-color,border-color,opacity,transform,box-shadow] duration-[var(--ref-motion-duration-base)] ease-[var(--ref-motion-ease-standard)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] enabled:motion-safe:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]",
  ghost: "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]",
  danger: "bg-[var(--color-error)] text-white hover:opacity-90",
  outline:
    "border border-[var(--color-brand)] bg-transparent text-[var(--color-brand)] hover:bg-transparent font-[family-name:var(--ds-btn-font,inherit)] rounded-[length:var(--ds-btn-radius,var(--ref-radius-md))] ds-btn-outline",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-auto px-4 py-3 text-xs leading-none",
  md: "h-10 px-4 text-sm",
  lg: "h-auto px-7 py-5 text-sm leading-none",
};

const spinnerSize: Record<ButtonSize, "xs" | "sm" | "md"> = {
  sm: "xs",
  md: "sm",
  lg: "md",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cx(
    baseClass,
    variantClass[variant],
    variant !== "outline" && sizeClass[size],
    variant === "outline" && size === "sm" && "ds-btn-outline-sm",
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={buttonClassName({ variant, size, className })}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner
            size={spinnerSize[size]}
            tone={variant === "primary" || variant === "danger" ? "on-solid" : "brand"}
          />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
