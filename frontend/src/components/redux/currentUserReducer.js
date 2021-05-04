import { CREATE_USER, UPLOAD_LOCAL_IMG } from './types'

const initialState = {
    currentUser: {
        status: [],
    },
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
        default:
            return state
    }
}
