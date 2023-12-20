import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants'

const questions = tv({
  base: 'w-full py-3 px-4 md:px-6 flex items-center justify-between',
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
  function decreaseQuestionSize(text: string) {
    if (text.length < 70) {
      return text
    }

    const formattedText = text.slice(0, 67).concat('...')
    return formattedText
  }

  return (
    <div className={questions({ questionStyle })}>
      <div className="flex items-center justify-center" >
        <span className='hidden sm:block md:text-2xl text-white font-semibold w-[30px]' >{position}</span>
        <p className='text-xs md:text-sm text-white font-semibold max-w-[420px]'>{decreaseQuestionSize(question)}</p>
      </div>

      <span className='text-[10px] text-white font-semibold min-w-fit'>{votes} votos</span>
    </div>
  )
}