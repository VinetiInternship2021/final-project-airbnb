import {
    APPEND_USERS_ID,
    CREATE_USER,
    REMOVE_USERS_ID,
    UPLOAD_LOCAL_IMG,
} from './types'

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user,
    }
}

export function addIds(ids) {
    return {
        type: APPEND_USERS_ID,
        payload: ids,
    }
}
export function removeIds(ids) {
    return {
        type: REMOVE_USERS_ID,
        payload: ids,
    }
}

export function localUploader(list) {
    return {
        type: UPLOAD_LOCAL_IMG,
        payload: list,
    }
}
