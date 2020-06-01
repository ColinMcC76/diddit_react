import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Button,
    Input
} from 'reactstrap';


function CreatePost(props) {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    const handleImageLink = (image) => setImage(image.target.value);
    const handleTitle = (title) => setTitle(title.target.value);
    const handleBody = (body) => setBody(body.target.value);


    const createPost = (e) => {
        console.log('create Post function')
        e.preventDefault();
        const postInfo  = {
            user_id: props.authUser.id,
            subdiddit_id: props.sub_id,
            title: title,
            body: body,
            image: image
        }
        console.log(postInfo)
            axios.post('http://localhost:8000/api/D/create', postInfo)
                .then(function(response){
                    // console.log(response.data);
                    // props.loginUser(response.data);
                    // props.registerUser(response.data)
                    props.changeCurrentPageHandle('Sub', props.sub_id)
                })
                .catch(function(error) {
                    console.log(error)
                    setError(error)
                })
                .finally(function() {
                })
        //     // axios call goes here
    }

    return (
        <div class="container">
            <div class="row">
                <div
                    class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4"
                >
                    <h1 class="mb-3 my-3 text-center">Create a new Post</h1>
                    <form onSubmit={createPost} class="mb-3">
                        <div class="form-group ">
                            <label for="title">Title:</label>
                            <Input onChange={handleTitle} name='username' type="text" class="form-control" placeholder="Title" id="title" required />
                        </div>
                        <div class="form-group">
                            <label for="body">Body:</label>
                            <Input onChange={handleBody} name='body' type="textarea" class="form-control" placeholder="Body" id="body" required/>

                        </div>
                        <div class="form-group">
                            <label for="image">Image link:</label>
                            <Input onChange={handleImageLink} name='image' type="text" class="form-control" placeholder="ex.. https://somewebsite.com" id="image" />
                            <p className='text-muted'>We are not an image hosting service, if you wish to upload you own images there are other services out <a target="_blank" href='https://imgur.com'>there</a>.</p>
                        </div>
                        {error ? <div class="alert alert-danger" role="alert">Make sure your image is an active link.</div> : ''}
                        <Button type='submit'>Create Post</Button>
                        <div class="text-center">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;

