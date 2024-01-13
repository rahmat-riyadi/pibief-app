import axios from "../helper/axios"

const getAllPurchase = async () => {

    try {
        
        const response = await axios.get('/purchase')
        return response.data

    } catch (err) {
        return err.response.data
    }
}

const getMissingPurchase = async () => {

    try {
        
        const response = await axios.get('/purchase/missing')
        return response.data

    } catch (err) {
        return err.response.data
    }

}

const getPaidPurchase = async () => {

    try {
        
        const response = await axios.get('/purchase/paid')
        return response.data

    } catch (err) {
        return err.response.data
    }

}

const getWaitingPurchase = async () => {

    try {
        
        const response = await axios.get('/purchase/waiting')
        return response.data

    } catch (err) {
        return err.response.data
    }

}

const getAllPurchaseBill = async () => {

    try {
        
        const response = await axios.get('/purchase/bill')
        return response.data

    } catch (err) {
        return err.response.data
    }

}

const storePurchase = async (data) => {

    try {
        
        const response = await axios.post('/purchase', data)
        return response.data

    } catch (err) {
        return err.response.data
    }

}

const deletePurchase = async id => {

    try {
        
        const response = await axios.delete('/purchase/' + id)
        return response.data

    } catch (err) {
        return err.response.data
    }


}

export { 
    getAllPurchase, 
    storePurchase, 
    deletePurchase, 
    getAllPurchaseBill, 
    getMissingPurchase, 
    getPaidPurchase, 
    getWaitingPurchase 
}