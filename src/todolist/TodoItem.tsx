import React from 'react';
import styled, { css } from 'styled-components';
import { useTodosDispatch, Todo } from './TodosContext';

type TodoItemProps = {
  todo: Todo;
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
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };

  return (
    <li>
      <Text done={todo.done} onClick={onToggle}>
        {todo.text}
      </Text>
      <Remove onClick={onRemove}>
        (X)
      </Remove>
    </li>
  );
}

export default TodoItem;