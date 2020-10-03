import React from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

import '../assets/styles/components/Home.scss';

const Home = () => {
  const showAlert = () => {
    swal.fire('Hola mundo', 'body');
  };
  const showAlert2 = () => {
    swal.fire({
      title: 'Evento programado',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };
  const showAlert3 = () => {
    swal.fire({
      title: 'Error al guardar',
      text: 'Descripcion del error',
      icon: 'error',
    });
  };
  const showAlert4 = () => {
    swal.fire({
      title: 'Alerta',
      text: 'Ya tienes un avento programado',
      icon: 'warning',
    });
  };

  return (
    <>
      <Layout>
        {/* <Alert></Alert> */}
        <h1 className='PageTitle'>Hola otra vez Leomaris!</h1>
        <div className='inisigthContainer'>
          <div className='insigth'>
            <h3>Completados</h3>
            <p className='insithMain'>23 Cursos</p>
            <div className=' progress'>
              <div className='progressCompleted progressCompletados'></div>
            </div>
          </div>
          <div className='insigth'>
            <h3>Pendientes</h3>
            <p className='insithMain'>20 Cursos</p>
            <div className=' progress'>
              <div className='progressCompleted '></div>
            </div>
          </div>
          <div className='insigth'>
            <h3>Progreso Total</h3>
            <p className='insithMain'>54%</p>
            <div className='progress'>
              <div className='progressCompleted'></div>
            </div>
          </div>
          <div className='insigth'>
            <h3>Semanas pendientes</h3>
            <p className='insithMain'>5</p>
            <div className=' progress'>
              <div className='progressCompleted progressSemanas'></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
