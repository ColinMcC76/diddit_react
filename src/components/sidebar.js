import React, { useState, useEffect } from 'react';
import {
    Button, NavItem, NavLink, Nav
} from 'reactstrap';

function Sidebar(props) {

    return (
        <div>
            <Nav className="mr-auto" navbar>
                {props.sub ? props.sub.map(item => {
                    return (
                        <NavItem>
                            <NavLink onClick={() => props.handlePage('Sub', item.id)}>D/{item.name}</NavLink>
                        </NavItem>
                    )
                }) : ''
                }
            </Nav>
        </div>
    )
}

export default Sidebar;