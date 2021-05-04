const request = 'http://localhost:3000/'

//CRUD requests

//request | read get data
function reqRed(path) {
    return fetch(request + path).then((response) => response.json())
}

//request | create new data
async function reqCreate(path, data) {
    return await fetch(request + path, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

//request | update current data
async function reqUpdate(path, id, data) {
    return await fetch(`${request}${path}/${id}`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

//request | delete current data
async function reqDelete(path, id) {
    return await fetch(`${request}${path}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export { reqRed, reqDelete, reqUpdate, reqCreate, request }
