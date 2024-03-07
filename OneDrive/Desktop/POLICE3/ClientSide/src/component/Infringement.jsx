import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Infringement() {
    const [values, setValues] = useState({
        badgeNumber: '',
        plateNumber: '',
        ownerid: '',
        date: '',
        offense: '',
        pointsDeducted: '',
        createdAt: '',
        updatedAt: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/infringement/create', values)
            .then(res => {
                console.log(res);
                // Show alert and navigate back to login
                window.alert('Infringement has been created successfully!');
                navigate('/'); // Assuming '/login' is the route to your login page
            })
            .catch(err => console.log(err));
    };
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundImage: "url('./police3.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Create Infringement</h2>
                    <div className='mb-3'>
                        <label htmlFor="">Badge Number</label>
                        <input type='text' placeholder='Enter Badge Number of Officer' className='form-control'
                            onChange={e => setValues({ ...values, badgeNumber: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Vehicle Plate Number</label>
                        <input type='text' placeholder='Enter Plate Number' className='form-control'
                            onChange={e => setValues({ ...values, PlateNumber: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Owner ID</label>
                        <input type='int' placeholder='Enter Owner ID' className='form-control'
                            onChange={e => setValues({ ...values, ownerid: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Date</label>
                        <input type='date' placeholder='Enter Date of Offense' className='form-control'
                            onChange={e => setValues({ ...values, date: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Offense</label>
                        <input type='text' placeholder='Enter Offense' className='form-control'
                            onChange={e => setValues({ ...values, offense: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Points Deductible</label>
                        <input type='int' placeholder='Enter Deductable Points' className='form-control'
                            onChange={e => setValues({ ...values, pointsDeducted: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Offense Creation Date</label>
                        <input type='date' placeholder='Enter Date of Entry' className='form-control'
                            onChange={e => setValues({ ...values, createdAt: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Offense Updation Date</label>
                        <input type='date' placeholder='Enter Date of Update' className='form-control'
                            onChange={e => setValues({ ...values, updatedAt: e.target.value })} />
                    </div>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Infringement;