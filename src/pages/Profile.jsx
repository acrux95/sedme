import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../reducers'

import Layout from '../components/Layout';
import FileUpload from '../components/FileUpload';

import swal from 'sweetalert2';
import axios from 'axios'

import '../assets/styles/components/Profile.scss';
import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
  const [{ loggedUser, user }, dispatch] = useContext(GlobalContext)
  const id = user.id
  
  const [userData, setUserData] = useState([])
//   const [modal, setModal] = useState(false)
//   const [isNew, setIsNew] = useState(false)
  const [filter, setFilter] = useState([])
  const [form, setForm] = useState({
    roleid: 1,
    parentuserid: null,
    groupid: 1,
    name: 'Walter',
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

  const update = () => {
    const id = user.id
    axios
      .get(`http://3.128.32.140:3000/api/users/${id}`)
      .then((res) => {
        console.log(res.data.data)
        setForm(res.data.data)
      })
  }
  // state = {
  //   selectedFile: null
  // }
  // const fileSelectHandler = event => {
  //  this.setState({})
  //  selectedFile: event.target.files[0]
  // }

  // fileUploadhandler = () => {

  // }
//   }
 
//   const btnEdit = (user) => {
//     console.log(user)
//     setForm(user)
//     setModal(!modal)
//   }
  return (
    <>
      <Layout path={props.location.pathname}>
        <div className="main">
                <section className="photoSection">
                    <h3>Photo</h3>
                    {/* <input type="file" onChange={fileSelectHandler}/> */}
                    <img src={form.avatar} alt="Profile Photo" className="perfilPhoto"/>
                    {/* {profilePhoto} */}
                    {/* <button onClick={fileSelectHandler} className="uploadButton">Upload Photo</button> */}
                    <FileUpload />
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
                    <textarea 
                      type="text" 
                      className="biographyInput" 
                      value={form.biography}
                      onChange={handleInputChange}
                    name='biography'
                    />
                    <div className="buttonSave">
                        <button className="saveChanges">Save</button>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}  


export default Profile;

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }