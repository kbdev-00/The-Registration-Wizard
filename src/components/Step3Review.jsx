import React from 'react';

const Step3Review = ({ formData }) => {
    return (
        <div className="step-content">
            <h2 style={{ marginBottom: '1.5rem' }}>Review your details</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Please make sure everything is correct before submitting.
            </p>

            <div className="summary-card">
                <div className="summary-item">
                    <span className="summary-label">Full Name</span>
                    <span className="summary-value">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Date of Birth</span>
                    <span className="summary-value">{formData.dob}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Email</span>
                    <span className="summary-value">{formData.email}</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Password</span>
                    <span className="summary-value">••••••••</span>
                </div>
            </div>
        </div>
    );
};

export default Step3Review;
