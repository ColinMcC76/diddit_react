
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Sidebar from './sidebar'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';


const Example = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [sub, setSub] = useState([]);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/sub')
            .then(res => {
                setSub(res.data)

                
            })
            .catch(err => console.error(err));
    }, [])

    
    return (
        <div className='col-12 p-0'>
    <Navbar className='p-0' color="light" light expand="sm">
        <div className=''>
            <img src='./emblem.png' height='30vh' width='30vh' alt='emblem' />
            <NavbarBrand className='click' onClick={()=> props.changeCurrentPageHandle('Home')}>diddit</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse className='d-flex justify-content-between' isOpen={isOpen} navbar>
            <Sidebar handlePage={props.changeCurrentPageHandle} sub={sub}/>
            <Nav navbar>
                {props.authUser ? props.authLinks.map(item=> <a onClick={()=> props.changeCurrentPageHandle(item)}  color='primary' className='text-secondary px-2' href='#'>{item === 'Profile' ? 'U/'+props.authUser.name : item}</a>): 
                    <div className=''>
                        {props.links.map(item=> <a onClick={()=> props.changeCurrentPageHandle(item)}   className='text-secondary px-2' href='#'>{item}</a>)}
                    </div>
                }
            </Nav>
        </Collapse>
    </Navbar>
</div>
    );
}


export default Example;