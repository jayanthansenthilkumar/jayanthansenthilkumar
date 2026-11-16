import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-mono font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#0A0A0A] rounded-none transition-all duration-100 outline-none select-none active:translate-x-[2px] active:translate-y-[2px] disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#0A0A0A] text-white shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#CCFF00] hover:text-[#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
        lime:
          "bg-[#CCFF00] text-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#CCFF00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
        cobalt:
          "bg-[#0038FF] text-white shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#CCFF00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
        outline:
          "bg-[#FFFFFF] text-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#E8E3D9] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
        ghost:
          "border-transparent bg-transparent text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#E8E3D9]",
        destructive:
          "bg-[#E11D48] text-white shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#E11D48] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]",
      },
      size: {
        default: "h-11 px-5 gap-2",
        sm: "h-9 px-3 gap-1.5 text-xs",
        lg: "h-13 px-7 gap-2.5 text-sm md:text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
