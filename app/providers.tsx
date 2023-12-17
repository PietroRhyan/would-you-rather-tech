import { HandleOpenSideMenuProvider } from './context/handleOpenSideMenu'

export function Providers({ children }: { children: React.ReactNode}) {
  return (
    <HandleOpenSideMenuProvider>
      {children}
    </HandleOpenSideMenuProvider>
  )
}