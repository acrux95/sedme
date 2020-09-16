import React from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
      {/* <Alert></Alert> */}
      <h1>Hola Sedme en React</h1>

      <h2>Rutas:</h2>
      <ul>
        <li>
          <Link to='/admin'>Administracion</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/calendar'>Calendario</Link>
        </li>
        <li>
          <Link to='/profile'>Perfil</Link>
        </li>
      </ul>

      <em>
        Para Html que se agrege: <br />
        Cambiar class="" por className="" <br />
        Cambiar a href="" por Link to="" <br />
      </em>

      <button className="btn" onClick={() => showAlert()}>Msj 1</button>
      <button className="btn" onClick={() => showAlert2()}>Msj 2</button>
      <button className="btn" onClick={() => showAlert3()}>Msj 3 </button>
    </>
  );
};

export default Home;
