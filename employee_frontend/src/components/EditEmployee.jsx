import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        const response = await fetch(`http://localhost:8034/api/employees/${id}`);
        const data = await response.json();
        setEmployee(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:8034/api/employees/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        });
        navigate('/');
    };

    const containerStyle = {
        maxWidth: '500px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontWeight: '500',
        color: '#555',
        fontSize: '15px'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '15px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2196F3',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>First Name:</label>
                <input
                    type="text"
                    value={employee.firstName}
                    onChange={e => setEmployee({ ...employee, firstName: e.target.value })}
                    style={inputStyle}
                    required
                />

                <label style={labelStyle}>Last Name:</label>
                <input
                    type="text"
                    value={employee.lastName}
                    onChange={e => setEmployee({ ...employee, lastName: e.target.value })}
                    style={inputStyle}
                    required
                />

                <label style={labelStyle}>Email:</label>
                <input
                    type="email"
                    value={employee.email}
                    onChange={e => setEmployee({ ...employee, email: e.target.value })}
                    style={inputStyle}
                    required
                />

                <button type="submit" style={buttonStyle}>Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
