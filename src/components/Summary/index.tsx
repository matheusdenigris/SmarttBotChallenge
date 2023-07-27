import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPapers } from '../../store/fetchActions'
import { Robot, MovimentationsRobot } from '../../@types/types'
import { priceFormatter } from '../../utils/formatter'

import {
  LineItem,
  PaperContainer,
  SummaryCard,
  SummaryContainer,
  SummaryContent,
  SummaryContentGroup,
  SummaryHeader,
  SummaryItemPrice,
  SummaryItemTransactions,
} from './styles'

export function Summary() {
  const dispatch = useDispatch()

  const robots = useSelector((state: any) => state.robots)

  useEffect(() => {
    dispatch(getAllPapers() as any)
  }, [dispatch])

  function calculateTotalTransactions() {
    return robots.data.reduce((accumulator: number, robot: Robot) => {
      return accumulator + robot.movimentations.length
    }, 0)
  }

  function calculateTotalMovimentations() {
    const arrayValores = robots.data.map((robot: Robot) => {
      return robot.movimentations.reduce(
        (accumulator: number, movimentation: MovimentationsRobot) => {
          return accumulator + movimentation.value
        },
        0,
      )
    })

    return arrayValores.reduce((accumulator: number, price: number) => {
      return accumulator + price
    }, 0)
  }

  const totalPrice = calculateTotalMovimentations()

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          <div>
            <strong>Resumo geral Operações</strong>
            <span>Resumo de movimentação</span>
            {totalPrice > 0 && (
              <SummaryItemPrice isNegative={false}>
                <span>+ {priceFormatter.format(totalPrice)}</span>
              </SummaryItemPrice>
            )}

            {totalPrice < 0 && (
              <SummaryItemPrice isNegative>
                <span>-{priceFormatter.format(totalPrice)}</span>
              </SummaryItemPrice>
            )}
          </div>

          <div>
            <span>Total de transações realizadas</span>
            <SummaryItemTransactions>
              <span>{calculateTotalTransactions()}</span>
            </SummaryItemTransactions>
          </div>
        </SummaryHeader>

        <SummaryContent>
          <SummaryContentGroup>
            <span>Papéis negociados</span>

            <PaperContainer>
              <strong>WING 20</strong>
              <LineItem />
              <p>157</p>
              <span>transações</span>
            </PaperContainer>

            <PaperContainer>
              <strong>ABEV 3</strong>
              <LineItem />
              <p>215</p>
              <span>transações</span>
            </PaperContainer>

            <PaperContainer>
              <strong>BOVA 11</strong>
              <LineItem />
              <p>71</p>
              <span>transações</span>
            </PaperContainer>
          </SummaryContentGroup>

          <SummaryContentGroup>
            <span>Papéis negociados</span>
            <PaperContainer>
              <strong>WING 20</strong>
              <LineItem />
              <p>157</p>
              <span>transações</span>
            </PaperContainer>

            <PaperContainer>
              <strong>ABEV 3</strong>
              <LineItem />
              <p>215</p>
              <span>transações</span>
            </PaperContainer>

            <PaperContainer>
              <strong>BOVA 11</strong>
              <LineItem />
              <p>71</p>
              <span>transações</span>
            </PaperContainer>
          </SummaryContentGroup>
        </SummaryContent>
      </SummaryCard>
    </SummaryContainer>
  )
}
