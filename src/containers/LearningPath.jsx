import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import '../assets/styles/components/LearningPath.scss'

/* 
Super importante con los checkbox, el id debe corresponder con el for de los label, de lo contrario JAMÁS funcionará correctamente
 */
const LearningPath = () => (
  <>
    <Layout>
      <div className='title-container'>
        <h1>Learning Path</h1>
      </div>
      <div className='goals'>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox1' />
            <label for='checkbox1'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Curso de Fundamentos de Diseño de Interfaces UI y UX</p>
            </div>
            <div className='goal-date'>
              <p className='on-time'>Martes 20 de Octubre</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox2' />
            <label for='checkbox2'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Curso de Diseño de Prototipos</p>
            </div>
            <div className='goal-date'>
              <p className='for-today'>Hoy</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox3' />
            <label for='checkbox3'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Curso de HTML y CSS</p>
            </div>
            <div className='goal-date'>
              <p className='late completed'>Martes 08 de Septiembre</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox4' />
            <label for='checkbox4'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Reto del Curso</p>
            </div>
            <div className='goal-date'>
              <p className='late'>Martes 08 de Septiembre</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox5' />
            <label for='checkbox5'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Lectura recomendada</p>
            </div>
            <div className='goal-date'>
              <p className='for-today'>Hoy</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox6' />
            <label for='checkbox6'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Sesión inicio de semana</p>
            </div>
            <div className='goal-date'>
              <p className='on-time'>Martes 20 de Octubre</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox7' />
            <label for='checkbox7'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Sesión técnica</p>
            </div>
            <div className='goal-date'>
              <p className='late'>Martes 08 de Septiembre</p>
            </div>
          </div>
        </div>
        <div className='goals-container'>
          <div className='check-box'>
            <input type='checkbox' name='' id='checkbox8' />
            <label for='checkbox8'></label>
          </div>
          <div className='goals-box'>
            <div className='goal-course'>
              <p>Sesión grupal</p>
            </div>
            <div className='goal-date'>
              <p className='late'>Martes 08 de Septiembre</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default LearningPath