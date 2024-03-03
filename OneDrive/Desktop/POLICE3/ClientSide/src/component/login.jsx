import axios from 'axios'
import { useState } from 'react'

const login = () => {
    const [badgeNumber, setBadgeNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlelogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/api/user', { badgeNumber, password });
            // Handle successful login (e.g., store token)
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during login.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form onSubmit={handlelogin}>
                    <div clasName='mb-3'>
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
    )
};

export default login;