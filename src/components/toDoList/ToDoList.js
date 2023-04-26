import ToDoItem from '../toDoItem/ToDoItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const obgTasks = useSelector((state) => state.toDo.entities);
  const arrTasks = Object.values(obgTasks);

  const taskElement = arrTasks.map((item) => {
    const { id, ...task } = item;
    return <ToDoItem key={id} {...task} id={id} />;
  });

  const emptyList = <li className="todo__empty">No Tasks</li>;

  return (
    <ul className="todo__block">
      {arrTasks.length === 0 ? emptyList : taskElement}
    </ul>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.array,
  onDone: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ToDoList;
