import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

import store from './store';

// Context API

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </Fragment>
  );
}

export default App;
