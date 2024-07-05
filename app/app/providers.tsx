import { HandleOpenSideMenuProvider } from './context/handleOpenSideMenu'
import { HandleSessionInfoModalProvider } from './context/handleOpenSessionInfoModal'

export function Providers({ children }: { children: React.ReactNode}) {
  return (
    <HandleSessionInfoModalProvider>
      <HandleOpenSideMenuProvider>
        {children}
      </HandleOpenSideMenuProvider>
    </HandleSessionInfoModalProvider>
  )
}