import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import API from '../services/axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            login(response.data.token);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className='max-w-md mx-auto mt-10 p-4 shadow-md'>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full border mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full border mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login
