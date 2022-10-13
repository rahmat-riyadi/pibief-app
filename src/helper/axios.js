import axios from "axios"

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/pibief/v1',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        API_KEY: 'QmCJxo9WNoy867WD0XL58v6Ofub0O7WjH8QDJB4FvQkXR2Po2UrfUauZtP5VMoG4'
    }
})