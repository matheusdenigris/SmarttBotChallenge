import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 87.25rem;
  max-height: 15.75rem;

  margin-top: 2.5rem;
`

export const SummaryCard = styled.div`
  background: ${(props) => props.theme.secundary};
  border-radius: 6px;
  padding: 1rem 1.5rem 1.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  header span {
    display: block;
  }

  strong {
    color: ${(props) => props.theme.primaryFont};
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme['gray-300']};
    padding-top: 1rem;
  }

  footer strong {
    background: ${(props) => props.theme['green-500']};
    border-radius: 2px;
    width: fit-content;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 166.667% */
    padding: 0.125rem 0.375rem 0.125rem;
  }

  footer div {
    padding-top: 0.75rem;
  }
`
export const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  strong {
    color: ${(props) => props.theme.white};
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
    display: block;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    border-left: 1px;
  }
`
