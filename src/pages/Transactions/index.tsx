import { useSelector, useDispatch } from 'react-redux'
import { Analysis } from '../../components/Analysis'
import { Header } from '../../components/Header'
import { NewRobot } from '../../components/NewRobot'
import { Summary } from '../../components/Summary'
import { TableCard } from '../../components/TableCard'
import { Spacer, TableContainer } from './styles'
import { useEffect } from 'react'

import { getAllRobots } from '../../store/fetchActions'
import { Robot } from '../../@types/types'
import { Loading } from '../../components/Loading'
import { RobotsContextProvider } from '../../contexts/RobotsContext'

export function Transactions() {
  const dispatch = useDispatch()

  const robots = useSelector((state: any) => state.robots)

  useEffect(() => {
    dispatch(getAllRobots() as any)
  }, [dispatch])

  return (
    <div>
      <Header />
      <Analysis />
      <Summary />
      <RobotsContextProvider>
        <NewRobot qtdBots={robots.data?.length} />
      </RobotsContextProvider>
      {robots.status === 'loading' && <Loading />}
      <TableContainer>
        {robots.data?.map((robot: Robot) => (
          <TableCard {...robot} key={robot.id} />
        ))}
        <Spacer />
      </TableContainer>
    </div>
  )
}
