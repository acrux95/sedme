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
  const [filter, setFilter] = useState('')
  const [form, setForm] = useState({ name: 'Fulano' })

  const nuevo = () => {
    setModal(!modal)
  }
  const addUser = () => {
    setForm({ name: '', phone: '', email: '' })
    nuevo()
  }

  useEffect(() => {
    axios.get(`http://3.128.32.140:3000/api/users/`).then((res) => {
      const users = res.data.data
      setUsers(users)
      console.log(users)
    })
  }, [])

  const edit = (r) => {
    console.log(r)
    setModal(!modal)
    setForm(r)
  }

  const deleteUser = (user) => {
    Swal.fire({
      title: `Deseas eliminar a ${user.name}`,
      showCancelButton: true,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <>
      <input className='search' type='text' placeholder='Nombre del usuario' />
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
            <th>Group</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((r) => (
            <tr>
              <td>{r.name}</td>
              <td>{r.lastname}</td>
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
            <input className='input' type='text' value={form.name} />
            <br />
            <span className='label'>Email</span>
            <input className='input' type='text' value={form.email} />
            <br />
            <span className='label'>Phone</span>
            <input className='input' type='text' value={form.phone} />
            <br></br>
            <button className='btn'>Guardar</button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default Users
