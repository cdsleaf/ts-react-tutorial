import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greetings name="eee" onClick={onClick}/>
      <Counter />
    </div>
  );
}

export default App;
