import { FaAngleDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

export function FilterButton() {
  return (
    <button className='bg-black-sec rounded-[4px] p-2 text-xs md:text-sm font-medium text-gray '>
      <div className="hidden sm:flex items-center justify-center gap-[2px]" >
        All time
        <FaAngleDown size={14} />
      </div>

      {/* Only appears before 480px screen width size */}
      <div className="flex sm:hidden items-center justify-center" >
        <FiFilter size={14} />
      </div>
    </button>
  )
}