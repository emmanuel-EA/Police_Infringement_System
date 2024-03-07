import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Vehicle() {
    const [vehicleData, setVehicleData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.vehicle) {
            setVehicleData(location.state.vehicle);
        }
    }, [location]);

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundImage: "url('./police3.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='card bg-white rounded p-3 w-50'>
                <div className='card-header'>
                    <h2>Vehicle Details</h2>
                </div>
                <div className='card-body'>
                    {vehicleData && (
                        <div className='row'>
                            <div className='col-6'>
                                <h5 className='text-primary'>ID</h5>
                                <p>{vehicleData.id}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Plate Number</h5>
                                <p>{vehicleData.plateNumber}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Make</h5>
                                <p>{vehicleData.make}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Model</h5>
                                <p>{vehicleData.model}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Year</h5>
                                <p>{vehicleData.year}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Color</h5>
                                <p>{vehicleData.color}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>License Expiry</h5>
                                <p>{vehicleData.licenseExpiry}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Created At</h5>
                                <p>{vehicleData.createdAt}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Updated At</h5>
                                <p>{vehicleData.updatedAt}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className='card-footer'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <button onClick={() => navigate('/Owner', { state: { ownerId: vehicleData.ownerId } })} className='nav-link btn btn-primary'>Owner</button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => navigate('/DrivingRecord')} className='nav-link btn btn-primary'>Driving Record</button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => navigate('/Infringement')} className='nav-link btn btn-primary'>Create Infringement</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Vehicle;
