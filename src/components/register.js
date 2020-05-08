import React, { useState } from 'react';
import {
    Button,
    Input
} from 'reactstrap';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (username) => setUsername(username.target.value);
    const handleEmail = (email) => setEmail(email.target.value);
    const handlePassword = (password) => setPassword(password.target.value);




    return (
        <div class="container">
            <div class="row">
                <div
                    class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4"
                >
                    <h1 class="mb-3 my-3 text-center">Create a new account</h1>
                    <p class="lead">
                        It's free.
                        </p>
                    <form class="mb-3">
                        <div class="form-group ">
                            <label for="firstName">username:</label>
                            <Input onChange={handleUsername} name='username' type="text" class="form-control" placeholder="username" id="username"/>
                            {/* <input type="text" class="form-control" placeholder="username" id="firstName"/> */}
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <Input onChange={handleEmail} name='email' type="text" class="form-control" placeholder="email" id="email"/>

                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <Input onChange={handlePassword} name='password' type="text" class="form-control" placeholder="password" id="password"/>

                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-3">
                            Create account
                            </button>
                        {/* <div class="alert alert-info small" role="alert">
                                By clicking above you agree to our
                                <a href="#" class="alert-link">Terms &amp; Conditions</a> and
                                our <a href="#" class="alert-link">Privacy Policy</a>.
                            </div> */}
                        <div class="text-center">
                            <p>or ...</p>
                            <a href="#" class="btn btn-success">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;