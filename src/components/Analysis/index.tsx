import { CellSignalMedium } from 'phosphor-react'
import { AnalysisContainer, AnalysisContent } from './styles'

export function Analysis() {
  return (
    <AnalysisContainer>
      <AnalysisContent>
        <CellSignalMedium size={30} color="#00B39D" />
        <strong>Análise geral /</strong>
        <span>Principal</span>
      </AnalysisContent>
    </AnalysisContainer>
  )
}
