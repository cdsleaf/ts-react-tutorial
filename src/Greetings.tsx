import React from 'react';

type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greetings({ name, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, { name }
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div> 
  )
};

Greetings.defaultProps = {
  name: 'please Name!!',
}

export default Greetings;