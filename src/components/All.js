import React, { useState,useEffect} from 'react';
import axios from 'axios'
import SubDrop from './SubDrop'
import Post from './post'

import {
    Button
} from 'reactstrap';

function HomePage(props) {

    const[posts,setPosts] = useState([])
    const[sub,setSub] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                // console.log(res)
                setPosts(res.data)
                
            })
            .catch(err => console.error(err));
    }, [])


    return(

            <div className='row'>
                <div className='py-3 col-sm-12 col-md-3'>
                    {Object.keys(props.authUser).length > 0 ? <Button onClick={() => props.changeCurrentPageHandle('createSub')} className='my-3' size='lg'>Create a Sub</Button> : ''}
                    <SubDrop changeCurrentPageHandle={props.changeCurrentPageHandle}/>
                </div>
                <div className='col-sm-12 col-md-9'>
                    { posts ? posts.map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={post.Subdiddit} post={post} user={post.User} />) : '' }
                </div>
            </div>
        )
}

export default HomePage; 
