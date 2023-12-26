import { json, type ActionFunctionArgs } from "@remix-run/node";

interface QuestionError {
  choiceOne?: string
  choiceTwo?: string
}

export async function actions({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const choiceOne = String(formData.get('choice-one'))
  const choiceTwo = String(formData.get('choice-two'))

  const errors: QuestionError = {}

  // Choice one error handler
  if (choiceOne.length < 8) {
    errors.choiceOne = 'O mínimo de caracteres é: 8'
  }

  if (choiceOne.length > 125) {
    errors.choiceOne = 'O máximo de caracteres é: 125'
  }

  // Choice two error handler
  if (choiceTwo.length < 8) {
    errors.choiceTwo = 'O mínimo de caracteres é: 8'
  }

  if (choiceTwo.length > 125) {
    errors.choiceTwo = 'O máximo de caracteres é: 125'
  }

  if (Object.keys(errors).length > 0) {
    return json({errors})
  }

  console.log('Dados do formulário: ', formData)
  console.log('Escolha 1: ', choiceOne)
  console.log('Escolha 2: ', choiceTwo)

  console.log('\nPossíveis erros: ', errors)
}