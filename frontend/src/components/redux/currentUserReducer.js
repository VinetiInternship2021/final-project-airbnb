import {
    APPEND_USERS_ID,
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
        default:
            return state
    }
}
