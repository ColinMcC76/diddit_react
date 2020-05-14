
import React, { useState, useEffect} from 'react';
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
import User from './User';


const Example = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <div className='col-12 p-0'>
    <Navbar color="light" light expand="md">
        <div className=''>
            <img src='./emblem.png' height='30vh' width='30vh' alt='emblem' />
            <NavbarBrand onClick={()=> props.changeCurrentPageHandle('Home')}>diddit</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
            </NavItem> */}
                {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>

                        <DropdownItem>
                            Option 2
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
            <Nav navbar>
                {props.authUser ? props.authLinks.map(item=> <a onClick={()=> props.changeCurrentPageHandle(item)}   className='px-2' href='#'>{item}</a>): 
                    <div className=''>
                        {props.links.map(item=> <a onClick={()=> props.changeCurrentPageHandle(item)}   className='px-2' href='#'>{item}</a>)}
                    </div>
                }
                {/* <NavLink >login</NavLink>
        <NavLink href="#register">register</NavLink> */}

            </Nav>
        </Collapse>
    </Navbar>
</div>
    );
}


export default Example;