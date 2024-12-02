import React from 'react';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    const profileContainerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const profileItemStyle = {
        marginBottom: '10px',
    };

    const strongStyle = {
        marginRight: '8px',
        fontWeight: 'bold',
    };

    return (
        <div style={profileContainerStyle}>
            <h2>Admin Profile</h2>
            <div style={{ marginTop: '20px' }}>
                <div style={profileItemStyle}>
                    <strong style={strongStyle}>Name:</strong> {currentUser.name}
                </div>
                <div style={profileItemStyle}>
                    <strong style={strongStyle}>Email:</strong> {currentUser.email}
                </div>
                <div style={profileItemStyle}>
                    <strong style={strongStyle}>School:</strong> {currentUser.schoolName}
                </div>
                {/* Add more profile details as needed */}
            </div>
        </div>
    );
};

export default AdminProfile;
