import { SubmitFormButton } from "../SubmitFormButton";

import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from "react-hook-form";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from 'react-icons/fi';

import { z } from 'zod';

const questionSchema = z.object({
  choiceOne: z.string()
    .min(8, 'A questão deve conter mais de 8 caracteres')
    .max(125, 'A questão deve conter menos de 125 caracteres'),
  choiceTwo: z.string()
    .min(8, 'A questão deve conter mais de 8 caracteres')
    .max(125, 'A questão deve conter menos de 125 caracteres'),
})

const createQuestionFormSchema = z.object({
  questions: z.array(questionSchema),
})

type CreateQuestionFormData = z.infer<typeof createQuestionFormSchema>

export function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateQuestionFormData>({
    resolver: zodResolver(createQuestionFormSchema),
    defaultValues: {
      questions: [
        {
          choiceOne: '',
          choiceTwo: '',
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'questions' })

  const onSubmit: SubmitHandler<CreateQuestionFormData> = (data) => console.log(data)

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="max-w-[350px] w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
          {fields.map((field, index) => (
            <div key={field.id} className="bg-black rounded-xl p-4 space-y-5">
              <div className="flex items-center gap-2 justify-between">
                <h4 className="text-sm font-semibold text-gray">Grupo de escolhas {index + 1}</h4>

                {fields.length > 1 && (
                  <div className="flex p-[1px] items-center justify-center rounded-[4px] bg-gradient-to-b from-light-bg to-bg cursor-pointer">
                    <button type="button" title="Remover grupo" onClick={() => { remove(index) }} className="flex items-center justify-center gap-1 rounded-[3px] bg-bg text-red text-sm font-semibold p-2">
                      <FiTrash />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-white font-semibold">Escolha 1:</span>
                  <input
                    className="bg-blue/20 p-3 rounded-md text-white font-medium text-xs placeholder:text-gray"
                    type="text"
                    id="choice-one"
                    {...register(`questions.${index}.choiceOne`)}
                    placeholder="Digite a primeira escolha..."
                  />
                  {errors.questions?.[index]?.choiceOne ? (
                    <span className="text-red text-[10px] font-medium" >{errors.questions[index]?.choiceOne?.message}</span>
                  ) : null}
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-white font-semibold">Escolha 2:</span>
                  <input
                    className="bg-red/20 p-3 rounded-md text-white font-medium text-xs placeholder:text-gray"
                    type="text"
                    id="choice-one"
                    {...register(`questions.${index}.choiceTwo`)}
                    placeholder="Digite a segunda escolha..."
                  />
                  {errors.questions?.[index]?.choiceTwo ? (
                    <span className="text-red text-[10px] font-medium" >{errors.questions[index]?.choiceTwo?.message}</span>
                  ) : null}
                </label>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => { append({ choiceOne: '', choiceTwo: '', }) }}
            className="border border-dashed rounded-xl border-gray text-gray text-xs py-1"
          >
            adicionar outra
          </button>

          <div className="flex justify-end gap-4">
            <button type="button" className="text-sm font-normal" onClick={() => reset()}>Cancelar</button>
            <SubmitFormButton title="Enviar" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}