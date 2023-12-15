import { NavLink } from "@remix-run/react"

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
    name: "Respostas mais votadas",
    link: "/most-voted"
  },
  {
    name: "Crie suas respostas",
    link: "/create-answers"
  },
]

const linkStyleWhenIsActive = "py-[6px] px-3 rounded-md bg-light-bg text-sm font-medium text-white transition-all duration-200"
const linkStyleDefault = "py-[6px] px-3 text-sm font-medium text-text hover:text-white transition-colors duration-200"

export function CentralMenus() {
  return (
    <menu className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 md:flex items-center justify-center gap-2" >
      {menus.map(menu => (
        <NavLink 
          className={({ isActive }) => 
            isActive ? linkStyleWhenIsActive 
            : linkStyleDefault
          } 
          to={menu.link} key={menu.name}
        >
          {menu.name}
        </NavLink>
      ))}
    </menu>
  )
}