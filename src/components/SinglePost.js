import React, {useState,useEffect } from 'react'
import axios from 'axios'
import Post from './post'

function SinglePost(props){

    const[post,setPost] = useState({})
    const[user,setUser] = useState({})
    const[sub,setSub] = useState({})

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/'+props.post_id)
        .then(res => {
            // console.log(user)
            setPost(res.data)
            setUser(res.data.User)
            setSub(res.data.Subdiddit)
            
        })
        .catch(err => console.error(err))
    }, [])
    
    return(
        <Post changeCurrentPageHandle={props.changeCurrentPageHandle} sub={sub} post={post} user={user}/>
    )
    }
        
export default SinglePost;