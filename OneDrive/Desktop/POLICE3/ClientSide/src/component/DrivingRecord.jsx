import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function DrivingRecord() {
    const [drivingRecords, setDrivingRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/drivingRecord/set')
            .then(res => {
                setDrivingRecords(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundImage: "url('./police3.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='card bg-white rounded p-3 w-50'>
                <div className='card-header'>
                    <h2>Driving Record</h2>
                </div>
                <div className='card-body'>
                    {drivingRecords.length > 0 ? (
                        <div className='row'>
                            {drivingRecords.map((record, index) => (
                                <div key={index} className='col-12'>
                                    <h5 className='text-primary'>ID: {record.id}</h5>
                                    <p>Date Of Offense: {record.dateOfOffense}</p>
                                    <p>Points Deducted: {record.pointsDeducted}</p>
                                    <p>Comments: {record.comments}</p>
                                    <p>Offense Logged At: {record.createdAt}</p>
                                    <p>Offense Updated At: {record.updatedAt}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No driving records found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DrivingRecord;
