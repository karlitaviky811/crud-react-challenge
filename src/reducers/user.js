import { types } from "../types/user";

const initialValues = {
    userList: [],
    userSelected: null
};

export const UserReducer = ( state = initialValues, action ) => {

    switch( action.type ) {
        case types.user_create:
                return {
                    ...state,
                    userList: [...state.userList, action.payload]
                }
            break;

        case types.user_edit:
                return {
                    ...state,
                    userList: state.userList.filter(user => user.email !== action.payload.email).concat([action.payload])
                }
            break;

        case types.user_delete:
                return {
                    ...state,
                    userList: state.userList.filter(user => user.email !== action.payload)
                }
            break;

        case types.user_load:
                return {
                    ...state,
                    userList: [...action.payload]
                }
            break;

        case types.user_selected:
                return {
                    ...state,
                    userSelected: action.payload,
                }
            break;

        default:
            return state;

    }

}