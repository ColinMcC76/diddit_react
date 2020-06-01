import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function SubDrop(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subs, setSubs] = useState([]);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/subs')
            .then(res => {
                setSubs(res.data)

                
            })
            .catch(err => console.error(err));
    }, [])


    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Sub Select
                </DropdownToggle>
                <DropdownMenu>
                    {subs.length > 0 ? subs.map(sub=>{
                        return(
                            <DropdownItem onClick={() => props.changeCurrentPageHandle('Sub', sub.id)}>{sub.name}</DropdownItem>
                        )
                    }) : ''}

                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default SubDrop;