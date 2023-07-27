import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './store'

import 'react-toastify/dist/ReactToastify.css'
import './scrollbar.css'
import { LayoutContext } from './contexts/LayoutContext'
import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  const { mode } = useContext(LayoutContext)

  return (
    <Provider store={store}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <BrowserRouter>
          <ToastContainer />
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}
