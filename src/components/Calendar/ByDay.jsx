import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/components/Calendar/Week.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faClipboardList,
  faHatWizard,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

const ByDay = () => (
  <section className='content'>
    <div className='search-button'>
      <a href='#'>
        <i className='fas fa-search'></i>
      </a>
      <div className='drop-menu'>
        <h1>Daily</h1>
      </div>
    </div>

    {/* Dibujando la tabla */}

    {/* Caja de cursos
        <td>6 am</td>
        <td rowspan="5" id="course-box"><div id="course">
            <h4>Curso de HTML y CSS</h4>
            <p>6:00 am - 11:00 am</p>
        </div></td>
        cada td después de la hora simboliza un día de la semana, en este caso, se trata del domingo, el rowspan hace referencia a las horas propuestas para cada actividad.
        Importante, si se crea un rowspan mayor a 1, se debe eliminar un td de las siguientes filas, de lo contrario se creará unas celdas por fuera del calendario semanal. Así, si el rowspan es 5, se deben eliminar 4 td de las siguientes tr
        
        Los ids son los siguientes:
        - course-box: Caja para cursos
        - meeting-group-box: Caja para las reuniones grupales
        - meeting-1-1-box: Caja para las reuniones 1:1 */}

    <table>
      <thead>
        <tr>
          <th>
            <div className='hour'></div>
          </th>
          <th>
            <div className='sun'>
              <h2>SUN</h2>
              <p>25</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12 am</td>
          <td></td>
        </tr>
        <tr>
          <td>1 am</td>
          <td></td>
        </tr>
        <tr>
          <td>2 am</td>
          <td></td>
        </tr>
        <tr>
          <td>3 am</td>
          <td></td>
        </tr>
        <tr>
          <td>4 am</td>
          <td></td>
        </tr>
        <tr>
          <td>5 am</td>
          <td></td>
        </tr>
        <tr>
          <td>6 am</td>
          <td rowspan='5' id='course-box'>
            <div id='course'>
              <h4>Curso de HTML y CSS</h4>
              <p>6:00 am - 11:00 am</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>7 am</td>
        </tr>
        <tr>
          <td>8 am</td>
        </tr>
        <tr>
          <td>9 am</td>
        </tr>
        <tr>
          <td>10 am</td>
        </tr>
        <tr>
          <td>11 am</td>
          <td></td>
        </tr>
        <tr>
          <td>12 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>1 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>2 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>3 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>4 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>5 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>6 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>7 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>8 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>9 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>10 pm</td>
          <td></td>
        </tr>
        <tr>
          <td>11 pm</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
)

export default ByDay
