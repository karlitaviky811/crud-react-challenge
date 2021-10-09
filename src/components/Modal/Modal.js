import React from 'react';
import './_modal.scss';

export const Modal = ({ children, onCloseModal, onEvent, message }) => {
    return <div className="modal-custom">
        <div className="modal-content">
            <div className="close-button">
                <span className="title">{message}</span>
                <button className="btn" onClick={ onCloseModal }>X</button>
            </div>
            <div className="modal-body">
                { children }
            </div>
            <div className="modal-footer-u">
                <button className="btn btn-gray" onClick={ onCloseModal }>Cancelar</button>&nbsp;
                <button className="btn btn-purple" onClick={ onEvent }>Aceptar</button> 
            </div>
        </div>
    </div>
    

}