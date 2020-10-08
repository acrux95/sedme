import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Profile.scss';
import Layout from '../components/Layout';
import profilePhoto from '../assets/static/profilephoto.png';

import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from '../components/Modal'

const Profile = () => {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [filter, setFilter] = useState([])
  const [form, setForm] = useState({
    roleid: 1,
    parentuserid: null,
    groupid: 1,
    name: 'user',
    lastname: 'Diaz',
    email: 'david@sedme.com',
    phone: '322019248',
    password: '12345678',
    age: '10',
  })
  
  useEffect(() => {
    update()
  }, [])

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const saveUser = () => {
    axios
      .post(`http://3.128.32.140:3000/api/users/`, { ...form })
      .then((res) => {
        update()
        nuevo()
        Swal.fire('User saved!', '', 'success')
      })
  }
  const update = () => {
    axios
      .post(
        'http://3.128.32.140:3000/api/auth/sigin',
        {},
        {
          auth: {
            Username: 'Fabian@sedme.com',
            Password: '12345678',
          },
        }
      )
      .then((res) => {
        console.log(res)
      })

    axios.get(`http://3.128.32.140:3000/api/users/`).then((res) => {
      const users = res.data.data
      setUsers(users)
      setFilter(users)
    })
  }
  axios.get(`http://3.128.32.140:3000/api/users/`).then((res) => {
      const users = res.data.data
      setUsers(users)
      setFilter(users)
    })
    
  const btnEdit = (user) => {
    console.log(user)
    setForm(user)
    setModal(!modal)
  }
  return (
    <>
      <Layout>
        {/* {filter.map((r) => (    */}
            <div className="main">
                <section className="photoSection">
                    <h3>Photo</h3>
                    <img src={profilePhoto} alt="Profile Photo" className="perfilPhoto"/>
                    <button className="uploadButton">Upload Photo</button>
                </section>
                <section className="personalInfo">
                    <h2>Personal Info</h2>
                    <label className="firstName">First name: </label> 
                    <input 
                        type="text" 
                        className="firstNameInput" 
                        value={form.name}
                        onChange={handleInputChange}
                        name='name'
                    />
                    <label className="lastName">Last Name: </label>
                    <input 
                    type="text" 
                    className="lastNameInput"
                    value={form.lastname}
                    onChange={handleInputChange}
                    name='lastname'
                    />
                    <label className="email">Email: </label>
                    <input 
                    type="text" 
                    className="emailInput"
                    value={form.email}
                    onChange={handleInputChange}
                    name='email'
                    />
                    <div className="buttonPass">
                        <button className="password">Change Password</button>
                    </div>
                </section>
                <div className="section biography">
                    <h3>Biography</h3>
                    <textarea type="text" className="biographyInput" placeholder="Platzi Master Actually Student..."></textarea>
                    <div className="buttonSave">
                        <button className="saveChanges">Save</button>
                    </div>
                </div>
            </div>
        {/* ))} */}
        </Layout>
    </>
  )
}  


export default Profile;