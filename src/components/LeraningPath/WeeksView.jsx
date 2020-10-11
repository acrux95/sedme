import React, { useState, useRef, useEffect } from 'react';

import { Select, Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowClose,
  faPlus,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import AddGoal from './AddGoal';

const { Option } = Select;

function WeeksView() {
  const [edittingGoals, setEdittingGoals] = useState({
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  });
  const [semanas, setSemanas] = useState([
    { weekNumber: 1 },
    { weekNumber: 2 },
    { weekNumber: 3 },
    { weekNumber: 4 },
    { weekNumber: 5 },
    { weekNumber: 6 },
    { weekNumber: 7 },
    { weekNumber: 8 },
    { weekNumber: 9 },
    { weekNumber: 10 },
    { weekNumber: 11 },
    { weekNumber: 12 },
  ]);

  const [weekSelected, setWeekSelected] = useState(1);

  useEffect(() => {
    // if (weekSelected.first) {
    //   listRef.current.firstChild.classList.toggle('selectorActive');
    //   setWeekSelected({
    //     previous: null,
    //     current: listRef.current,
    //     first: false,
    //   });
    // }
  }, []);

  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  function addUser() {
    console.log('value'); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  function showModal() {
    setEdittingGoals({
      visible: true,
    });
  }

  function handleOk() {
    setEdittingGoals({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      setEdittingGoals({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  function handleCancel() {
    console.log('Clicked cancel button');
    setEdittingGoals({
      visible: false,
    });
  }

  return (
    <section className='editLP__content'>
      <div className='listOfWeeks'>
        <h2>Slect a week to edit</h2>
        <Select
          labelInValue
          defaultValue={{ value: '1' }}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {semanas.map((semana) => {
            return (
              <Option value={semana.weekNumber}>
                Semana {semana.weekNumber}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className='week'>
        <div className='week__header'>
          <h3 className='week__title'>Semana 1</h3>
          <button className='btn right add-btn-lp' onClick={showModal}>
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
        </div>
        <span className='duration'>Estimated Time: 4 hrs</span>
        <ul className='courseList'>
          <li className='courseSelector'>
            <h4 className='courseName'>Diseño de interfaces UI y UX</h4>
            <div className='buttons'>
              <button className='btn right edit-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              <button className='btn right delete-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
          <li className='courseSelector'>
            <h4 className='courseName'>Prototipo</h4>
            <div className='buttons'>
              <button className='btn right edit-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              <button className='btn right delete-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
          <li className='courseSelector'>
            <h4 className='courseName'>Introducción HMTL y CSS</h4>
            <div className='buttons'>
              <button className='btn right edit-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              <button className='btn right delete-btn' onClick={addUser}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Modal
        title='Add New Goal'
        visible={edittingGoals.visible}
        onOk={handleOk}
        centered
        confirmLoading={edittingGoals.confirmLoading}
        onCancel={handleCancel}
        width={450}
      >
        <p>{edittingGoals.ModalText}</p>
        {/* <h1>Hola Mundo</h1> */}
        <AddGoal />
      </Modal>
    </section>
  );
}

export default WeeksView;
