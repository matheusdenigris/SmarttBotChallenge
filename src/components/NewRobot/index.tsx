import { NewRobotContainer, NewRobotContent, AddRobotButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import robotImg from '../../assets/Robot.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import { RobotsContext } from '../../contexts/RobotsContext'
import { useContext } from 'react'

interface NewRobotProps {
  qtdBots: number
}

export function NewRobot(props: NewRobotProps) {
  const { openModal, setOpenModal } = useContext(RobotsContext)

  return (
    <NewRobotContainer>
      <NewRobotContent>
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <AddRobotButton>
              <img src={robotImg} alt="add new Robot Button" />
            </AddRobotButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

        <div>
          <strong>Adicionar novo Robô</strong>
          <p>
            Você possui<span>{props.qtdBots} Robôs</span>disponíveis
          </p>
        </div>
      </NewRobotContent>
    </NewRobotContainer>
  )
}
