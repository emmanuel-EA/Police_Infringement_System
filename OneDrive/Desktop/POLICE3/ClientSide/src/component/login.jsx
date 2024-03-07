import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [badgeNumber, setBadgeNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/user/login', { badgeNumber, password })
            .then(res => {
                console.log(res);
                navigate('/Search');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.message || 'User not Found. Authorized Users Only');
            });
    };

    return (
        <div style={{
            backgroundImage: `url('./police1.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Adjust as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'bg-primary', // Ensure text is readable against the background
        }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="badgeNumber" ><strong>Badge Number</strong></label>
                        <input
                            type="text"
                            value={badgeNumber}
                            onChange={(e) => setBadgeNumber(e.target.value)}
                            placeholder='Enter Badge Number'
                            className='form-control rounded-0'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" ><strong>Password</strong></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Password'
                            className='form-control rounded-0'
                            required
                        />
                    </div>
                    <button className='btn btn-success w-100'>Log in</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
