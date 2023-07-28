import { styled } from 'styled-components'

export const TableCardContainer = styled.div`
  background: ${(props) => props.theme.secundary};
  border-radius: 6px;
  padding: 1.5rem;
`

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 200% */
    color: ${(props) => props.theme.primaryFont};
  }

  span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    color: ${(props) => props.theme['gray-300']};
  }
`

export const StatusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  cursor: pointer;
`

export const TittleId = styled.div`
  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1, 25rem; /* 166.667% */
    color: ${(props) => props.theme['gray-100']};
  }
`

export const TableTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: start;
  align-items: center;
  padding-top: 0.75rem;
`

export const TableTagsItem = styled.div`
  border: 1px solid ${(props) => props.theme['gray-100']};
  align-items: center;
  padding: 0.125rem 0.375rem;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  color: ${(props) => props.theme['gray-100']};
  border-radius: 2px;
`

export const TableResume = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  border: 1px solid ${(props) => props.theme['gray-100']};
  margin-top: 1rem;
  padding: 0.875rem 1rem;
  border-radius: 6px;
`
export const TableResumeItemNumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;

  strong {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TableResumeItemBuy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;

  strong {
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
    color: ${(props) => props.theme['gray-200']};
  }

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    color: ${(props) => props.theme.primaryFont};
  }
`

export const TableResumeItemMoney = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  strong {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    color: ${(props) => props.theme['green-500']};
  }

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    color: ${(props) => props.theme['green-100']};
  }
`

export const DailyBalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

export const DailyBalance = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 100% */
    color: ${(props) => props.theme['green-500']};
  }
`

export const DailyTrade = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 100% */
    color: ${(props) => props.theme['gray-500']};
  }
`
