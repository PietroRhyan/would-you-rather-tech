import { MadeBy } from "../MadeBy";

import joao from '~/images/madeBy/joao.jpg'
import pietro from '~/images/madeBy/pietro.jpg'

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 text-xs text-gray text-center mb-2" >
      Todos os direitos reservados. Criado por:
      <MadeBy name="João Gilberto" image={joao} twitter="https://twitter.com/gjoao11/" />
      <MadeBy name="Pietro Rhyan" image={pietro} twitter="https://twitter.com/pietrorhyan2/" />
    </footer>
  )
}