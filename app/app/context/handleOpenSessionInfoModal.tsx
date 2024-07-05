/* eslint-disable @typescript-eslint/no-empty-function */
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react'

type ChangeSessionInfoModalVisibility = {
  isOpen: boolean
  switchVisibility: (isOpen: boolean) => void
}

type Props = {
  children: ReactNode
}

const ChangeSessionInfoModalDefaultValues: ChangeSessionInfoModalVisibility = {
  isOpen: false,
  switchVisibility: () => {},
}

export const HandleSessionInfoModal = createContext<ChangeSessionInfoModalVisibility>(
  ChangeSessionInfoModalDefaultValues,
)

export function SessionInfoModalContext() {
  return useContext(HandleSessionInfoModal)
}

export function HandleSessionInfoModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function switchVisibility(isOpen: boolean) {
    setIsOpen(isOpen)
  }

  return (
    <HandleSessionInfoModal.Provider value={{ isOpen, switchVisibility }}>
      {children}
    </HandleSessionInfoModal.Provider>
  )
}
