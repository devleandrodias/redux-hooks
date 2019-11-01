import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <span>
      Módulo: <b> {activeModule.title}</b>
    </span>
    <br />
    <span>
      Aula: <b> {activeLesson.title}</b>
    </span>
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
