import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('plateNumber'); // 'plateNumber' or 'ownerName'
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');

        try {
            let requestBody;
            if (searchType === 'plateNumber') {
                requestBody = { plateNumber: searchInput };
            } else if (searchType === 'ownerName') {
                const [firstName, lastName] = searchInput.split(' ');
                requestBody = { FirstName: firstName, LastName: lastName };
            }

            const url = searchType === 'plateNumber' ? 'http://localhost:3000/api/vehicle/search' : 'http://localhost:3000/api/owner/details';
            const response = await axios.post(url, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.vehicle) {
                navigate('/Vehicle', { state: { vehicle: response.data.vehicle } });
            } else if (response.data.owner) {
                navigate('/Owner', { state: { owner: response.data.owner } });
            } else {
                setError('No vehicle or owner found with the provided information.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Please Input using the correct Format');
        }
    };

    return (
        <div style={{
            backgroundImage: `url('./police2.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Adjust as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'bg-primary', // Ensure text is readable against the background
        }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Search for Vehicle or Owner</h2>
                <form onSubmit={handleSearch}>
                    <div className='mb-3'>
                        <label className='d-flex align-items-center'>
                            <input
                                type="radio"
                                value="plateNumber"
                                checked={searchType === 'plateNumber'}
                                onChange={() => setSearchType('plateNumber')}
                            />
                            Plate Number
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="ownerName"
                                checked={searchType === 'ownerName'}
                                onChange={() => setSearchType('ownerName')}
                            />
                            Owner Name
                        </label>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder={searchType === 'plateNumber' ? 'Enter Plate Number' : 'Enter Owner First and Last Name'}
                            className='form-control rounded-0'
                            required
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Search</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default SearchPage;
