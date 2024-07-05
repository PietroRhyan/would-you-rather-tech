import { MadeBy } from "../MadeBy";

import joao from '~/images/madeBy/joao.jpg'
import pietro from '~/images/madeBy/pietro.jpg'
import { InfoButton } from "../InfoButton";

export function Footer() {
  return (
    <footer className="w-full relative pb-2">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-1 text-xs text-gray text-center px-4 sm:px-8 md:px-12" >
        Todos os direitos reservados. Criado por:

        <div className="flex items-center justify-center gap-1" >
          <MadeBy name="João Gilberto" image={joao} twitter="https://twitter.com/gjoao11/" />
          &
          <MadeBy name="Pietro Rhyan" image={pietro} twitter="https://twitter.com/pietrorhyan2/" />
        </div>
      </div>

      <InfoButton />
    </footer>
  )
}