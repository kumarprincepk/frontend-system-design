import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementFun: (state) => {
      state.value += 1;
    },
    decrementFun: (state) => {
      state.value -=1;
    },
    incrementFunByNum: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementFun, decrementFun, incrementFunByNum } = counter.actions;
export default counter.reducer;
