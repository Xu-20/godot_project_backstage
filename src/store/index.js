import { configureStore } from "@reduxjs/toolkit";
import TebReducer from './reducers/tab'

export default configureStore({
  reducer: {
    tab: TebReducer
  },
});