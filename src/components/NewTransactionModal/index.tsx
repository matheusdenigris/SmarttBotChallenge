import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CloseButton,
  Content,
  Overlay,
  StrategyType,
  StrategyTypeButton,
  ActionButton,
  ActtionButtonRow,
  CustomTitle,
  LabelInput,
  ErrorMessage,
  InputContainer,
} from './styles'
import { X } from 'phosphor-react'
import { customToast } from '../../shared/customToast'
import { useDispatch } from 'react-redux'
import { createRobot } from '../../store/fetchActions'
import { RobotsContext } from '../../contexts/RobotsContext'
import { useContext } from 'react'

const newRobotFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Nome muito curto'),
  price: zod.string().min(1, 'Insira um preço'),
  strategy: zod.enum(['Tangram', 'Price Action']),
})

type NewRobotFormData = zod.infer<typeof newRobotFormValidationSchema>

export function NewTransactionModal() {
  const { setOpenModal } = useContext(RobotsContext)

  const dispatch = useDispatch()

  const newRobotForm = useForm<NewRobotFormData>({
    resolver: zodResolver(newRobotFormValidationSchema),
    defaultValues: {
      name: '',
      price: '',
      strategy: 'Tangram',
    },
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = newRobotForm

  function handleCreateNewRobot(data: NewRobotFormData) {
    if (!isValid) {
      return customToast.error('Faltando campos obrigatórios')
    }

    dispatch(
      createRobot({
        name: data.name,
        price: parseFloat(data.price),
        strategy: data.strategy,
      }) as any,
    )

    setOpenModal(false)

    customToast.sucess('Robô criado com sucesso!')
  }

  function onModalClose() {
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content onCloseAutoFocus={onModalClose}>
        <strong>Adicionar novo Robô</strong>
        <CustomTitle>Vamos criar seu robô</CustomTitle>
        <span>preencha as informações abaixo</span>

        <CloseButton>
          <X size={11} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewRobot)}>
          <InputContainer>
            <LabelInput>Nome do produto</LabelInput>
            <input
              type="text"
              placeholder="Nome do prduto"
              required
              {...newRobotForm.register('name')}
            />
            <ErrorMessage>
              {errors.name?.message && <span>{errors.name?.message}</span>}
            </ErrorMessage>

            <LabelInput>Capital Inicial do Robô</LabelInput>
            <input
              type="number"
              placeholder="R$"
              required
              {...newRobotForm.register('price')}
            />
            <ErrorMessage>
              {errors.price?.message && <span>{errors.price?.message}</span>}
            </ErrorMessage>
          </InputContainer>
          <strong>Selecione uma das estratégas abaixo</strong>

          <Controller
            control={control}
            name="strategy"
            render={({ field }) => {
              return (
                <StrategyType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <StrategyTypeButton variant="Tangram" value="Tangram">
                    Tangram
                  </StrategyTypeButton>
                  <StrategyTypeButton
                    variant="Price Action"
                    value="Price Action"
                  >
                    Price Action
                  </StrategyTypeButton>
                </StrategyType>
              )
            }}
          />

          <ActtionButtonRow>
            <Dialog.Close asChild>
              <ActionButton typebutton="Cancel">Cancelar</ActionButton>
            </Dialog.Close>
            <ActionButton typebutton="Submit" type="submit">
              Criar robô
            </ActionButton>
          </ActtionButtonRow>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
