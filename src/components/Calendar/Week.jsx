import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Calendar/Week.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboardList,
  faHatWizard,
  faCalendarAlt,
  faChartBar,
  faUsers,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const Week = () => (
    <section className="content">
        <div className="title-container">
            <h1>Calendar</h1>

            <div className="pagination">
                <div className="back"><a href="#"><i className="far fa-arrow-alt-circle-left"></i></a></div>
                <div className="next"><a href="#"><i className="far fa-arrow-alt-circle-right"></i></a></div>
            </div>

            <div className="montd-year">
                <h1>October 2020</h1>
            </div>

            <div className="search-button">
                <a href="#"><i className="fas fa-search"></i></a>
                <div className="drop-menu">
                    <h1>Weekly</h1>
                </div>
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
                    <th><div className="hour"></div></th>
                    <th><div className="sun"><h2>SUN</h2><p>25</p></div></th>
                    <th><div className="mon"><h2>MON</h2><p id="day-of-week">26</p></div></th>
                    <th><div className="tdu"><h2>THU</h2><p>27</p></div></th>
                    <th><div className="wed"><h2>WED</h2><p>28</p></div></th>
                    <th><div className="tdr"><h2>THR</h2><p>29</p></div></th>
                    <th><div className="fri"><h2>FRI</h2><p>30</p></div></th>
                    <th><div className="sat"><h2>SAT</h2><p>31</p></div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6 am</td>
                    <td rowspan="5" id="course-box"><div id="course">
                        <h4>Curso de HTML y CSS</h4>
                        <p>6:00 am - 11:00 am</p>
                    </div></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7 am</td>
                    
                    <td rowspan="2" id="meeting-group-box"><div className="meeting-group">
                        <h4>Reunión inicio de semana</h4>
                        <p>7:00 am - 9:00 am</p>
                    </div></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>8 am</td>
                    
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9 am</td>
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10 am</td>
                    <td></td>
                    <td></td>
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7 pm</td>
                    <td></td>
                    <td></td>
                    <td rowspan="1" id="meeting-1-1-box"><div className="meeting-1-1">
                        <h4>Reunión 1:1</h4>
                        <p>7:00 pm - 7:30 pm</p>
                    </div></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>8 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>11 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        {/* Botón añadir actividad */}
        <div className="add-activity">
            <a href="#"><i className="fas fa-plus"></i><h1>Add activity</h1></a>
        </div>
    </section>
);

export default Week;
