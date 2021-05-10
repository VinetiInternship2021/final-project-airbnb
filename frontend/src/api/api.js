const request = 'http://localhost:3000/'
const imggbAPIkey = '32034bbba705948502da631ca3f98546'

//CRUD requests

//request | read get data
async function reqRed(path) {
    return await fetch(request + path).then((response) => response.json())
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
async function reqUpdate(path) {
    return await fetch(`${request}${path}`, {
        method: 'PUT',
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

// async function reqGetToken(path,token){
//     return await fetch(request + path, {
//         method: 'POST', // or 'PUT'
//         headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then((response) => response.json())
// }

async function reqCreateToken(path, data, token) {
    return await fetch(request + path, {
        method: 'POST', // or 'PUT'
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

//*********IMAGE UPLOADER TO imggbur SERVER *** */

function fetchBody(img) {
    let body = new FormData()
    body.set('key', imggbAPIkey)
    body.append('image', img)
    return fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body,
    })
}
function imgUploadToServer(urls) {
    return Promise.all(
        urls.map((url) => fetchBody(url).then((resp) => resp.json()))
    )
}
//*************************** */

//******IMG UPLOAD TO RAILS SERVER****************** */

function uploadImgRails(path, list, id, token) {
    return Promise.all(
        list.map((url) =>
            fetch(`${request}${path}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imgUrl: url, property_id: id }),
            })
        )
    )
}

//****************************** */
export {
    reqRed,
    reqDelete,
    reqUpdate,
    reqCreate,
    imgUploadToServer,
    uploadImgRails,
    reqCreateToken,
    request,
}
