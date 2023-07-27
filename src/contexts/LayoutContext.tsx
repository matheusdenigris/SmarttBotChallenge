import { ReactNode, createContext, useState } from 'react'

interface LayoutContextType {
  mode: 'dark' | 'light'
  setTheme: () => void
}

export const LayoutContext = createContext({} as LayoutContextType)

interface LayoutContextProviderProps {
  children: ReactNode
}

export function LayoutContextProvider({
  children,
}: LayoutContextProviderProps) {
  const [mode, setMode] = useState(
    (localStorage.getItem('smarttbot-mode') as 'dark' | 'light') ?? 'dark',
  )

  function setTheme() {
    const theme = localStorage.getItem('smarttbot-mode') ?? 'dark'

    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('smarttbot-mode', newTheme)

    setMode(newTheme)
  }

  return (
    <LayoutContext.Provider value={{ mode, setTheme }}>
      {children}
    </LayoutContext.Provider>
  )
}
