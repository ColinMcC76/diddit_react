
import React, { useState,useEffect, props} from 'react';

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

    // const[post,setPost] = useState({})
    // const[user,setUser] = useState({})
    // const[sub,setSub] = useState({})

    
    // useEffect(() => {
    //     // console.log(props.post)
    //     // console.log(props.sub)
    //     // console.log(props.user)
    //     setPost(props.post)
    //     setUser(props.user)
    //     setSub(props.sub)
    // }, [])
    
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
            
            // {console.log(JSON.stringify(post))}
            return (
                <div className='d-flex p-3'>
                <div className="col-12">
                    <Card className='flex-row'>
                        <CardImg top className='col-sm-12 col-md-5' src={props.post.image} alt="Post Image" />
                        <CardBody className='col-sm-12 col-md-7'>
                        {/* {console.log(user.name)} */}
                        {/* {console.log(sub.name)} */}
                            <CardLink href='#' onClick={() => props.changeCurrentPageHandle('User', props.user.id)}>U/{props.user.name}</CardLink>
                            <CardLink href='#' onClick={() => props.changeCurrentPageHandle('Sub',props.sub.id )}>D/{props.sub.name}</CardLink>
                            <CardTitle href='#' onClick={() => props.changeCurrentPageHandle('Post', props.post.id)}>{props.post.title}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    } 

export default Post;
