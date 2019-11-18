import React from 'react';
import styled, { css } from 'styled-components';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

const Text = styled.span<{ done: boolean }>`
  ${props => props.done 
    ? css`
      color: #999999;
      text-decoration: line-through;
    `
    : css`
      cursor: pointer;
    `
  }
`;

const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <Text done={todo.done}>{todo.text}</Text>
      <Remove>(X)</Remove>
    </li>
  );
}

export default TodoItem;