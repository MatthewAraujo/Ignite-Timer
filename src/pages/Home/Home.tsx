import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

import {
  HomeContainer,
  StartCountDownbutton,
  StopCountDownButton,
} from './styles'
import { NewCycleForm } from './Components/NewCycleForm/CycleForm'
import { CountDown } from './Components/CountDown/CountDown'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValdiationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa').max(100),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValdiationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValdiationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  const task = watch('task')
  const isSubmitDisabled = task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownbutton disabled={!isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountDownbutton>
        )}
      </form>
    </HomeContainer>
  )
}
