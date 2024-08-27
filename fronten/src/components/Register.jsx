// client/src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Make sure to include the CSS

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !username || !password) {
            setError('All fields are required.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { email, username, password });
            console.log(res.data);
            // Redirect or handle success
        } catch (err) {
            console.error(err);
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="Instagram"
                    className="logo"
                />
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Registering...' : 'Sign Up'}
                    </button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <a href="/">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
