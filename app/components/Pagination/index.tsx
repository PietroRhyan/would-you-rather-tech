import { FaAngleLeft, FaAngleRight } from 'react-icons/fa/index'

interface PaginationProps {
  recordsPerPage: number
  totalRecords: number
  currentPage: number
  goToPreviousPage: () => void,
  goToNextPage: () => void,
  goToSelectedPage: (page: number) => void
}

export function Pagination({ currentPage, recordsPerPage, totalRecords, goToPreviousPage, goToNextPage, goToSelectedPage }: PaginationProps) {
  const numberOfPages = Math.ceil(totalRecords / recordsPerPage)
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1)

  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => goToPreviousPage()} disabled={ currentPage === 1 ? true : false } className={`${currentPage === 1 ? 'text-gray' : 'text-white'}`} >
        <FaAngleLeft size={18} />
      </button>
      
      <div className='flex items-center justify-center gap-2' >
        {numbers.map((number, index) => (
          <button 
            key={index} 
            className={`text-sm w-[22px] h-[22px] rounded-md bg-black-sec hover:brightness-125 outline-none transition-all duration-200 ${currentPage === number ? 'outline outline-2 outline-offset-2 outline-blue' : ''}`}
            onClick={() => goToSelectedPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
      
      <button onClick={() => goToNextPage()} disabled={ currentPage === numberOfPages ? true : false } className={`${currentPage === numberOfPages ? 'text-gray' : 'text-white'}`} >
        <FaAngleRight size={18} />
      </button>
    </div>
  )
}