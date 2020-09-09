import React from 'react';
import '../../assets/styles/components/Table.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Table = () => (
  <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Leomaris Reyes</td>
          <td>Cohort5</td>
          <td>correo@gmail.com</td>
          <td>7237231737</td>
          <td>
            <div className='buttons'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Fernando Castelan</td>
          <td>Cohort5</td>
          <td>correo@gmail.com</td>
          <td>7237231737</td>
          <td>
            <div className='buttons'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Armando Cruz</td>
          <td>Cohort5</td>
          <td>correo@gmail.com</td>
          <td>7237231737</td>
          <td>
            <div className='buttons'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Jonathan Restan</td>
          <td>Cohort5</td>
          <td>correo@gmail.com</td>
          <td>7237231737</td>
          <td>
            <div className='buttons'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </td>
        </tr>
        <tr>
          <td>Walter Miguel Díaz Jaramillo</td>
          <td>Cohort5</td>
          <td>correo@gmail.com</td>
          <td>7237231737</td>
          <td>
            <div className='buttons'>
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <div className="right">Paginator Here</div>
  </>
);

export default Table;
