import React, { useEffect, useState } from 'react'
import '../assets/styles/components/Admin.scss'
import Users from '../components/Admin/Users'
import Groups from '../components/Admin/Groups'
import Layout from '../components/Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
  const [tab, setTab] = useState(false)
  const clickTab = () => {
    setTab(!tab)
  }

  return (
    <>
      <Layout>
        <h1>Administración</h1>
        <div className='tab'>
          <button
            className={tab ? 'tab__btn active' : 'tab__btn'}
            onClick={clickTab}
          >
          <FontAwesomeIcon icon={faUser} /> Usuarios
          </button>
          <button
            className={!tab ? 'tab__btn active' : 'tab__btn'}
            onClick={clickTab}
          >
          <FontAwesomeIcon icon={faUsers} /> Grupos
          </button>
        </div>
        <div className='tab__content'>{tab ? <Users /> : <Groups />}</div>
      </Layout>
    </>
  )
}
export default Admin
