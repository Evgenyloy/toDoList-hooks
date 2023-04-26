import { configureStore } from '@reduxjs/toolkit';
import toDo from '../components/slice/toDoSlice';

const store = configureStore({
  reducer: { toDo },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
