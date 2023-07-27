import { MovimentationsRobot, PaperRobot } from '../../@types/types'

import { DateTime } from 'luxon'

import {
  DailyBalance,
  DailyBalanceContainer,
  DailyTrade,
  TableCardContainer,
  TableResume,
  TableTags,
  TableTagsItem,
  TableTitle,
  TittleId,
  TableResumeItemNumber,
  TableResumeItemBuy,
  TableResumeItemMoney,
  StatusButton,
} from './styles'
import { priceFormatter } from '../../utils/formatter'
import { CaretDown } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { pauseRobot, startRobot } from '../../store/fetchActions'

import circleGreen from '../../assets/circleGreen.svg'
import circleRed from '../../assets/circleRed.svg'

export interface TableCardProps {
  id: number
  title: string
  running: number
  updated_at: string
  mode: number
  simulation: number
  stock_codes: string
  strategy: string
  initial_capital: number | string
  number_trades: number
  daily_balance: number
  created_at: string
  last_paper: PaperRobot
  movimentations: MovimentationsRobot[]
}

export function TableCard(props: TableCardProps) {
  const dispatch = useDispatch()

  function handleActionRobotButton(stop: boolean) {
    if (stop) {
      dispatch(pauseRobot(props) as any)
    } else {
      dispatch(startRobot(props) as any)
    }
  }

  function calculateTradeinDay(movimentations: MovimentationsRobot[]): number {
    return movimentations?.reduce((acumulador, valorAtual) => {
      const date = valorAtual.date.split(' ')

      const now = DateTime.now()

      const today = DateTime.fromFormat(
        `${now.year}-${`0${now.month}`.substr(-2)}-${`0${now.day}`.substr(-2)}`,
        'yyyy-LL-dd',
      )

      const isToday =
        DateTime.fromFormat(date[0], 'yyyy-LL-dd').valueOf() === today.valueOf()

      if (!isToday) {
        return acumulador
      }

      return acumulador + 1
    }, 0)
  }

  return (
    <TableCardContainer>
      <TableTitle>
        <strong>{props.title}</strong>
        {props.running === 0 && (
          <StatusButton onClick={() => handleActionRobotButton(false)}>
            <img alt="pause status" src={circleRed}></img>
            <span>Parado</span>
          </StatusButton>
        )}

        {props.running === 1 && (
          <StatusButton onClick={() => handleActionRobotButton(true)}>
            <img alt="pause status" src={circleGreen}></img>
            <span>Em execução</span>
          </StatusButton>
        )}
      </TableTitle>
      <TittleId>
        <span>#{props.id}</span>
      </TittleId>

      <TableTags>
        <TableTagsItem>
          <span>Otimista</span>
        </TableTagsItem>
        <TableTagsItem>
          <span>{props.stock_codes}</span>
        </TableTagsItem>
        <TableTagsItem>
          <span>{props.strategy}</span>
        </TableTagsItem>
      </TableTags>

      <TableResume>
        <TableResumeItemNumber>
          <strong>{props.last_paper?.position ?? 'n/a'}</strong>
        </TableResumeItemNumber>
        <TableResumeItemBuy>
          <strong>{props.last_paper?.paper ?? 'n/a'}</strong>
          <span>compra</span>
        </TableResumeItemBuy>
        <TableResumeItemMoney>
          <span>
            {priceFormatter.format(props.last_paper?.paper_value ?? 0.0)}
          </span>
          <strong>
            {priceFormatter.format(props.last_paper?.profit ?? 0.0)}
          </strong>
        </TableResumeItemMoney>
      </TableResume>

      <DailyBalanceContainer>
        <DailyBalance>
          <span>
            Saldo diário
            <CaretDown size={11} />
          </span>
          <strong>{priceFormatter.format(props.daily_balance)}</strong>
        </DailyBalance>
        <DailyTrade>
          <span>Trades no dia</span>
          <strong>{calculateTradeinDay(props.movimentations) ?? 0}</strong>
        </DailyTrade>
      </DailyBalanceContainer>
    </TableCardContainer>
  )
}
