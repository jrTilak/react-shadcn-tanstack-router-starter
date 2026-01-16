import { cn } from "@/lib/utils"
import { Link as LinkNative } from "@tanstack/react-router"
import { type ComponentProps } from "react"

export function Link({ className, ...props }: ComponentProps<typeof LinkNative>) {
  return (
    <LinkNative className={cn("underline font-medium text-foreground", className)} {...props} />
  )
}
