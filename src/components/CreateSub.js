import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Button,
    Input
} from 'reactstrap';


function CreateSub(props) {

    const [sub_id, setSub_id] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleName = (name) => setName(name.target.value);
    const handleDescription = (description) => setDescription(description.target.value);

    const createSub = (e) => {
        console.log('create sub function')
        e.preventDefault();
        const subInfo  = {
            user_id: props.authUser.id,
            name: name,
            description: description,
            
        }
        axios.post('http://localhost:8000/api/create', subInfo)
        .then(function(response){
            // setSub_id(response.data.id)
            // console.log(sub_id);
            props.changeCurrentPageHandle('Sub',response.data.id)
            
        })
        .catch(function(error) {
            console.log(error)
        })
        .finally(function() {
        })
    }

            // axios.post('http://localhost:8000/api/create', subInfo)
            //     .then(function(response){
            //         console.log(response.data.id);
            //         setSub_id(response.data.id)
                    
            //         // props.loginUser(response.data);
            //         // props.registerUser(response.data)
            //     })
            //     .catch(function(error) {
            //         console.log(error)
            //     })
            //     .finally(function() {
            //     })
                
        //     // axios call goes here
 

    return (
        <div class="container">
            <div class="row">
                <div
                    class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4"
                >
                    <h1 class="mb-3 my-3 text-center">Create a new SubDiddit</h1>
                    <form onSubmit={createSub} class="mb-3">
                        <div class="form-group ">
                            <label for="title">Title:</label>
                            <Input onChange={handleName} name='username' type="text" class="form-control" placeholder="Title" id="title" required/>
                            <p className='text-muted'>Your sub can only contain letters or numbers, 30 characters in length.</p>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <Input onChange={handleDescription} name='description' type="textarea" class="form-control" placeholder="description" id="description" required/>
                        </div>
                        <Button type='submit'>Create Sub</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateSub;

