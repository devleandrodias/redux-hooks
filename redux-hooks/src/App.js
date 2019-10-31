import React from 'react';
import { Provider } from 'react-redux';

import CourseList from './components/CourseList';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}
