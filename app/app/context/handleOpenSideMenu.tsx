/* eslint-disable @typescript-eslint/no-empty-function */
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react'

type ChangeMenuVisibilityType = {
  isOpen: boolean
  switchVisibility: (isOpen: boolean) => void
}

type Props = {
  children: ReactNode
}

const ChangeMenuVisibilityDefaultValues: ChangeMenuVisibilityType = {
  isOpen: false,
  switchVisibility: () => {},
}

export const HandleSideMenu = createContext<ChangeMenuVisibilityType>(
  ChangeMenuVisibilityDefaultValues,
)

export function SideMenu() {
  return useContext(HandleSideMenu)
}

export function HandleOpenSideMenuProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function switchVisibility(isOpen: boolean) {
    setIsOpen(isOpen)
  }

  return (
    <HandleSideMenu.Provider value={{ isOpen, switchVisibility }}>
      {children}
    </HandleSideMenu.Provider>
  )
}
