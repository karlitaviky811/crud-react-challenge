import { types } from '../types/user';

export const userAddNew = ( { name, email, phone, country } ) => ({
    type: types.user_create,
    payload: {
        name,
        email,
        phone,
        country
    },
});

export const userEdit = ( user ) => ({
    type: types.user_edit,
    payload: user,
});

export const userDelele = ( email ) => ({
    type: types.user_delete,
    payload: email,
});

export const getUsersList = () => ({
    type: types.user_load,
});

export const userSelected = ( user ) => ({
    type: types.user_selected,
    payload: user,
});

export const loadUserList = ( users ) => ({
    type: types.user_load,
    payload: users
})