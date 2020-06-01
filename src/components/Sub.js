import React, {useState,useEffect } from 'react'
import axios from 'axios'
import Post from './post'
import {
    Button
} from 'reactstrap';


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
    }, [props])
    return(
        <div className='px-5'>
                <div className="my-3">
                    {/* <img class="card-img-top" src="https://fakeimg.pl/350x200/?text=User" alt="user prorfile"> */}
                        {Object.keys(props.authUser).length > 0 ? <Button onClick={() => props.changeCurrentPageHandle('createPost', props.sub_id)} className='my-3' size='lg'>Create a post</Button> : ''}
                </div>
                <div className='row flex-row'>
                    <div className='col-sm-12 col-md-4 my-3'>
                        <p>
                            <h4>D/{sub.name}</h4>
                            {sub.description}
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-8 my-3'>
                            {posts.length > 0 ? posts.sort((a,b)=>  b.id - a.id ).map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={sub} post={post} user={post.User}/> ) 
                            : <p>No posts here, looks empty.</p>}
                    </div>
                </div>
        </div>
    )
}

export default Sub;
