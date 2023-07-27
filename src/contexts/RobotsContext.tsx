import { ReactNode, createContext, useState } from 'react'

interface RobotsContextType {
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export const RobotsContext = createContext({} as RobotsContextType)

interface RobotsContextProviderProps {
  children: ReactNode
}

export function RobotsContextProvider({
  children,
}: RobotsContextProviderProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <RobotsContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </RobotsContext.Provider>
  )
}
