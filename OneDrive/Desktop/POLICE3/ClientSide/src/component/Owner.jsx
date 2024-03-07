import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Owner() {
    const [ownerData, setOwnerData] = useState({});
    const location = useLocation();

    useEffect(() => {
        // Check if owner data was passed from the SearchPage component
        if (location.state && location.state.owner) {
            setOwnerData(location.state.owner);
        }
    }, [location]);

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundImage: "url('./police3.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='card bg-white rounded p-3 w-50'>
                <div className='card-header'>
                    <h2>Owner Details</h2>
                </div>
                <div className='card-body'>
                    {ownerData && (
                        <div className='row'>
                            <div className='col-6'>
                                <h5 className='text-primary'>ID</h5>
                                <p>{ownerData.id}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>First Name</h5>
                                <p>{ownerData.FirstName}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Last Name</h5>
                                <p>{ownerData.LastName}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>License Number</h5>
                                <p>{ownerData.LicenseNumber}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Date Of Birth</h5>
                                <p>{ownerData.DateOfBirth}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Height</h5>
                                <p>{ownerData.Height}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Address</h5>
                                <p>{ownerData.Address}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Demerit Points</h5>
                                <p>{ownerData.DemeritPoints}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Owner Created</h5>
                                <p>{ownerData.createdAt}</p>
                            </div>
                            <div className='col-6'>
                                <h5 className='text-primary'>Owner Updated</h5>
                                <p>{ownerData.updatedAt}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Owner;