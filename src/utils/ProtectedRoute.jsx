import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    // const auth = JSON.parse(localStorage.getItem('auth') || { token : 'asdfasdf' })
    const auth = true
    if(!auth){
        return <Navigate to='/login' replace />
    }
    
    return children

}

export default ProtectedRoute