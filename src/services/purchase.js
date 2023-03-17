import axios from "../helper/axios"

const getAllPurchase = async () => {

    try {
        
        const response = await axios.get('/purchase')
        return response.data

    } catch (err) {
        return err.response.data
    }
}

export { getAllPurchase }