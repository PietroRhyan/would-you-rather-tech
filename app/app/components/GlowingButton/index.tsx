import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function GlowingButton({ asChild = false, children, ...props }: GlowingButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className="text-sm flex items-center gap-2.5 p-3 text-white hover:bg-black-sec/90 bg-black-sec rounded-xl relative after:-z-[1] after:absolute after:-inset-[1px] after:-bottom-[0.5px] after:bg-[linear-gradient(var(--gradient-angle),#E52020,#1851E5)] after:animate-rotation after:rounded-[13px] hover:after:blur-[8px] after:blur-[6px] before:-z-[1] before:absolute before:-inset-[1px] before:-bottom-[0.5px] before:bg-[linear-gradient(var(--gradient-angle),#E52020,#1851E5)] before:animate-rotation before:rounded-[13px]" {...props}>
      {children}
    </Comp>
  )
}