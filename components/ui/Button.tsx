import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-terracotta to-terracotta-deep text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_4px_10px_-2px_rgba(154,52,18,0.35)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_8px_20px_-3px_rgba(154,52,18,0.45)] hover:-translate-y-0.5 hover:brightness-110",
        whatsapp:
          "bg-gradient-to-br from-whatsapp to-whatsapp-deep text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_4px_10px_-2px_rgba(29,168,81,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),_0_8px_20px_-3px_rgba(29,168,81,0.4)] hover:-translate-y-0.5 hover:brightness-110",
        secondary:
          "bg-gradient-to-br from-terracotta-soft/70 to-marigold-soft/60 text-terracotta-deep border border-terracotta-soft shadow-sm hover:border-terracotta/30 hover:text-ink hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ghost: "text-ink-soft hover:text-ink hover:bg-slate-soft/50",
        link: "text-terracotta underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type CommonProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export const LinkButton = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ variant, size, className, children, href, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  )
);
LinkButton.displayName = "LinkButton";
