import { QuestionForm } from "~/components/QuestionForm";

export default function CreateQuestions() {
  return (
    <main className="py-8 mb-auto flex flex-col items-center justify-center px-4 sm:px-8 md:px-12" >
      <h2 className="text-xl text-white font-semibold mb-6">Crie suas opções para que outras pessoas possam responder!</h2>

      <QuestionForm />
    </main>
  )
}