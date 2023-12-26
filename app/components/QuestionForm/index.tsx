import { Form, useActionData } from "@remix-run/react";
import { SubmitFormButton } from "../SubmitFormButton";
import type { actions } from './action'

export function QuestionForm() {
  const actionData = useActionData<typeof actions>()

  return (
    <div className="max-w-[350px] w-full flex items-center justify-center p-[1px] rounded-xl bg-gradient-to-b from-gray to-black-sec/50" >
      <div className="w-full h-full bg-black rounded-[11px] p-[15px] space-y-5" >
        <h4 className="text-sm font-semibold text-dark-gray" >Grupo de escolhas 1</h4>

        <Form id="question-form" className="flex flex-col gap-4" action="post" >
          <div className="flex flex-col gap-1" >
            <label className="text-sm text-white font-semibold" htmlFor="choice-one">Escolha 1:</label>
            <input 
              className="bg-black-sec p-2 rounded-md border border-blue outline-none text-white font-medium text-xs placeholder:text-gray" 
              type="text" 
              name="choice-one" 
              id="choice-one" 
              required 
              placeholder="Digite a primeira escolha..." 
            />
            { actionData?.errors.choiceOne ? ( 
              <span className="text-[10px] text-red font-medium" >{actionData.errors.choiceOne}</span> 
            ) : null }
          </div>

          <div className="flex flex-col gap-1" >
            <label className="text-sm text-white font-semibold" htmlFor="choice-two">Escolha 2:</label>
            <input 
              className="bg-black-sec p-2 rounded-md border border-red outline-none text-white font-medium text-xs placeholder:text-gray" 
              type="text" 
              name="choice-two" 
              id="choice-two" 
              required 
              placeholder="Digite a segunda escolha..." 
            />
            { actionData?.errors.choiceTwo ? ( 
              <span className="text-[10px] text-red font-medium" >{actionData.errors.choiceTwo}</span> 
            ) : null }
          </div>
        </Form>

        <div className="flex justify-end pt-3"> 
          <SubmitFormButton title="Enviar" type="submit" form="question-form"/>
        </div>
      </div>
    </div>
  )
}