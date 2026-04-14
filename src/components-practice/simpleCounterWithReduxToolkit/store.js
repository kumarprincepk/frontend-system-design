import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterComponent/counterSlice'
const store = configureStore({
  reducer:{
    counter: counterReducer
  }
});

export default store;