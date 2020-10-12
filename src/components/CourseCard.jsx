import React from 'react';

function CourseCard({ activity }) {
  return (
    <>
      <div className='course-box'>
        {/* <img src="" alt="Cursos del módulo" /> */}
        <ul>
          <li>{activity.name} </li>
        </ul>
        <div className='btn-container'>
          <a href='#' className='btn'>
            Module: {activity.TIME} Hours
          </a>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
