import React, { useState,useLayoutEffect } from 'react';
import axios from 'axios'
import Post from './post'
import {
    Button,
    Input
} from 'reactstrap';

// function posts(user){
//     return {user.posts.map((item, index) => {
//         return(
//         <Post 
//             key={index} 
//             sub={item.subdiddit_id} 
//             post={item.id} 
//             user={item.user_id}
//         />
//     )})}
// }


function User(props) {



    const [user,setUser] = useState([])
    const [posts,setPosts] = useState([])

    
    useLayoutEffect(() => {
        axios.get('http://127.0.0.1:8000/api/U/'+props.user_id)
            .then(res => {
                setUser(res.data)
                setPosts(res.data.posts)
                
            })
            .catch(err => console.error(err))
        },
        []
        )
        // console.log(posts)
        return (
            <div className='px-5'>
                <div className="col-4 border my-3">
                {/* <img class="card-img-top" src="https://fakeimg.pl/350x200/?text=User" alt="user prorfile"> */}
                    <p>User page</p>
                    <h4>U/{user.name}</h4>
                </div>
                <div className='col-8 my-3'>
                    {posts.length > 0 ? posts.map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={post.subdiddit} post={post} user={user}/> ) 
                    : <p>No posts here, looks empty.</p>}
                </div>

            </div>
    );
    
}
export default User;


// console.log(Object.keys(user.posts[0]))