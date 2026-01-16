import { Slot } from "radix-ui"
import clsx from "clsx"

type ContainerProps = React.ComponentProps<"div"> & {
  asChild?: boolean
}

export function Container({
  children,
  className,
  asChild = false,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      className={clsx(
        "mx-auto w-full max-w-7xl",
        "p-4",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
