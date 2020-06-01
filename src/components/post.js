
import React from 'react';
import './post.css';

import {
    Card, CardImg, CardText, CardBody,
    CardLink, CardTitle, Button
} from 'reactstrap';


function Post(props) {
            return (
                <div className='d-flex p-3'>
                    <Card className='p-0 col-12 screenCheck'>
                        {props.post.image ? <CardImg top onClick={() => props.changeCurrentPageHandle('Post', props.post.id)} className='p-0 click col-sm-12 col-md-5' src={props.post.image} alt="Post Image" />
                        : ''}
                        <CardBody>
                            <div className='d-flex justify-content-around pb-4'>
                                <CardLink className='text-muted' href='#' onClick={() => props.changeCurrentPageHandle('User', props.user.id)}>U/{props.user.name}</CardLink>
                                <CardLink className='text-muted' href='#' onClick={() => props.changeCurrentPageHandle('Sub',props.sub.id )}>D/{props.sub.name}</CardLink>
                            </div>
                            <CardTitle href='#' className='h3 text-info click' onClick={() => props.changeCurrentPageHandle('Post', props.post.id)}>{props.post.title}</CardTitle>
                            <p>{props.body}</p>
                        </CardBody>
                    </Card>
            </div>
        )
    } 

export default Post;
