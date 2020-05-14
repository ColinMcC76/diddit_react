import React, {useState,useEffect } from 'react'
import axios from 'axios'
import Post from './post'


function Sub(props) {

    const [sub,setSub] = useState([]);
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/D/'+props.sub_id)
        .then(res => {
            setSub(res.data)
            setPosts(res.data.posts)
            
        })
        .catch(err => console.error(err))
    }, [])
    return(
        <div>
                <div className="col-4 border my-3">
                    {/* <img class="card-img-top" src="https://fakeimg.pl/350x200/?text=User" alt="user prorfile"> */}
                        <h4>D/{sub.name}</h4>
                </div>
                <div className='col-8 my-3'>
                        {posts.length > 0 ? posts.map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={sub} post={post} user={post.User}/> ) 
                        : <p>No posts here, looks empty.</p>}
                </div>
        </div>
    )
}

export default Sub;
