import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 87.25rem;

  margin-top: 2.5rem;
`

export const SummaryContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme['gray-300']};
  padding-top: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`

export const SummaryContentGroup = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`

interface SummaryItemPriceProps {
  isNegative: boolean
}

export const SummaryItemPrice = styled.div<SummaryItemPriceProps>`
  span {
    font-size: 1.25rem !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 1.25rem !important;

    ${(props) =>
      props.isNegative
        ? css`
            color: ${props.theme.orange} !important;
          `
        : css`
            color: ${props.theme['green-500']} !important;
          `}
  }
`

export const SummaryItemTransactions = styled.div`
  span {
    font-size: 1.25rem !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 1.25rem !important;
    color: ${(props) => props.theme['gray-700']} !important;
  }
`

export const LineItem = styled.div`
  width: 25rem;
  border: 1px dashed ${(props) => props.theme['gray-300']};

  @media (max-width: 1160px) {
    width: 15rem;
  }
`

export const SummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;

  span {
    display: block;
  }
`

export const SummaryCard = styled.div`
  background: ${(props) => props.theme.secundary};
  border-radius: 6px;
  padding: 1rem 1.5rem 1.5rem;

  strong {
    color: ${(props) => props.theme.primaryFont};
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }
`
export const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;

  strong {
    white-space: nowrap;
    overflow: hidden;
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25rem;
    display: block;
    background: ${(props) => props.theme['green-500']};
    padding: 0.125rem 0.375rem 0.125rem;
    border-radius: 2px;
    width: fit-content;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 700;
    font-size: 0.75rem;
    font-style: normal;
    line-height: 1.25rem;
  }
`
