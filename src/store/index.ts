import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    counter: 0, 
    showCounter: true,
    action: { type: '', amount: 0 }
  },
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

// Export actions
export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;

// Create store
const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
