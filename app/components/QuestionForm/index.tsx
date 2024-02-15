import { Form } from "@remix-run/react";
import { SubmitFormButton } from "../SubmitFormButton";

import type { SubmitHandler} from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const createFormSchema = z.object({
  choiceOne: z.string()
    .min(8, 'A questão deve conter mais de 8 caracteres')
    .max(125, 'A questão deve conter menos de 125 caracteres'),
  choiceTwo: z.string()
    .min(8, 'A questão deve conter mais de 8 caracteres')
    .max(125, 'A questão deve conter menos de 125 caracteres'),
})

type createFormData = z.infer<typeof createFormSchema>

export function QuestionForm() {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<createFormData>({ resolver: zodResolver(createFormSchema) })
  const onSubmit: SubmitHandler<createFormData> = (data) => console.log(data)

  return (
    <div className="max-w-[350px] w-full flex items-center justify-center p-[1px] rounded-xl bg-gradient-to-b from-gray to-black-sec/50" >
      <div className="w-full h-full bg-black rounded-[11px] p-[15px] space-y-5" >
        <h4 className="text-sm font-semibold text-dark-gray" >Grupo de escolhas 1</h4>

        <Form id="question-form" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col gap-1" >
            <label className="text-sm text-white font-semibold" htmlFor="choice-one">Escolha 1:</label>
            <input 
              className="bg-black-sec p-2 rounded-md border border-blue outline-none text-white font-medium text-xs placeholder:text-gray" 
              type="text" 
              id="choice-one" 
              {...register('choiceOne')}
              placeholder="Digite a primeira escolha..." 
            />
            {errors.choiceOne ? (
              <span className="text-red text-[10px] font-medium" >{errors.choiceOne.message}</span>
            ) : null}
          </div>

          <div className="flex flex-col gap-1" >
            <label className="text-sm text-white font-semibold" htmlFor="choice-two">Escolha 2:</label>
            <input 
              className="bg-black-sec p-2 rounded-md border border-red outline-none text-white font-medium text-xs placeholder:text-gray" 
              type="text" 
              id="choice-two" 
              {...register('choiceTwo')}
              placeholder="Digite a segunda escolha..." 
            />
            {errors.choiceTwo ? (
              <span className="text-red text-[10px] font-medium" >{errors.choiceTwo.message}</span>
            ) : null}
          </div>
        </Form>

        <div className="flex justify-end pt-3 gap-2">
          <button className="text-sm font-normal" onClick={() => reset()}>Cancelar</button> 
          <SubmitFormButton title="Enviar" type="submit" form="question-form"/>
        </div>
      </div>
    </div>
  )
}