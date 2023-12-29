import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "mxcn"

const buttonVariants = cva(
    "px-4 flex items-center text-gray-600 font-medium justify-center gap-2 text-sm rounded-xl duration-250 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white",
                ghost: "hover:bg-gray-200 bg-transparent",
                gradient: "primary-gradient text-white"
            },
            size: {
                default: "h-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }