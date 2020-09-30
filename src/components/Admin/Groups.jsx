import React, { useState, useEffect } from 'react'
import '../../assets/styles/components/Table.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faSearch,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import Accordion from '../Admin/Accordion'
import axios from 'axios'
import Swal from 'sweetalert2'
import Modal from '../Modal'

const Groups = () => {
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])

  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState('')

  const [form, setForm] = useState({
    name: 'Cohort ',
  })
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  useEffect(() => {
    update()
  }, [])
  const update = () => {
    axios.get(`http://3.128.32.140:3000/api/groups/`).then((res) => {
      const groups = res.data.data
      setGroups(groups)
    })
    axios.get(`http://3.128.32.140:3000/api/users/`).then((res) => {
      const users = res.data.data
      setUsers(users)
    })
  }
  const toggleModal = () => {
    setModal(!modal)
  }
  const addGroup = () => {
    axios
      .post(`http://3.128.32.140:3000/api/groups/`, { ...form })
      .then((res) => {
        update()
        toggleModal()
        Swal.fire('User saved!', '', 'success')
      })
  }
  const deleteUser = (user, group) => {
    Swal.fire({
      title: `Remove from group`,
      text: `You want to remove ${user.name} from group ${group.name}`,
      showCancelButton: true,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <>
      <input className='search' type='text' placeholder='Nombre del grupo' />
      <div className='search__icon'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <button className='btn right add-btn' onClick={toggleModal}>
        <FontAwesomeIcon icon={faPlus} /> Add group
      </button>
      <br />
      <br />
      <br />
      <br />
      {groups.map((g) => (
        <>
          <Accordion key={g.id} name={g.name}>
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
                {users
                  .filter((u) => u.groupid === g.id)
                  .map((r) => (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td>{r.lastname}</td>
                      <td>{r.email}</td>
                      <td>{r.phone}</td>
                      <td>
                        <div className='buttons'>
                          <FontAwesomeIcon
                            onClick={() => deleteUser(r, g)}
                            icon={faTimes}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                {users.filter((u) => u.groupid === g.id).length > 0 ? (
                  <tr></tr>
                ) : (
                  <tr>
                    <td>Grupo vacio</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Accordion>
        </>
      ))}

      <div className='right'>Paginator Here</div>

      {modal ? (
        <Modal visible={modal}>
          <div className='modal-content'>
            <span className='close' onClick={toggleModal}>
              &times;
            </span>
            <h2>New Group</h2>
            <span className='label'>Name</span>
            <input
              className='input'
              type='text'
              name='name'
              onChange={handleInputChange}
            />
            <br />
            <br></br>
            <button className='btn' onClick={addGroup}>
              Guardar
            </button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default Groups
