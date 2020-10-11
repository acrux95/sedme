import React, { useState, useEffect } from 'react'
import '../../assets/styles/components/Table.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  faPencilAlt,
  faTrashAlt,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from '../Modal'

const Users = () => {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [isNew, setIsNew] = useState(false)
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

  const nuevo = () => {
    setModal(!modal)
  }
  const addUser = () => {
    nuevo()
  }
  const actualizar = () => {
    setModalEdit(!modalEdit)
  }
  // const updUser = () => {
  //   actualizar()
  // }
  const handleSearch = (event) => {
    setFilter(users.filter((r) => r.name.includes(event.target.value)))
  }

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

  const delUser = (id) => {
    axios.delete(`http://3.128.32.140:3000/api/users/${id}`)
    .then((res) => {
      update()
    })
  }
  const updateUser = (id) => {
    axios
    .put(`http://3.128.32.140:3000/api/users/`, { ...form })
    .then((res) => {
      update()
      actualizar()
      Swal.fire('User Update!', '', 'success')
    })
}

  const btnEdit = (user) => {
    console.log(user)
    setForm(user)
    setModalEdit(!modalEdit)
  }

  const btnPath = (user) => {
    console.log(user)
    Swal.fire({
      title: '<strong>Learning Path</strong>',
      html: `
      <h5>${user.name} ${user.lastname}</h5>
      <h4>FrontEndPath</h6>
      <table style="width:100%">
  <tr>
    <th>Week</th>
    <th>type</th>
    <th>Activity</th>
    <th>Link</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Basic Skills</td>
    <td>Curso de fundamentos de TS</td>
    <td><a href='#'>Zelda</></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Basic Skills</td>
    <td>Angular</td>
    <td><a href='#'>Zelda</></td>
  </tr>
</table>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
  }

  const btnDelete = (user) => {
    Swal.fire({
      title: `Deseas eliminar a ${user.name}`,
      showCancelButton: true,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        delUser(user.id)
        Swal.fire('User deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <>
      <input
        className='search'
        type='text'
        onChange={handleSearch}
        name='search'
        placeholder='User name'
      />
      <div className='search__icon'>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <button className='btn right add-btn' onClick={addUser}>
        <FontAwesomeIcon icon={faPlus} /> Add user
      </button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((r) => (
            <tr>
              <td>{r.name}</td>
              <td>{r.lastname}</td>
              <td>{r.age}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>
                <div className='buttons'>
                  <FontAwesomeIcon
                    onClick={() => btnEdit(r)}
                    icon={faPencilAlt}
                  />
                  <FontAwesomeIcon onClick={() => btnPath(r)} icon={faRoute} />
                  <FontAwesomeIcon
                    onClick={() => btnDelete(r)}
                    icon={faTrashAlt}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className='right'>Paginator Here</div>

      <Modal visible={modal}>
        <div className='modal-content'>
          <span className='close' onClick={nuevo}>
            &times;
          </span>
          <h2>New User</h2>
          <span className='label'>Name</span>
          <input
            className='input'
            type='text'
            value={form.name}
            onChange={handleInputChange}
            name='name'
          />
          <br />
          <span className='label'>Lastname</span>
          <input
            className='input'
            type='text'
            value={form.lastname}
            onChange={handleInputChange}
            name='lastname'
          />
          <br />
          <span className='label'>Age</span>
          <input
            className='input'
            type='text'
            value={form.age}
            onChange={handleInputChange}
            name='age'
          />
          <br />
          <span className='label'>Email</span>
          <input
            className='input'
            type='text'
            value={form.email}
            onChange={handleInputChange}
            name='email'
          />
          <br />
          <span className='label'>Phone</span>
          <input
            className='input'
            type='text'
            value={form.phone}
            onChange={handleInputChange}
            name='phone'
          />
          <button className='btn' onClick={saveUser}>
            Save
          </button>
          <br />
        </div>
      </Modal>
      <Modal visible={modalEdit}>
        <div className='modal-content'>
          <span className='close' onClick={actualizar}>
            &times;
          </span>
          <h2>Edit User</h2>
          <span className='label'>Name</span>
          <input
            className='input'
            type='text'
            value={form.name}
            onChange={handleInputChange}
            name='name'
          />
          <br />
          <span className='label'>Lastname</span>
          <input
            className='input'
            type='text'
            value={form.lastname}
            onChange={handleInputChange}
            name='lastname'
          />
          <br />
          <span className='label'>Age</span>
          <input
            className='input'
            type='text'
            value={form.age}
            onChange={handleInputChange}
            name='age'
          />
          <br />
          <span className='label'>Email</span>
          <input
            className='input'
            type='text'
            value={form.email}
            onChange={handleInputChange}
            name='email'
          />
          <br />
          <span className='label'>Phone</span>
          <input
            className='input'
            type='text'
            value={form.phone}
            onChange={handleInputChange}
            name='phone'
          />
          <button className='btn' onClick={updateUser}>
            Save
          </button>
          <br />
        </div>
      </Modal>
    </>
  )
}

export default Users
