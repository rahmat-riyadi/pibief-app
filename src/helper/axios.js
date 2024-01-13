import axios from "axios"

export default axios.create({
    baseURL: 'http://127.0.0.1:8001/api',
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     API_KEY: 'QmCJxo9WNoy867WD0XL58v6Ofub0O7WjH8QDJB4FvQkXR2Po2UrfUauZtP5VMoG4'
    // }
})