import { MostVotedQuestionItem } from '../MostVotedQuestionItem'
import { Pagination } from '../Pagination'
import { useState } from 'react'
import { FilterButton } from '../FilterButton/indesx'

interface QuestionTypes {
  position: number
  question: string
  votes: number
}

const questions: QuestionTypes[] = [
  {
    position: 1,
    question: 'Lorem ipsum dolor sit khjabdl jsbfsijdfb jsdlakd hasjbdahj',
    votes: 1998,
  },
  {
    position: 2,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 3,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 4,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 5,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 6,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 7,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 8,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 9,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
  {
    position: 10,
    question: 'Lorem ipsum dolor sit',
    votes: 1998,
  },
]

export function MostVotedQuestionRanking() {
  const [ currentPage, setCurrentPage ] = useState(1)

  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = questions.slice(firstIndex, lastIndex)

  const totalRecords = questions.length

  function goToPreviousPage() {
    setCurrentPage((current) => current - 1)
  }

  function goToNextPage() {
    setCurrentPage((current) => current + 1)
  }

  function goToSelectedPage(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="max-w-[600px] w-full rounded-xl bg-black" >
      <div className='w-full p-4 md:p-6 flex items-center justify-between' >
        <h2 className='sm:text-xl text-white font-semibold'>Perguntas mais votadas</h2>
        <FilterButton />
      </div>

      <div className='flex flex-col justify-center'>
        { records.map(({ position, question, votes }) => (
          <MostVotedQuestionItem 
            key={position}
            position={position} 
            question={question}
            votes={votes}
            questionStyle={ position % 2 === 0 ? 'even' : 'odd'}
          />
        )) }
      </div>

      <div className='flex items-center justify-end py-3 px-4 md:px-6' >
        <Pagination 
          currentPage={currentPage} 
          recordsPerPage={recordsPerPage} 
          totalRecords={totalRecords} 
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          goToSelectedPage={goToSelectedPage}
        />
      </div>
    </div>
  )
}