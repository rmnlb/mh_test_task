import {
    LOAD_DATA,
    SHOW_PAGE
} from '../actions/types';

const initialState = {users: [], inView: []};

export default function (state = initialState , action) {
    switch (action.type) {
        case LOAD_DATA : {
            return {
                ...state,
            users: action.payload.users
            }
        }
        case SHOW_PAGE : {
            let usersToView = state.users.filter((user) => {
               return user.id > (action.payload - 1)*5 && user.id <= action.payload*5;
            });
            return {
                ...state,
             inView: usersToView
            }
        }
        default : {
            return {...state}
        }
    }
}