import { SideMenu } from "~/context/handleOpenSideMenu"

import { FiX } from 'react-icons/fi'
import { MobileSideMenuItems } from "../MobileSideMenuItems"

export function MobileSideMenu() {
  const { switchVisibility } = SideMenu()

  return (
    <>
      <div onClick={() => switchVisibility(false)} className="fixed z-40 w-screen h-screen bg-black/40 top-0 left-0" >
      </div>
      <aside className="fixed z-50 h-screen w-[280px] top-0 right-0 bg-bg p-4" >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-medium text-text">Menu</h3>
          <button onClick={() => switchVisibility(false)} className="p-1 rounded-md text-text" >
            <FiX size={20} />
          </button> 
        </div>

        <MobileSideMenuItems />
      </aside>
    </>
  )
}