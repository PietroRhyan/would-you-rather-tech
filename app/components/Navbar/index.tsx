import { Link } from "@remix-run/react"
import logo from "~/images/wyrt-logo.svg"
import { CentralMenus } from "../CentralMenus"
import { SignInWithGithub } from "../SignInWithGithub"
import { MenuButton } from "../MenuButton"
import { SideMenu } from "~/context/handleOpenSideMenu"
import { MobileSideMenu } from "../MobileSideMenu"

export function Navbar() {
  const { isOpen } = SideMenu()

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 relative bg-gradient-to-b from-[#10101070] via-transparent to-transparent">
      <Link to='/' >
        <img src={logo} alt="Would You Rater Tech Logo" width={50} height={50} />
      </Link>

      <CentralMenus />

      <SignInWithGithub />

      {/* Only appears before 768px */}
      <div className="block md:hidden" >
        <MenuButton />
      </div>

      { isOpen ? <MobileSideMenu /> : null }
    </header>
  )
}