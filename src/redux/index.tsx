import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import Counter from './components/Counter';
import TodoInsertWithRedux from './components/TodoInsert';
import TodoListWithRedux from './components/TodoList';

const store = createStore(rootReducer);

function ReduxSampleApp() {
  return (
    <Provider store={store}>
      <Counter />
      <hr/>
      <p>Todo List with Redux</p>
      <TodoInsertWithRedux />
      <TodoListWithRedux />
    </Provider>
  );
}

export default ReduxSampleApp;