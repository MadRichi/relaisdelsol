import Link from "next/link";
import type { ComponentProps, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sol-terracotta text-white border border-sol-terracotta hover:bg-sol-terracotta/90",
  ghost:
    "bg-transparent text-current border border-current hover:bg-current/5",
  outline:
    "bg-transparent text-sol-terracotta border border-sol-terracotta hover:bg-sol-terracotta/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6",
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-none font-sans text-sm uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sol-bark disabled:pointer-events-none disabled:opacity-60";

  const classes = joinClasses(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const nativeProps = props as NativeButtonProps;

  return (
    <button
      type={nativeProps.type ?? "button"}
      className={classes}
      {...nativeProps}
    >
      {children}
    </button>
  );
}
