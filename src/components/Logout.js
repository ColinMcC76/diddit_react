import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Logout(props) {
    
    useEffect(() => {
        // axios.post('http://localhost:8000/api/logout')
        //     .then(function(response){
        //         console.log(response.data);
        //         // props.loginUser(response.data)
        //     })
        //     .catch(function(error) {
        //         console.log(error)
        //     })
        //     .finally(function() {
        //     })
        props.logoutUser()
        props.changeCurrentPageHandle('Home')
    }, [])

    return null
}
export default Logout;