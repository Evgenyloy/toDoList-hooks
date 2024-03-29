import { useState } from 'react';
import PropTypes from 'prop-types';
import { addTask, clearAll } from '../slice/toDoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const ToDoForm = () => {
  const [input, setInput] = useState('');

  const onValueChange = (e) => {
    setInput(e.target.value);
  };
  const state = useSelector((state) => state.toDo.ids);

  const dispath = useDispatch();

  const onSubmitTask = (e) => {
    if (!input) return;
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      task: input,
      done: false,
    };
    dispath(addTask(newTask));
    setInput('');
  };

  const onClearAll = () => {
    if (state.length === 0) return;
    dispath(clearAll());
  };

  return (
    <form action="#" className="todo__form" name="form" onSubmit={onSubmitTask}>
      <input
        type="text"
        className="todo__form-input"
        placeholder="Create New Task"
        autoFocus
        rows="1"
        value={input}
        onChange={onValueChange}
      ></input>
      <div className="todo__button-cont">
        <button className="todo__form-button" type="submit">
          Add task
        </button>
        <div className="todo__form-button clear-all" onClick={onClearAll}>
          Clear all
        </div>
      </div>
    </form>
  );
};

ToDoForm.propTypes = {
  onAddTask: PropTypes.func,
  onClearAll: PropTypes.func,
};

export default ToDoForm;
