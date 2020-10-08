import React from 'react';

function CourseCard({ goal }) {
  return (
    <>
      <div className='course-box'>
        {/* <img src="" alt="Cursos del módulo" /> */}
        <ul>
          <li>{goal.name} </li>
        </ul>
        <div className='btn-container'>
          <a href='#' className='btn'>
            Module: {goal.estimatedhours} Hours
          </a>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
