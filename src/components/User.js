import React, { useState,useLayoutEffect } from 'react';
import axios from 'axios'
import Post from './post'
import { Button } from 'reactstrap';

function User(props) {



    const [user,setUser] = useState([])
    const [posts,setPosts] = useState([])
    const [subs,setSubs] = useState([])

    
    useLayoutEffect(() => {
        axios.get('http://127.0.0.1:8000/api/U/'+props.user_id)
            .then(res => {
                setUser(res.data)
                setPosts(res.data.posts)
                // setPosts(res.data.subs)
                
            })
            .catch(err => console.error(err))
        },
        []
        )
        // console.log(posts)
        return (
            // <div className='px-5'>
            //     <div className="my-3">
            //     {/* <img class="card-img-top" src="https://fakeimg.pl/350x200/?text=User" alt="user prorfile"> */}
            //     </div>
            //     
            
            // </div>

            // <div className='row'>
            //     <div className='py-3 col-sm-12 col-md-3'>
            //         {Object.keys(props.authUser).length > 0 ? <Button onClick={() => props.changeCurrentPageHandle('createSub')} className='my-3' size='lg'>Create a Sub</Button> : ''}
            //         <SubDrop changeCurrentPageHandle={props.changeCurrentPageHandle}/>
            //     </div>
            //     <div className='col-sm-12 col-md-9'>
            //         { posts ? posts.map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={post.Subdiddit} post={post} user={post.User} />) : '' }
            //     </div>
            // </div>

            <div className='row'>
                <div className='py-3 col-sm-12 col-md-3'>
                    <h4>U/{user.name}</h4>
                    <h5 className='my-3'>Moderator:</h5>
                    {user.subs ? user.subs.map((sub) =>{
                        return(
                            <Button onClick={() => props.changeCurrentPageHandle('Sub', sub.id)}>{sub.name}</Button>
                        )
                    }) : ''}
                    {/* {Object.keys(props.authUser).length > 0 ? <Button onClick={() => props.changeCurrentPageHandle('createSub')} className='my-3' size='lg'>Create a Sub</Button> : ''} */}
                    {/* <SubDrop changeCurrentPageHandle={props.changeCurrentPageHandle}/> */}
                </div>
                <div className='col-sm-12 col-md-9'>
                    {posts.length > 0 ? posts.sort((a,b)=>  b.id - a.id ).map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={post.subdiddit} post={post} user={user}/> ) 
                    : <p>No posts here, looks empty.</p>}
                </div>
            </div>
    );
    
}
export default User;

