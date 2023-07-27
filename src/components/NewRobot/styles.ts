import { styled } from 'styled-components'

export const NewRobotContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 87.25rem;
  max-height: 7.375rem;

  margin-top: 1.75rem;
`

export const NewRobotContent = styled.div`
  background: ${(props) => props.theme.secundary};
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  strong {
    color: ${(props) => props.theme.primaryFont};
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 200% */
  }

  span {
    color: ${(props) => props.theme['green-500']};
    padding-left: 0.25rem;
    padding-right: 0.25rem;

    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
  }

  div {
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
  }
`

export const AddRobotButton = styled.button`
  cursor: pointer;
  overflow: hidden;

  width: 4.6875rem;
  height: 4.375rem;
  flex-shrink: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: flex;

  border: 1px solid ${(props) => props.theme['gray-50']};
  border-radius: 4px;

  img {
    width: 4.6875rem;
    height: 4.375rem;
  }
`
