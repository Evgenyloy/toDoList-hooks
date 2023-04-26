import cross from '../../resources/img/cross.svg';
import tick from '../../resources/img/tick.svg';
import { useDispatch } from 'react-redux';
import { deleteTask, finishTask } from '../slice/toDoSlice';
import { selectById } from '../slice/toDoSlice';
import store from '../../store/store';

const ToDoItem = ({ task, done, id }) => {
  const dispatch = useDispatch();
  const doneTask = selectById(store.getState(), id);

  let clazz;
  done ? (clazz = 'todo__text todo__text--done') : (clazz = 'todo__text');

  return (
    <li className="todo__item">
      <span className={clazz}>{task}</span>
      <div className="todo__text-btns">
        <button
          className="todo__done"
          data-action="done"
          onClick={() => dispatch(finishTask({ done: !doneTask.done, id: id }))}
        >
          <img className="todo__img" src={tick} alt="done" />
        </button>
        <button
          className="todo__delite"
          data-action="delite"
          onClick={() => dispatch(deleteTask(id))}
        >
          <img className="todo__img" src={cross} alt="delite" />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
