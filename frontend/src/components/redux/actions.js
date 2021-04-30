import { CREATE_USER } from './types'

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user,
    }
}
