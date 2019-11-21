import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import Counter from './components/Counter';

const store = createStore(rootReducer);

function ReduxSampleApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxSampleApp;