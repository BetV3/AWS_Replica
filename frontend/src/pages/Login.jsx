import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard'); //redirect to dashboard
        } catch (error) {
            setError(error.response.data.error || 'An error occurred');
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type='submit'>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <a href='/register'>Register</a>
        </div>
    );
};

export default Login;
