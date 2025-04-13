import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await fetch('http://localhost:8034/api/employees');
        const data = await response.json();
        setEmployees(data);
    };

    const deleteEmployee = async (id) => {
        await fetch(`http://localhost:8034/api/employees/${id}`, { method: 'DELETE' });
        fetchEmployees();
    };

    const containerStyle = {
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    };

    const titleStyle = {
        fontSize: '28px',
        color: '#333',
        margin: 0
    };

    const buttonStyle = {
        padding: '10px 16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse'
    };

    const thTdStyle = {
        padding: '12px 16px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd'
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f7f7f7',
        fontWeight: 600,
        color: '#333'
    };

    const actionButtonStyle = {
        padding: '6px 12px',
        marginRight: '8px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        color: 'white',
        fontSize: '14px'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Employee List</h1>
                <Link to="/add" style={buttonStyle}>+ Add Employee</Link>
            </div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>First Name</th>
                        <th style={thStyle}>Last Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} style={{ transition: '0.2s', hover: { backgroundColor: '#f1f1f1' } }}>
                            <td style={thTdStyle}>{employee.firstName}</td>
                            <td style={thTdStyle}>{employee.lastName}</td>
                            <td style={thTdStyle}>{employee.email}</td>
                            <td style={thTdStyle}>
                                <Link
                                    to={`/edit/${employee.id}`}
                                    style={{ ...actionButtonStyle, backgroundColor: '#2196F3', textDecoration: 'none' }}
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteEmployee(employee.id)}
                                    style={{ ...actionButtonStyle, backgroundColor: '#f44336' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
