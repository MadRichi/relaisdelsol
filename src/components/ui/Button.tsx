import Link from "next/link";
import type { ComponentProps, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline" | "light";
type ButtonSize = "sm" | "md" | "lg" | "xl";

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
    "bg-transparent border border-current hover:bg-current/10",
  outline:
    "bg-transparent text-sol-terracotta border border-sol-terracotta hover:bg-sol-terracotta/10",
  light:
    "bg-sol-cream text-sol-bark border border-sol-cream hover:bg-sol-sand",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6",
  xl: "h-14 px-8",
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, children: _children, variant: _variant, size: _size, className: _className, ...linkProps } = props;
    return (
      <Link href={href} {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: _children, variant: _variant, size: _size, className: _className, href: _href, type, ...nativeProps } =
    props as NativeButtonProps;

  return (
    <button {...nativeProps} type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
