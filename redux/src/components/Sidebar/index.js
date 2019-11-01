import React from 'react';
import { bindActionCreators } from 'redux';

// Higher-Order Components
import { connect } from 'react-redux';
import * as CourseAction from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

// Primeira recebe uma função que recebe o estado e
// deve retornar quais propriedades eu quero daquele estado

const mapStateToProps = state => ({
  modules: state.course.modules,
});

// const mapDispatchToProps = dispatch => ({
//   toggleLesson: (module, lesson) =>
//     dispatch(CourseAction.toggleLesson(module, lesson)),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// export default connect(state => ({
//   modules: state.course.modules
// }))(Sidebar)
