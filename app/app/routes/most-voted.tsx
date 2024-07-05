import { MostVotedQuestionRanking } from "~/components/MostVotedQuestionRanking";

export default function MostVoted() {
  return (
    <main className="py-8 mb-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12" >
      <MostVotedQuestionRanking />
    </main>
  )
}