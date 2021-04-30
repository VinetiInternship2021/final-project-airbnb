import { CREATE_USER } from './types'

const initialState = {
    currentUser: {
        status: false,
    },
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return { ...state, currentUser: { status: action.payload } }
        default:
            return state
    }
}
