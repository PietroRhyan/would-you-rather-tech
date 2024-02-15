import { useState } from "react";
import { QuestionGroup } from "~/components/QuestionGroup";

export default function Play() {
  const [questionGroupVoted, setQuestionGroupVoted] = useState(false)
  
  function handleQuestionGroupVoted() {
    setQuestionGroupVoted(true)
  }

  return (
    <main className="py-8 mb-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12" >
      <h2 className="text-xl text-white font-semibold mb-7">você escolheria</h2>

      <QuestionGroup>
        <QuestionGroup.Item 
          questionVariants="left" 
          totalQuestionVotes={639} 
          votes={394} 
          showInfoWhenVoted={questionGroupVoted} 
          hasVoted={handleQuestionGroupVoted}
        >
          Trabalhar 8 horas remoto todo dia
        </QuestionGroup.Item>

        <QuestionGroup.Item 
          questionVariants="right" 
          totalQuestionVotes={639} 
          votes={245} 
          showInfoWhenVoted={questionGroupVoted} 
          hasVoted={handleQuestionGroupVoted} 
        >
          Trabalhar 8 horas presencial por 3 dias
        </QuestionGroup.Item>
      </QuestionGroup>

      
    </main>
  )
}