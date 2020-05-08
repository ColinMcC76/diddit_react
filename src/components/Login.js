import React, { useState } from 'react';
import {
    Button,
    Input
} from 'reactstrap';

const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail = (email) => setEmail(email.target.value);
    const handlePassword = (password) => setPassword(password.target.value);

    const login = (e) => {
        console.log('login function')
        e.preventDefault();
        // axios call goes here
    }


    return (
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
                        <h1 class="my-3 text-center">Please log in</h1>
                        <form onSubmit={login} class="mb-3">
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <Input onChange={handleEmail} value={email} name='email' type="email" class="form-control" placeholder="example@email.com" id="email" required />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <Input onChange={handlePassword} value={password} name='password' type="password" class="form-control" id="password" required />
                            </div>
                            <Button type='submit'>Login</Button>
                        </form>
                        <div class="text-center">
                            <p>or..</p>
                            <p class="small"><a href="#">Have you forgotten your account details?</a></p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Login;