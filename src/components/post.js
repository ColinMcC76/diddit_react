
import React, { useState,useEffect} from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardLink, CardTitle, Button
} from 'reactstrap';
// import axios from 'axios'


// export default class Post extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.state = {
//         //     post: {},
//         //     user: {},
//         //     sub: {},
//         // }
function Post(props) {

    const[post,setPost] = useState({})
    const[user,setUser] = useState({})
    const[sub,setSub] = useState({})

    
    useEffect(() => {
        setPost(props.post)
        setUser(props.user)
        setSub(props.sub)
    }, [])
    
    {/* {post ? console.log(post.sub[Object.entries(post.sub)[2]]) : ''} */}
    
    // const x = () => {post ? ()=>{
        //     let name = post
        //     let subName = Object.values(post.sub)[2]
        // } : ''}
        
        
        // let user_id = this.state.user.id
        // for (let [key, value] of Object.entries(sub)) {
            //     console.log({key : value})};
            // {sub ? console.log(Object.values(sub)[2]) : ''}
            // let sub_id = this.state.sub.id
            
            return (
                <div className='d-flex p-3'>
                <div className="col-12">
                    <Card className='flex-row'>
                        <CardImg top className='col-sm-12 col-md-5' src={post.image} alt="Post Image" />
                        <CardBody className='col-sm-12 col-md-7'>
                            <CardLink href='#' onClick={() => props.changeCurrentPageHandle('User', user.id)}>U/{user.name}</CardLink>
                            <CardLink href='#' onClick={() => props.changeCurrentPageHandle('Sub',sub.id )}>U/{sub.name}</CardLink>
                            <CardTitle onClick={() => this.props.changeCurrentPageHandle('Post', props.post.id)}>{post.title}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    } 

export default Post;
