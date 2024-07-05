import { FiX } from "react-icons/fi"
import { SessionInfoModalContext } from "~/context/handleOpenSessionInfoModal"
import { SessionInfoModalItems } from "../SessionInfoModalItems"

interface UserSessionProps {
  iconType: "correct" | "wrong"
  text: string
}

const registeredUser: UserSessionProps[] = [
  {
    iconType: "correct",
    text: "Salva o voto das questões."
  },
  {
    iconType: "correct",
    text: "Seu voto é contabilizado."
  },
  {
    iconType: "correct",
    text: "Apenas novas perguntas aparecerão pra você."
  },
  {
    iconType: "correct",
    text: "Se diverte."
  },
]

const guestUser: UserSessionProps[] = [
  {
    iconType: "correct",
    text: "Apenas se diverte."
  },
  {
    iconType: "wrong",
    text: "Salva o voto das questões."
  },
  {
    iconType: "wrong",
    text: "Seu voto é contabilizado."
  },
  {
    iconType: "wrong",
    text: "Apenas novas perguntas aparecerão pra você."
  },
  
]

export function SessionInfoModal() {
  const { switchVisibility } = SessionInfoModalContext()

  return (
    <>
      <div onClick={() => switchVisibility(false)} className="fixed z-40 w-screen h-screen bg-black/40 top-0 left-0 right-0" >
      </div>
      <div className="fixed z-50 w-[280px] sm:w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black-sec p-3 border border-dark-gray rounded-md shadow-xl" >
        <div className="flex items-center justify-between" >
          <h3 className="text-sm sm:text-base font-semibold">Informações de sessão</h3>
          <button onClick={() => switchVisibility(false)} className="p-1 rounded-md text-text" >
            <FiX size={20} />
          </button>
        </div>

        <SessionInfoModalItems>
          <SessionInfoModalItems.Conteiner>
            <SessionInfoModalItems.Title>
              Registrado
            </SessionInfoModalItems.Title>

            <SessionInfoModalItems.Content>
              {registeredUser.map((registerd) => (
                <SessionInfoModalItems.Differences iconType={registerd.iconType} key={registerd.text}>
                  {registerd.text}
                </SessionInfoModalItems.Differences>
              ))}
            </SessionInfoModalItems.Content>
          </SessionInfoModalItems.Conteiner>

          <SessionInfoModalItems.Conteiner>
            <SessionInfoModalItems.Title>
              Visitante
            </SessionInfoModalItems.Title>

            <SessionInfoModalItems.Content>
              {guestUser.map((guest) => (
                <SessionInfoModalItems.Differences iconType={guest.iconType} key={guest.text}>
                  {guest.text}
                </SessionInfoModalItems.Differences>
              ))}
            </SessionInfoModalItems.Content>
          </SessionInfoModalItems.Conteiner>
        </SessionInfoModalItems>
      </div>
    </>
  )
}