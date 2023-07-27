import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.secundary};
  padding: 1.5rem 0 1.75rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThemeModeButton = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
