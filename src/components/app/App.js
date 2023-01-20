import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Date from '../date/Date';
import ToDoList from '../toDoList/ToDoList';
import ToDoForm from '../toDoForm/ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('task');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = (task) => {
    if (!task) return;
    const newTask = {
      id: uuidv4(),
      task,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const onDone = (id) => {
    const done = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTasks(done);
  };

  const onDelete = (id) => {
    const filteredTask = tasks.filter((item) => item.id !== id);
    setTasks(filteredTask);
  };

  const onClearAll = () => {
    if (tasks.length === 0) return;
    setTasks([]);
  };

  return (
    <div className="container">
      <div className="todo">
        <Date />
        <ToDoList tasks={tasks} onDone={onDone} onDelete={onDelete} />
        <ToDoForm onAddTask={onAddTask} onClearAll={onClearAll} />
      </div>
    </div>
  );
};

export default App;
