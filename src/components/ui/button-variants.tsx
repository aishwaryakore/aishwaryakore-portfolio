import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground hover:shadow-primary hover:scale-105 transform transition-all duration-300",
        secondary: "bg-surface-elevated text-text-primary border border-border hover:bg-surface-hover hover:border-primary/50",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent",
        ghost: "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
        hero: "bg-gradient-hero text-primary-foreground shadow-glow-primary hover:shadow-glow-accent hover:scale-105 transform transition-all duration-500 border border-primary/20",
        outline: "border border-border bg-transparent text-text-primary hover:bg-surface-elevated hover:text-primary",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        xl: "h-12 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);