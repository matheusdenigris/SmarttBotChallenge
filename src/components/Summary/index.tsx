import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPapers } from '../../store/fetchActions'
import { PaperContainer, SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPapers() as any)
  }, [dispatch])

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <div>
            <strong>Resumo geral Operações</strong>
            <span>Resumo de movimentação</span>
          </div>

          <div>
            <span>Total de transações realizadas</span>
          </div>
        </header>

        <footer>
          <div>
            <span>Papéis negociados</span>

            <PaperContainer>
              <strong>WING 20</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                transações
              </span>
            </PaperContainer>

            <PaperContainer>
              <strong>ABEV 3</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - transações
              </span>
            </PaperContainer>

            <PaperContainer>
              <strong>BOVA 11</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                transações
              </span>
            </PaperContainer>
          </div>

          <div>
            <span>Papéis negociados</span>
            <PaperContainer>
              <strong>WING 20</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                transações
              </span>
            </PaperContainer>

            <PaperContainer>
              <strong>ABEV 3</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - transações
              </span>
            </PaperContainer>

            <PaperContainer>
              <strong>BOVA 11</strong>
              <span>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                transações
              </span>
            </PaperContainer>
          </div>
        </footer>
      </SummaryCard>
    </SummaryContainer>
  )
}
