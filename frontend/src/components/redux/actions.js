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

export function clearIds() {
    return {
        type: CLEAR_USERS_ID,
    }
}

export function localUploader(list) {
    return {
        type: UPLOAD_LOCAL_IMG,
        payload: list,
    }
}
export function ownDatePicker({ start_date, end_date, duration }) {
    return {
        type: ADD_OWN_DATE,
        payload: { start_date, end_date, duration },
    }
}
export function clearDatePicker() {
    return {
        type: CLEAR_DATE_PICKER,
    }
}

export function propertyData(data) {
    return {
        type: ADD_PROPERTY_INFO,
        payload: data,
    }
}
export function addOrderedDates(dates) {
    return {
        type: ORDERED_DATES,
        payload: dates,
    }
}
export function clearOrderedDates() {
    return {
        type: CLEAR_ORDERED_DATES,
    }
}
