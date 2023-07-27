import { configureStore } from '@reduxjs/toolkit'

import robotReducers from './ducks/robot'

export default configureStore({
  reducer: {
    robots: robotReducers,
  },
})
