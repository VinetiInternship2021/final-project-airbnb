import {
    ADD_OWN_DATE,
    ADD_PROPERTY_INFO,
    APPEND_USERS_ID,
    CLEAR_DATE_PICKER,
    CLEAR_ORDERED_DATES,
    CLEAR_USERS_ID,
    CREATE_USER,
    ORDERED_DATES,
    REMOVE_USERS_ID,
    UPLOAD_LOCAL_IMG,
} from './types'

const initialState = {
    currentUser: {
        status: [],
    },
    propID: [],
    usersID: [],
    orderedDates: [],
    localImgList: [],
    datePicker: {
        start_date: null,
        end_date: null,
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
        case CLEAR_DATE_PICKER:
            return {
                ...state,
                datePicker: {
                    start_date: null,
                    end_date: null,
                    duration: 0,
                },
            }
        case ADD_PROPERTY_INFO:
            return {
                ...state,
                propID: [action.payload],
            }

        case ORDERED_DATES:
            return {
                ...state,
                orderedDates: action.payload,
            }
        case CLEAR_ORDERED_DATES:
            return {
                ...state,
                orderedDates: [],
            }
        default:
            return state
    }
}
