import { createAction, createReducer } from '@reduxjs/toolkit'
import { StateApi } from '../../../@types/state'
import { Robot } from '../../../@types/types'

const INITIAL_STATE: StateApi = {
  data: [],
  error: null,
  status: 'idle',
}

export const addRobot = createAction<StateApi, 'ADD_ROBOT'>('ADD_ROBOT')

export const listRobot = createAction<StateApi, 'LIST_ROBOT'>('LIST_ROBOT')

export const stopRobot = createAction<StateApi, 'STOP_ROBOT'>('STOP_ROBOT')

export const resumeRobot = createAction<StateApi, 'RESUME_ROBOT'>(
  'RESUME_ROBOT',
)

export default createReducer(INITIAL_STATE, {
  [addRobot.type]: (state: StateApi, action) => {
    const robots: Robot[] = [...(state.data as [])]
    if (action.payload.data?.id) {
      if (!robots.find((item: Robot) => item?.id === action.payload.data?.id)) {
        robots.push(action.payload.data)
      }
    }

    return {
      data: [...robots],
      error: action.payload.error,
      status: action.payload.status,
    }
  },

  [listRobot.type]: (state: StateApi, action) => {
    const robots: Robot[] = [...(state.data as [])]

    action.payload.data?.forEach((el: Robot) => {
      if (!robots.find((item: Robot) => item?.id === el.id)) {
        robots.push(el)
      }
    })

    return {
      data: [...robots],
      error: action.payload.error,
      status: action.payload.status,
    }
  },

  [stopRobot.type]: (state: StateApi, action) => {
    const robots: Robot[] = [...(state.data as [])]

    const index = robots.findIndex(
      (item: Robot) => item?.id === action.payload.data?.id,
    )

    if (index === -1) {
      robots[index] = {
        ...robots[index],
        running: 1,
      }
    } else {
      robots[index] = {
        ...robots[index],
        running: 0,
      }
    }

    return {
      data: [...robots],
      error: action.payload.error,
      status: action.payload.status,
    }
  },

  [resumeRobot.type]: (state: StateApi, action) => {
    const robots: Robot[] = [...(state.data as [])]

    const index = robots.findIndex(
      (item: Robot) => item?.id === action.payload.data?.id,
    )

    if (index === -1) {
      robots[index] = {
        ...robots[index],
        running: 0,
      }
    } else {
      robots[index] = {
        ...robots[index],
        running: 1,
      }
    }

    return {
      data: [...robots],
      error: action.payload.error,
      status: action.payload.status,
    }
  },
})
