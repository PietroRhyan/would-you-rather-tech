import type { ComponentProps } from 'react'
import { FaQuestion } from 'react-icons/fa/index'
import { SessionInfoModalContext } from '~/context/handleOpenSessionInfoModal'
import { SessionInfoModal } from '../SessionInfoModal'

export function InfoButton({ ...rest }: ComponentProps<'button'>) {
  const { isOpen, switchVisibility } = SessionInfoModalContext()

  return (
    <>
      <button onClick={() => switchVisibility(!isOpen)} {...rest} className="p-2 rounded-full flex items-center justify-center border-2 border-gray text-gray absolute right-1 bottom-1" >
        <FaQuestion size={12} />
      </button>

      { isOpen ? <SessionInfoModal /> : null}
    </>
  )
}