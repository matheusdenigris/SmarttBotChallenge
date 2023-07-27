export interface MovimentationsRobot {
  date: string
  value: number
}

export interface PaperRobot {
  robot_id: number
  paper: string
  position: number
  type: number
  paper_value: number
  profit: number
  created_at: string
  id: number
  robot: {
    title: string
  }
}

export interface Robot {
  id: number
  title: string
  running: number
  updated_at: string
  mode: number
  simulation: number
  stock_codes: string
  strategy: string
  initial_capital: number | string
  number_trades: number
  daily_balance: number
  created_at: string
  movimentations: MovimentationsRobot[]
  last_paper: PaperRobot
}

export interface NewRobotPayload {
  name: string
  price: number
  strategy: 'Tangram' | 'Price Action'
}
