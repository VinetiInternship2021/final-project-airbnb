import {
    ADD_OWN_DATE,
    APPEND_USERS_ID,
    CLEAR_USERS_ID,
    CREATE_USER,
    REMOVE_USERS_ID,
    UPLOAD_LOCAL_IMG,
} from './types'

const initialState = {
    currentUser: {
        status: [],
    },
    usersID: [],
    localImgList: [],
    datePicker: {
        start_date: new Date(),
        end_date: new Date(),
        duration: 0,
    },
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                currentUser: { status: [action.payload] },
            }
        case UPLOAD_LOCAL_IMG:
            return {
                ...state,
                localImgList: [...state.localImgList].concat(action.payload),
            }
        case APPEND_USERS_ID:
            return {
                ...state,
                usersID: state.usersID.concat([action.payload]),
            }
        case REMOVE_USERS_ID:
            return {
                ...state,
                usersID: state.usersID.filter((el) => el !== action.payload),
            }
        case CLEAR_USERS_ID:
            return {
                ...state,
                usersID: [],
            }
        case ADD_OWN_DATE:
            return {
                ...state,
                datePicker: action.payload,
            }
        default:
            return state
    }
}
