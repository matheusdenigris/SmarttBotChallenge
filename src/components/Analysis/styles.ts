import { styled } from 'styled-components'

export const AnalysisContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 87.25rem;
  max-height: 4rem;

  margin-top: 1.5rem;
`

export const AnalysisContent = styled.div`
  background: ${(props) => props.theme.secundary};
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-end;

  strong {
    color: ${(props) => props.theme.primaryFont};
    padding-left: 0.75rem;
    border-left: 1px solid ${(props) => props.theme['gray-75']};
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
  }

  span {
    color: ${(props) => props.theme['green-500']};
    padding-left: 3px;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
  }

  svg {
    margin-right: 0.75rem;
  }
`
