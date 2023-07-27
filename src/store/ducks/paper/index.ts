import { createAction, createReducer } from '@reduxjs/toolkit'
import { StateApi } from '../../../@types/state'

const INITIAL_STATE: StateApi = {
  data: [],
  error: null,
  status: 'idle',
}

export const listPapers = createAction<StateApi, 'LIST_PAPERS'>('LIST_PAPERS')

export default createReducer(INITIAL_STATE, {
  [listPapers.type]: (state: StateApi, action) => ({
    data: [...action.payload.data],
    error: action.payload.error,
    status: action.payload.status,
  }),
})
