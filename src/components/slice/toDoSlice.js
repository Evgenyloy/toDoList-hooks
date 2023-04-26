import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const toDoAdapter = createEntityAdapter();

const saveLocalStorage = (state) => {
  localStorage.setItem('task', JSON.stringify(state));
};

const initialState = toDoAdapter.getInitialState(
  JSON.parse(localStorage.getItem('task'))
);

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      toDoAdapter.addOne(state, action.payload);
      saveLocalStorage(state);
    },
    deleteTask: (state, action) => {
      toDoAdapter.removeOne(state, action.payload);
      saveLocalStorage(state);
    },
    clearAll: (state) => {
      toDoAdapter.removeAll(state);
      saveLocalStorage(state);
    },
    finishTask: (state, actions) => {
      toDoAdapter.upsertOne(state, actions.payload);
      saveLocalStorage(state);
    },
  },
});

const { actions, reducer } = toDoSlice;

export const { selectAll, selectById } = toDoAdapter.getSelectors(
  (state) => state.toDo
);

export default reducer;
export const { addTask, deleteTask, clearAll, finishTask } = actions;
