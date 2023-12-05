import { useState } from 'react'

import { FaGithub } from 'react-icons/fa/index.js'
import { FiLogOut } from 'react-icons/fi/index.js'

export function SignInWithGithub() {
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <>
      { loggedIn ? (
        <div className="flex items-center justify-center gap-3 text-sm text-white">
          <span className='font-medium'>@nomefake</span>
          <div className="border-l border-gray pl-3">
            <div className="group p-[1px] cursor-pointer flex items-center rounded-[4px] justify-center bg-transparent hover:bg-gradient-to-b from-[#FF8585] to-red transition-colors duration-200" >
              <button onClick={() => setLoggedIn(false)} className="p-1 rounded-[4px] group-hover:bg-red transition-colors duration-200" >
                <FiLogOut size={18} className="group-hover:text-white text-red transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-[1px] rounded-xl bg-gradient-to-r from-red to-blue">
          <button onClick={() => setLoggedIn(true)} className="flex items-center justify-center p-3 text-sm text-white bg-black-sec rounded-xl gap-[10px]" >
            <FaGithub size={18} />
            <span className="font-medium">Login com GitHub</span>
          </button>
      </div>
      )}
    </>
    
  )
}