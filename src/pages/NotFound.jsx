import React from 'react'
import error from '../assets/static/404.svg'

import Layout from '../components/Layout'
const NotFound = () => (
  <>
    <Layout>
      <h1 className='PageTitle'>No encontrado 404</h1>
      <img class='center' width='50%' src={error}></img>
    </Layout>
  </>
)

export default NotFound
