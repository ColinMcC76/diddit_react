import React, { useState,useLayoutEffect} from 'react';
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



    const [user,setUser] = useState('')
    const [info,setInfo] = useState('')

    
    useLayoutEffect(() => {
        axios.get('http://127.0.0.1:8000/api/U/'+props.user_id)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error(err))
        },
        []
        )
        // console.log(user.posts[0].subdiddit)        
        return (
            
            <div class="col-4 card">
            {/* <img class="card-img-top" src="https://fakeimg.pl/350x200/?text=User" alt="user prorfile"> */}
            <div class="card-body">
                {/* <h4 class="card-title">U/{user.name}</h4> */}
            </div>
            {user ? (user.posts.map((item, index) => {
                {/* return( <Post 
                            key={index} 
                            sub={} 
                            post={item}
                            user={user}
                        />) */}
                })) : ''}
            </div>
    );
    
}
export default User;


// console.log(Object.keys(user.posts[0]))