import { Outlet } from 'react-router-dom'
import { HeaderContainer, HeaderContent, ThemeModeButton } from './styles'

import logoImg from '../../assets/SmarttBotlogo-horizontal-para-fundo-escuro@4x-200x52.webp'
import { LayoutContext } from '../../contexts/LayoutContext'
import { useContext } from 'react'

export function DefaultLayout() {
  const { mode, setTheme } = useContext(LayoutContext)

  function handleChangeTheme() {
    setTheme()
  }

  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="logo SmarttBot" />

          <ThemeModeButton onClick={handleChangeTheme}>
            {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </ThemeModeButton>
        </HeaderContent>
      </HeaderContainer>
      <Outlet />
    </div>
  )
}
