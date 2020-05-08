import React from 'react'
// import axios from 'axios'
// import NavBar from './navBar
import Navbar from './NavHeader'
import All from './All'
import User from './User'
import Login from './Login'
import Register from './register'



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navlinks: ['Login', 'Register'],
            currentPage: 'Home',
            mainMenu: [],
            page_id: 0,
        }
        this.updatePage = this.updatePage.bind(this)
    }
    
    updatePage(newPage, user_id) {
        this.setState({
            currentPage: newPage,
            page_id: user_id
        })
    }
    // }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar changeCurrentPageHandle={this.updatePage} links={this.state.navlinks}/>
                    <div className='col-12'>
                        {this.state.currentPage === 'Home' ? <All changeCurrentPageHandle={this.updatePage} /> : null}
                        {this.state.currentPage === 'User' ? <User user_id={this.state.page_id}/> : null}
                        {this.state.currentPage === 'Login' ? <Login /> : null}
                        {this.state.currentPage === 'Register' ? <Register /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

// export default 
