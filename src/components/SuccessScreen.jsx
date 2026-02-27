import React from 'react';
import { Check } from 'lucide-react';

const SuccessScreen = ({ onReset }) => {
    return (
        <div className="success-screen">
            <div className="success-icon">
                <Check size={32} />
            </div>
            <h1>Success!</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                Your account has been created successfully. Welcome aboard!
            </p>
            <button
                className="btn btn-primary"
                style={{ marginTop: '2rem', width: '100%' }}
                onClick={onReset}
            >
                Create Another Account
            </button>
        </div>
    );
};

export default SuccessScreen;
