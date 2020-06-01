import { useEffect } from 'react'
// import axios from 'axios'

function Logout(props) {
    
    useEffect(() => {
        props.logoutUser()
        props.changeCurrentPageHandle('Home')
    }, [])

    return null
}
export default Logout;