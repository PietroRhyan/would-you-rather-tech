import { NavLink } from "@remix-run/react"
import { SideMenu } from "~/context/handleOpenSideMenu"

type Menu = {
  name: string
  link: string
}

const menus: Menu[] = [
  {
    name: "Jogar",
    link: "/play"
  },
  {
    name: "Questões mais votadas",
    link: "/most-voted"
  },
  {
    name: "Crie suas questões",
    link: "/create-questions"
  },
]

const linkStyleWhenIsActive = "border-l-2 text-white border-red p-1"
const linkStyleDefault = "text-text p-1"

export function MobileSideMenuItems() {
  const { switchVisibility } = SideMenu()

  return (
    <menu className="flex flex-col justify-center gap-2 text-center font-medium" >
      {menus.map(menu => (
        <NavLink 
          className={({ isActive }) => 
            isActive ? linkStyleWhenIsActive 
            : linkStyleDefault
          } 
          onClick={() => switchVisibility(false)}
          to={menu.link} 
          key={menu.name}
        >
          {menu.name}
        </NavLink>
      ))}
    </menu>
  )
}