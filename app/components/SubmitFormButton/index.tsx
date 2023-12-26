import type { ButtonHTMLAttributes } from "react"

interface SubmitFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function SubmitFormButton({ title, ...props }: SubmitFormButtonProps) {
  return (
    <div className="flex p-[1px] items-center justify-center rounded-[4px] bg-gradient-to-b from-light-green to-green cursor-pointer" >
      <button {...props} className="flex items-center justify-center gap-1 rounded-[3px] bg-green text-dark-green text-sm font-semibold py-[6px] px-4" >
        {title}
      </button>
    </div>
  )
}