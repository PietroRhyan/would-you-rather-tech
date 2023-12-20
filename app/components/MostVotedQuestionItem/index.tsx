import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants'

const questions = tv({
  base: 'w-full py-3 px-6 flex items-center justify-between',
  variants: {
    questionStyle: {
      even: 'bg-black',
      odd: 'bg-black-sec'
    },
  },
  defaultVariants: {
    questionStyle: 'odd',
  },
})

interface MostVotedQuestionItemProps extends VariantProps<typeof questions> {
  position: number
  question: string
  votes: number
}

export function MostVotedQuestionItem({ position, question, votes, questionStyle }: MostVotedQuestionItemProps) {
  return (
    <div className={questions({ questionStyle })}>
      <div className="flex items-center justify-center" >
        <span className='text-2xl text-white font-semibold w-[30px]' >{position}</span>
        <p className='text-sm text-white font-semibold'>{question}</p>
      </div>

      <span className='text-[10px] text-white font-semibold' >{votes} votos</span>
    </div>
  )
}