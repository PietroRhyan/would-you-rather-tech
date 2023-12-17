import type { ButtonHTMLAttributes } from "react";

import { FiMenu } from 'react-icons/fi'
import { SideMenu } from "~/context/handleOpenSideMenu";

interface MenuButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function MenuButton({ ...props }: MenuButton) {
  const { switchVisibility, isOpen } = SideMenu()

  return (
    <button {...props} onClick={() => switchVisibility(!isOpen)} className="text-text">
      <FiMenu size={20} />
    </button>
  )
}