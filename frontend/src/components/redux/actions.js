import { CREATE_USER, UPLOAD_LOCAL_IMG } from './types'

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user,
    }
}

export function localUploader(list) {
    return {
        type: UPLOAD_LOCAL_IMG,
        payload: list,
    }
}
