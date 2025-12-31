import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Custom TabsList component with no underline
const NoUnderlineTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground border-b-0 after:content-none before:content-none",
      className
    )}
    {...props}
  />
))
NoUnderlineTabsList.displayName = "NoUnderlineTabsList"

export { NoUnderlineTabsList }
