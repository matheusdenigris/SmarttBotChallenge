import styled from 'styled-components'

export const TableContainer = styled.section`
  max-height: 230px;
  margin: 1.5rem 2.5rem;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0;

    margin-top: 10rem;
  }
`

export const Spacer = styled.div`
  height: 1rem;
  display: flex;
`
