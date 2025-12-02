import {  createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
  action: { type: '', amount: 0 }
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
      state.action = { type: 'increment', amount: 1 };
    },
    decrement: (state) => {
      state.counter--;
      state.action = { type: 'decrement', amount: 1 };
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
      state.action = { type: 'incrementByAmount', amount: action.payload };
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
      state.action = { type: 'toggleCounter', amount: 0 };
    }
  }
});
export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;
export default counterSlice
