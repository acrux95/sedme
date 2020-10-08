import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import axios from 'axios';
import { GlobalContext } from '../reducers';

import '../assets/styles/components/LearningPath.scss';

const LearningPath = () => {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext);
  let goals = [''];
  axios.get(`http://3.128.32.140:3000/api/goals/user/52`).then((res) => {
    console.log(res);
    //   goals = res.data.goals;
  });
  return (
    <Layout>
      <section className='content'>
        <div className='title-container'>
          <h1>Learning Path</h1>
        </div>

        <div className='courses-container'>
          <div className='course-box'>
            {/* <img src="" alt="Cursos del módulo" /> */}
            <ul>
              <li>Diseño de interfaces UI y UX</li>
              <li>Prototipado</li>
              <li>Introducción HTML y CSS</li>
            </ul>
            <div className='btn-container'>
              <a href='#' className='btn'>
                Module: 20 Hours
              </a>
            </div>
          </div>

          <CourseCard
            goal={{ name: 'Curso de HTL5 y CSS', estimatedhours: 4 }}
          />

          {/* {goals.map((goal) => {
            return <CourseCard goal={goal} />;
          })} */}
        </div>
        <div className='pagination'>
          <div className='back'>
            <a href='#'>
              <i className='far fa-arrow-alt-circle-left'></i>
            </a>
          </div>
          <ul>
            <a href='#'>
              <li id='pg-first'>1</li>
            </a>
            <a href='#'>
              <li>2</li>
            </a>
            <a href='#'>
              <li>3</li>
            </a>
            <a href='#'>
              <li id='pg-last'>4</li>
            </a>
          </ul>
          <div className='next'>
            <a href='#'>
              <i className='far fa-arrow-alt-circle-right'></i>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearningPath;
