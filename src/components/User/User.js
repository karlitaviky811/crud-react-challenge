import React from "react";
import { useDispatch } from "react-redux";
import { userSelected } from "../../actions/user";

import "./User.scss";

const User = ({ name, email, phone, country, onOpenModal, onUserEdit }) => {

  const dispatch = useDispatch();

  const handleSetUserEdit = ( user ) => {
    dispatch( userSelected( user ) );
    onOpenModal( user )
  }

  return (
    <div className="product">
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{country}</span>
      <span>
        <button className="btn edit" onClick={ () => onUserEdit( name, email, phone, country )}>
          <i className="fas fa-user-edit fa-lg"></i> Editar
        </button>&nbsp;
        <button className="btn erase" onClick={ () => handleSetUserEdit({ name, email, phone, country }) }>
          <i className="fas fa-trash fa-lg "></i> Eliminar
        </button>
      </span>
    </div>
  );
};

export default User;
