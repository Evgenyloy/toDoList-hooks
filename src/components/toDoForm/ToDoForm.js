import { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoForm = ({ onAddTask, onClearAll }) => {
  const [input, setInput] = useState('');

  const onValueChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmitTask = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput('');
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
