import React, { useState, useEffect } from 'react'
import '../../assets/styles/components/Table.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from '../Modal'

const Users = () => {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
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

  const nuevo = () => {
    setModal(!modal)
  }
  const addUser = () => {
    nuevo()
  }
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
    axios.get(`http://3.128.32.140:3000/api/users/`).then((res) => {
      const users = res.data.data
      setUsers(users)
      setFilter(users)
    })
  }

  const delUser = (id) => {
    axios.delete(`http://3.128.32.140:3000/api/users/${id}`).then((res) => {
      update()
    })
  }

  useEffect(() => {
    update()
  }, [])

  const edit = (user) => {
    console.log(user)
    setForm(user)
    setModal(!modal)
  }

  const deleteUser = (user) => {
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
        placeholder='Nombre del usuario'
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
            <th>Edad</th>
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
                  <FontAwesomeIcon onClick={() => edit(r)} icon={faPencilAlt} />
                  <FontAwesomeIcon
                    onClick={() => deleteUser(r)}
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

      {modal ? (
        <Modal visible={modal}>
          <div className='modal-content'>
            <span className='close' onClick={nuevo}>
              &times;
            </span>
            <h2>Nuevo usuario</h2>
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
            <span className='label'>Edad</span>
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
              Guardar
            </button>
            <br />
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default Users
