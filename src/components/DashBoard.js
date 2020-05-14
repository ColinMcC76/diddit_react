import React from 'react'
// import axios from 'axios'
// import NavBar from './navBar
import Navbar from './NavHeader'
import All from './All'
import User from './User'
import Login from './Login'
import Register from './register'
import Logout from './Logout'
import Sub from './Sub'
import SinglePost from './SinglePost'



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navlinks: ['Login', 'Register'],
            authUserlinks: ['Logout', 'Profile'],
            authUser: {},
            currentPage: 'Home',
            mainMenu: [],
            page_id: 0,
        }

        this.updatePage = this.updatePage.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.logoutUser = this.logoutUser.bind(this)
    }
        // if (x !== null ) {
        //     console.log(x)
        //     this.loginUser(x)
        // }else {
        //     console.log('no')
        // }
    componentDidMount(){
        let x = localStorage.getItem('authUser')
        x = JSON.parse(x)
        if( x !== null) {
            this.loginUser(x)
        }
    }
    
    
    updatePage(newPage, user_id) {
        this.setState({
            currentPage: newPage,
            page_id: user_id
        })
    }
    loginUser(userInfo) {
        localStorage.setItem('authUser', JSON.stringify(userInfo))
        this.setState({
            authUser: userInfo
        })
    }
    logoutUser() {
        localStorage.removeItem('authUser')
        this.setState({
            authUser: {}
        })
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar authUser={this.state.authUser.user} changeCurrentPageHandle={this.updatePage} authLinks={this.state.authUserlinks} links={this.state.navlinks}/>
                    <div className='col-12'>
                        {this.state.currentPage === 'Home' ? <All changeCurrentPageHandle={this.updatePage} /> : null}
                        {this.state.currentPage === 'Post' ? <SinglePost post_id={this.state.page_id} changeCurrentPageHandle={this.updatePage} /> : null}
                        {this.state.currentPage === 'User' ? <User changeCurrentPageHandle={this.updatePage} user_id={this.state.page_id}/> : null}
                        {this.state.currentPage === 'Sub' ? <Sub changeCurrentPageHandle={this.updatePage} sub_id={this.state.page_id}/> : null}
                        {this.state.currentPage === 'Login' ? <Login changeCurrentPageHandle={this.updatePage} loginUser={this.loginUser} /> : null}
                        {this.state.currentPage === 'Register' ? <Register changeCurrentPageHandle={this.updatePage} loginUser={this.loginUser} /> : null}
                        {this.state.currentPage === 'Logout' ? <Logout changeCurrentPageHandle={this.updatePage} logoutUser={this.logoutUser}/> : null}
                    </div>
                </div>
            </div>
        )
    }
}

// export default 
