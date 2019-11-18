import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import TodoForm from './todolist/TodoForm';
import TodoList from './todolist/TodoList';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string}) => {
    console.log(form);
  };
  return (
    <div>
      <p>Greetings</p>
      <Greetings name="eee" onClick={onClick}/>
      <hr />
      <p>Counter</p>
      <Counter />
      <hr />
      <p>My Form</p>
      <MyForm onSubmit={onSubmit} />
      <hr />
      <p>ReducerSample</p>
      <ReducerSample />
      <hr />
      <p>Todo List</p>
      <TodoForm />
      <TodoList />
      <hr />
    </div>
  );
}

export default App;
