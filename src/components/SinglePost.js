import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Post from './post'
import { Button } from 'reactstrap'

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

    function checkUser() {
        if(props.authUser){
            console.log(props.authUser)
            if(props.authUser.id === user.id){
                return (
                    <div className='d-flex justify-content-around'>
                        <Button onClick={()=>{props.changeCurrentPageHandle('EditPost',props.post_id)}}>Edit Post</Button>
                        <Button onClick={()=>{props.changeCurrentPageHandle('DeletePost',props.post_id)}}>Delete Post</Button>
                    </div>
                )
            }
        }
    }
    return(
        <div>
            <Post changeCurrentPageHandle={props.changeCurrentPageHandle} sub={sub} post={post} body={post.body} user={user}/>
            {checkUser()}
        </div>
    )
    }
        
export default SinglePost;