import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { userAddNew, userEdit, userSelected as setUserSelected } from '../../actions/user';
import { useModal } from '../../hooks/useModal';
import { useForm } from '../../hooks/userForm';
import { Modal } from '../Modal/Modal';
import ErrorField from './ErrorField';
import "./_user-form.scss";

const initialValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
};

const UserForm = () => {
    
    const [ values, handleInputChange, reset ] = useForm( initialValues );
    const [ showModal, setShowModal, handleOpenModal, handleCloseModal ] = useModal();
    const { userSelected } = useSelector( state => state.user );
    const { userList } = useSelector( state => state.user );
    const [ isUserActive, setIsUserActive ] = useState( false );
    const history = useHistory();
    const dispatch = useDispatch();

    const [errorName, setErrName] = useState({ error: '' })
    const [errorEmail, setErrEmail] = useState({ error:''})
    const [errorPhone, setErrPhone] = useState({ error:''})
    const [errorCountry, setErrCountry] = useState({error: ''})
    const [isNotValid, setIsNotValid] = useState(false)

    const { name, email, phone, country } = values;

    useEffect(() => {
        if ( userSelected ) {
            reset( userSelected );
            setIsUserActive( true );
            dispatch(setUserSelected( null ))
        }
    }, []);

    useEffect(() => {
        
        if ( JSON.parse(localStorage.getItem('userList')) && ( userList.length >= JSON.parse(localStorage.getItem('userList')).length ) ) {
            localStorage.setItem('userList', JSON.stringify([...userList]))
        }
    }, [userList]);

    const isrequired = (nameInput,contentInput, chars )=>{
        let longitudInput = ''
        let stringinValid = true
        if(chars > 0){
           longitudInput = ' , must contain at least ' + chars +' letters '
        }
        if(contentInput !== 0 &&contentInput.length >= chars){
            stringinValid = false
        }
        return stringinValid ? 'The field ' +nameInput+ ' is required *' + longitudInput : '' ;
    }

    const isPhone = ()=>{
        const regex = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        console.log(regex.test(phone))
        return regex.test(phone) === false ? 'Enter valid phone number, it is required *': ''       
    }

    const isEmail = ()=>{
        const regex = /.+@.+\.[A-Za-z]+$/;
        return regex.test(email) === false ? 'The Email field must have a valid format , it is required *': ''
    }

    const messageValidatorSimple = ()=>{
   
            let validName = {
                error: isrequired('Name',name, 2),
            }
            

            let validEmail ={
                error: isEmail(email),  
            }
            
            let validPhone ={
                error: isPhone(),
            }
            
            let validCountry ={
               error:isrequired('Country',country, 2)  
            }

            setErrName(validName)
            setErrEmail(validEmail)
            setErrPhone(validPhone)
            setErrCountry(validCountry)
            return(validName.error === '' && validEmail.error  === '' && validPhone.error === '' && validCountry.error === '')
    }

    const handleInputSubmit = ( e ) => {
        e.preventDefault();
        isUserActive ? dispatch( userEdit( values ) ) : dispatch( userAddNew( values ) );
        
        reset( { ...initialValues } );
        setShowModal( false );
        dispatch( setUserSelected( null) );
        showAlert();
    }

    const validateForm = () => {

        const isValid = messageValidatorSimple()
        setIsNotValid(!isValid)
        if(isValid){
            handleOpenModal();
        }
    }

    const showAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Saved',
            text: 'User successfully stored',
        }).then(result => {
            if ( result.isConfirmed ) {
                history.push('/');
            }
        })

    }

    return  (<>
        <div className="centered">
            <h2>{ isUserActive ? 'Edit user' : 'Add new user' }</h2>
            <div>
            {isNotValid&&<div class="alert">
             <strong>Incorrect data entered!</strong> Please enter your details again .
            </div>}
            <label
                htmlFor=""
                className="label"
            >
                Name
            </label>
            {errorName &&
                <ErrorField
                label={'Name'}
                message={errorName.error}
                ></ErrorField>
            } 
            <input
                placeholder="Type your name here"
                name="name"
                type="text"
                value={ name }
                onChange={ handleInputChange }
            />
            <label
                htmlFor=""
                className="label"
            >
                Email
            </label>
            {errorEmail &&
                <ErrorField
                label={'Email'}
                message={errorEmail.error}
                ></ErrorField>
            } 
            <input
                placeholder="email@example.com"
                name="email"
                type="text"
                value={ email }
                onChange={ handleInputChange }
            />
            <label
                htmlFor=""
                className="label"
            >
                Phone
            </label>
            {errorPhone &&
                <ErrorField
                label={'Phone'}
                message={errorPhone.error}
                ></ErrorField>
            }
            <input
                placeholder="+58424-1255708"
                name="phone"
                type="text"
                value={ phone }
                onChange={ handleInputChange }
            />
            <label
                htmlFor=""
                className="label"
            >
                País
            </label>
            {errorCountry &&
                <ErrorField
                label={'Country'}
                message={errorCountry.error}
                ></ErrorField>
            }
            <input
                placeholder="Type your country"
                name="country"
                type="text"
                value={ country }
                onChange={ handleInputChange }
            />
            <input
                className="button"
                type="submit"
                onClick={ validateForm }
                value="Aceptar"/>
            </div>
        </div>

        { showModal && 
            <Modal
                onCloseModal={ handleCloseModal }
                onEvent={ handleInputSubmit }
                message={ isUserActive ? 'Edit User' : 'Create User'}
            >
                { isUserActive ? <h4>¿Are you sure you want to edit the user?</h4> : <h4>¿Are you sure you want to save the user?</h4> }
            </Modal>
        }
        </>
    );
}

export default UserForm;