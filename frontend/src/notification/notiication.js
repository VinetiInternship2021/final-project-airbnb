import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const getEmoji = () => {
    const emoji = ['😀', '😁', '😁', '🤣', '😃', '😎', '😋', '😊', '😉', '🤨']
    return emoji[Math.floor(Math.random() * 10)]
}

const success = (msg) => {
    return toast.success(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const info = (msg) => {
    return toast.info(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const warning = (msg) => {
    return toast.warn(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const error = (msg) => {
    return toast.error(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const dflt = (msg) => {
    return toast(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
const dark = (msg) => {
    return toast.dark(`${getEmoji()} ${msg}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export { success, info, warning, error, dflt, dark }
