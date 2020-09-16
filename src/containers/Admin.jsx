import React, { useEffect, useState } from 'react'
import '../assets/styles/components/Admin.scss'
import Table from '../components/Admin/Table'
import Layout from '../components/Layout'

const Admin = () => {
  return (
    <>
      <Layout>
        <h1>Administración</h1>
        <div className='tab'>
          <button className='tab__btn active'>Usuarios</button>
          <button className='tab__btn'>Grupos</button>
        </div>
        <div className='tab__content'>
          <Table></Table>
        </div>
      </Layout>
    </>
  )
}
export default Admin
