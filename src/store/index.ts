import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './auth';


// Export actions
export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;
export const { login, logout } = authSlice.actions;
// Create store
const store = configureStore({
  reducer: { counter: counterSlice.reducer,
    auth: authSlice.reducer }
});

export default store;
