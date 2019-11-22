import React from 'react';
import styled, {css} from 'styled-components';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

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

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <li>
      <Text done={todo.done} onClick={onToggle}>
        {todo.text}
      </Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </li>
  );
}

export default TodoItem;