import { Robot } from './../../@types/types.d'
import { NewRobotPayload } from '../../@types/types'
import { api } from '../../services/api'
import { listRobot, addRobot, stopRobot, resumeRobot } from '../ducks/robot'
import { listPapers } from '../ducks/paper'

export const getAllRobots = () => {
  return (dispatch: any) => {
    dispatch(
      listRobot({
        data: [],
        error: null,
        status: 'loading',
      }),
    )

    api
      .get('/robot', {
        params: {
          filter: 'TTSC2',
        },
      })
      .then((res) => {
        console.log(res)
        dispatch(
          listRobot({
            data: res.data?.data || [],
            error: null,
            status: 'succeeded',
          }),
        )
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          listRobot({
            data: [],
            error: 'Não foi possível listar os robos',
            status: 'failed',
          }),
        )
      })
  }
}

export const createRobot = (payload: NewRobotPayload) => {
  return (dispatch: any) => {
    dispatch(
      addRobot({
        data: [],
        error: null,
        status: 'loading',
      }),
    )

    api
      .post('/robot', {
        title: `TTSC2 - ${payload.name}`,
        mode: 0,
        strategy_id: payload.strategy === 'Tangram' ? 2 : 1,
        initial_capital: payload.price,
        simulation: 0,
        broker_id: 1,
      })
      .then((res) => {
        console.log(res)
        dispatch(
          addRobot({
            data: res.data?.data || [],
            error: null,
            status: 'succeeded',
          }),
        )
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          addRobot({
            data: [],
            error: 'Não foi possível criar o robo',
            status: 'failed',
          }),
        )
      })
  }
}

export const pauseRobot = (robot: Robot) => {
  return (dispatch: any) => {
    dispatch(
      stopRobot({
        data: robot,
        error: null,
        status: 'loading',
      }),
    )

    api
      .put(`/robot/${robot.id}/stop`)
      .then((res) => {
        console.log(res)
        dispatch(
          stopRobot({
            data: robot,
            error: null,
            status: 'succeeded',
          }),
        )
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          stopRobot({
            data: null,
            error: 'Não foi possível criar o robo',
            status: 'failed',
          }),
        )
      })
  }
}

export const startRobot = (robot: Robot) => {
  return (dispatch: any) => {
    dispatch(
      resumeRobot({
        data: robot,
        error: null,
        status: 'loading',
      }),
    )

    api
      .put(`/robot/${robot.id}/start`)
      .then((res) => {
        console.log(res)
        dispatch(
          resumeRobot({
            data: robot,
            error: null,
            status: 'succeeded',
          }),
        )
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          resumeRobot({
            data: null,
            error: 'Não foi possível criar o robo',
            status: 'failed',
          }),
        )
      })
  }
}

export const getAllPapers = () => {
  return (dispatch: any) => {
    dispatch(
      listPapers({
        data: [],
        error: null,
        status: 'loading',
      }),
    )

    api
      .get('/paper', {
        params: {
          filter: 'TTSC2',
        },
      })
      .then((res) => {
        console.log(res)
        dispatch(
          listPapers({
            data: res.data?.data || [],
            error: null,
            status: 'succeeded',
          }),
        )
      })
      .catch((err) => {
        console.log(err)
        dispatch(
          listPapers({
            data: [],
            error: 'Não foi possível listar os robos',
            status: 'failed',
          }),
        )
      })
  }
}
