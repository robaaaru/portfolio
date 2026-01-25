import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const badgeVariants = cva("font-semibold rounded", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      outline: "border",
      solid: "bg-foreground text-background",
      surface: "border bg-primary text-primary-foreground",
    },
    size: {
      sm: "px-2 py-1 text-xs",
      md: "px-2.5 py-1.5 text-sm",
      lg: "px-3 py-2 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export function Badge({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) {
  const variantStyles = variant === "outline" ? {
    borderColor: "var(--foreground)",
    color: "var(--foreground)",
  } : {};

  return (
    <span 
      className={cn(badgeVariants({ variant, size }), className)} 
      style={variantStyles}
      {...props}
    >
      {children}
    </span>
  );
}
