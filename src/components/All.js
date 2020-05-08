import React, { useState,useEffect} from 'react';
import axios from 'axios'
import Post from './post'

// export default class All extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             subs: [],
//             posts:[],
//             users:[]
//         }
//     }

function HomePage(props) {

    const[posts,setPosts] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                setPosts(res.data)
                
            })
            .catch(err => console.error(err));
    }, [])


    return(

            <div>
                { posts ? posts.map((post, i) => <Post changeCurrentPageHandle={props.changeCurrentPageHandle} key={i} sub={post.Subdiddit} post={post} user={post.User} />) : '' }
            </div>
        )
}

export default HomePage; 
