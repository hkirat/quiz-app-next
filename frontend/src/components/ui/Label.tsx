import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "mxcn"

const labelVariants = cva(
    "block text-sm font-semibold",
    {
        variants: {
            variant: {
                primary: "text-gray-900",
                secondary: "text-gray-500",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> { }

const Label: React.FC<LabelProps> = ({ className, variant, ...props }) => {
    return (
        <label
            className={cn(labelVariants({ variant, className }))}
            {...props}
        />
    )
}

export { Label, labelVariants }