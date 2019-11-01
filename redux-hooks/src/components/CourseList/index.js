import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
  const qty = 5;

  const courses = useSelector(state => state.data.slice(0, qty), [qty]);

  const dispatch = useDispatch();

  function handleAddCourse() {
    dispatch({
      type: 'ADD_COURSE',
      title: 'Webpack',
    });
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddCourse}>
        Adicionar
      </button>
    </>
  );
}
