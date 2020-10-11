import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import axios from 'axios';
import { GlobalContext } from '../reducers';
import Swal from 'sweetalert2';
import Modal from '../components/Modal';
import EditLP from '../components/LeraningPath/EditLP';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/LearningPath.scss';

const LearningPath = (props) => {
  const [modal, setModal] = useState(false);
  const [learningPath, setLearningPath] = useState([]);

  const nuevo = () => {
    setModal(!modal);
  };
  const addUser = () => {
    nuevo();
  };

  const getLearningPath = () => {
    axios.get(`http://3.128.32.140:3000/api/activities/user/52`).then((res) => {
      setLearningPath(res.data.data.activities);
      // console.log(res.data.data.activities);
    });
  };
  useEffect(() => {
    getLearningPath();
  }, []);
  return (
    <>
      <Layout path={props.location.pathname}>
        <header className='innerHeader'>
          <h1 className='PageTitle'>Learning Path</h1>
          <button className='btn right add-btn' onClick={addUser}>
            <FontAwesomeIcon icon={faPencilAlt} /> Edit
          </button>
        </header>
        <section className='content'>
          <div className='courses-container'>
            {learningPath.map((activity) => {
              // console.log(activity);
              return <CourseCard key={activity.id} activity={activity} />;
            })}

            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
            <div className='course-box'>
              <img src='html.png' alt='Cursos del módulo' />
              <ul>
                <li>Diseño de interfaces UI y UX</li>
                <li>Prototipado</li>
                <li>Introducción HMTL y CSS</li>
              </ul>
              <div className='btn-container'>
                <a href='#' className='btn'>
                  Module: 20 Hours
                </a>
              </div>
            </div>
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
      <Modal visible={modal}>
        <EditLP close={nuevo} />
      </Modal>
    </>
  );
};

export default LearningPath;
