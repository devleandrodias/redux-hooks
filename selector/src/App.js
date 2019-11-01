import React from 'react';
import { Provider } from 'react-redux';

import Cart from './Cart';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
