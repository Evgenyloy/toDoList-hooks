import Date from '../date/Date';
import ToDoList from '../toDoList/ToDoList';
import ToDoForm from '../toDoForm/ToDoForm';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="todo">
        <Date />
        <ToDoList />
        <ToDoForm />
      </div>
    </div>
  );
};

export default App;
