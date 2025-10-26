import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export default function Button({ asChild, className = "", variant = "primary", size = "md", ...props }: Props) {
  const cls = [
    "inline-flex items-center justify-center rounded-2xl transition-colors",
    size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2",
    variant === "primary" && "bg-primary text-white hover:bg-primary-muted",
    variant === "secondary" && "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
    variant === "ghost" && "bg-transparent text-neutral-200 hover:bg-neutral-800",
    className,
  ].filter(Boolean).join(" ");

  if (asChild) {
    // @ts-ignore – allow anchor as child
    return React.cloneElement(props.children as React.ReactElement, { className: cls });
  }
  return <button className={cls} {...props} />;
}
