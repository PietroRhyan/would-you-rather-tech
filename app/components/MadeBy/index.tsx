import { Link } from "@remix-run/react";

interface MadeByProps {
  name: string
  twitter: string
  image: string
}

export function MadeBy({ name, image, twitter }: MadeByProps) {
  return (
    <Link to={twitter} target="_blank" className="p-1 hover:bg-light-bg transition-colors duration-200 rounded-md flex items-center justify-center gap-1" >
      <div className="rounded-full h-4 w-4 overflow-hidden object-center border border-light-bg flex items-center justify-center" >
        <img src={image} alt={`Profile of ${name}`} width='auto' className="rounded-full" />
      </div>

      <span className="text-xs text-white">{name}</span>
    </Link>
  )
}