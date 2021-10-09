import React, { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loadUserList, userDelele, userSelected } from "../../actions/user";
import Swal from 'sweetalert2';
import User from "../User/User";
import { Modal } from '../Modal/Modal';

import "./_user-list.scss";
import { useModal } from "../../hooks/useModal";

const UserList = () => {

  const [ showModal, setShowModal, handleOpenModal, handleCloseModal ] = useModal();
  const { userList } = useSelector( state => state.user );
  const { userSelected: user } = useSelector( state => state.user );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserEdit = ( name, email, phone, country ) => {

    dispatch(userSelected({
        name,
        email,
        phone,
        country,
      })
    );

    history.push('/users');
  }

  const handleUserDelete = () => {
    setShowModal( false );
    dispatch( userDelele( user.email ) );
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      text: 'User deleted successfully',
  })
  }

  return (
    <section className="user-list d-flex flex-column">
      <h2>User list</h2>
     { userList.length> 0 ? <div className="header-table">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
          <li>Opciones</li>
        </ul>
      </div>

      :
      <div className="centerNotUsers">
        <h4>The users who have created you can see them here</h4>
        <img src="https://irp-cdn.multiscreensite.com/241eff5b/dms3rep/multi/Cliengo-CRM.svg" width="400px" height="280px"></img>
      </div>
        
  }
      <ul className="user-list">
        {userList.map((user, i) => (
          <li key={i}>
            <User
              name={user.name}
              email={user.email}
              phone={user.phone}
              country={user.country}
              onOpenModal={ handleOpenModal }
              onUserEdit={ handleUserEdit }
            />
          </li>
        ))}
      </ul>
      { showModal && 
        <Modal
          onCloseModal={ handleCloseModal }
          onEvent={ handleUserDelete }
          message={'Eliminar usuario'}
        >
          <h4>¿Are you sure you want to delete the user?</h4>
        </Modal>
        }
      
    </section>
  );
};

export default UserList;
