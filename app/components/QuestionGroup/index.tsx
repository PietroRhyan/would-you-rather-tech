import { useState, type ComponentProps } from "react"
import { tv, type VariantProps } from 'tailwind-variants'

const question = tv({
  base: "w-full h-full rounded-lg flex items-center justify-center transition-all duration-200 hover:w-[465px] hover:h-[320px]",
  variants: {
    questionVariants: {
      left: "bg-blue shadow-[0_0_16px_4px_rgba(24,81,229,0.25)]",
      right: "bg-red shadow-[0_0_16px_4px_rgba(229,32,32,0.25)]"
    },
  },
  defaultVariants: {
    questionVariants: 'left',
  },
})

interface QuestionGroupProps {
  children: React.ReactNode
}

interface QuestionProps extends ComponentProps<'button'>, VariantProps<typeof question> {
  children: React.ReactNode
  totalQuestionVotes: number
  votes: number
  showInfoWhenVoted: boolean
  hasVoted: () => void
}

function QuestionGroup({ children }: QuestionGroupProps) {
  return (
    <section className="max-w-[960px] w-full h-[330px] grid grid-cols-2 gap-x-[10px] relative" >
      {children}
      <div className="h-[80px] w-[80px] bg-bg shadow-glassmorphism-like rounded-full z-20 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
        <span className="font-semibold">ou</span>
      </div>
    </section>
  )
}

function QuestionItem({ children, totalQuestionVotes, votes, hasVoted, showInfoWhenVoted, questionVariants, ...rest }: QuestionProps) {
  const [voted, setVoted] = useState(false)
  const votesPercentage = Math.round((votes / totalQuestionVotes) * 100) 

  function handleVoteQuestion() {
    if (showInfoWhenVoted) {
      return
    }
    
    setVoted(true)
    hasVoted()
  }

  return (
    <div className={`w-full h-full ${voted ? 'outline outline-2 outline-offset-2 outline-yellow-400' : ""} rounded-lg flex items-end ${questionVariants === 'left' ? "bg-dark-blue justify-end" : "bg-dark-red justify-start"}`} >
      <button
        {...rest} 
        onClick={() => handleVoteQuestion()} 
        className={question({questionVariants})}
      >
        {showInfoWhenVoted ? (
          <div className={`rounded-lg flex flex-col items-center justify-center gap-4`} >
            <span className={`${questionVariants === 'left' ? 'text-dark-blue' : 'text-dark-red'} drop-shadow-2xl text-5xl font-semibold`} >
              {votesPercentage} %
            </span>
            <span className="font-semibold text-lg">{children}</span>
          </div>
        ) : (
          <span className="font-semibold text-lg">{children}</span>
        )}
      </button>
    </div>
  )
}

QuestionGroup.Item = QuestionItem

export { QuestionGroup }
