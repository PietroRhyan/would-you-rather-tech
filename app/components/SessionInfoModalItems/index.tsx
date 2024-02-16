import { FaCheck } from 'react-icons/fa/index'
import { FaXmark } from 'react-icons/fa6/index'

interface SessionInfoModalItemsDifferencesProps {
  iconType: "correct" | "wrong"
  children: React.ReactNode
}

function SessionInfoModalItems({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-5" >
      {children}
    </div>
  )
}

function SessionInfoModalItemsConteiner({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 pt-4" >
      {children}
    </div>
  )
}

function SessionInfoModalItemsTitle({children}: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-medium text-text" >
      {children}
    </h4>
  )
}

function SessionInfoModalItemsContent({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2" >
      {children}
    </div>
  )
}

function CorrectIcon() {
  return (
    <div className="p-1 rounded-full flex items-center justify-center text-green border-2 border-green" >
      <FaCheck size={10} />
    </div>
  )
}

function WrongIcon() {
  return (
    <div className="p-1 rounded-full flex items-center justify-center text-red border-2 border-red" >
      <FaXmark size={10} />
    </div>
  )
}

function SessionInfoModalItemsDifferences({ iconType, children }: SessionInfoModalItemsDifferencesProps) {
  return (
    <div className="w-full flex items-start gap-2" >
      {iconType === "correct" ? (
        <CorrectIcon />
      ) : (
        <WrongIcon />
      )}

      <div className="w-full text-text text-sm" >
        {children}
      </div>
    </div>
  )
}

SessionInfoModalItems.Conteiner = SessionInfoModalItemsConteiner
SessionInfoModalItems.Title = SessionInfoModalItemsTitle
SessionInfoModalItems.Content = SessionInfoModalItemsContent
SessionInfoModalItems.Differences = SessionInfoModalItemsDifferences

export { SessionInfoModalItems }