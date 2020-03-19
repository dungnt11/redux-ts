import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

import { personReducer } from './reducers';
const store = createStore(personReducer);


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
