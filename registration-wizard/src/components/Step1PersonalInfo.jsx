import React from 'react';

const Step1PersonalInfo = ({ register, errors }) => {
    return (
        <div className="step-content">
            <h2 style={{ marginBottom: '1.5rem' }}>Personal Information</h2>

            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className={errors.firstName ? 'error' : ''}
                    {...register('firstName')}
                />
                {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className={errors.lastName ? 'error' : ''}
                    {...register('lastName')}
                />
                {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    id="dob"
                    type="date"
                    className={errors.dob ? 'error' : ''}
                    {...register('dob')}
                />
                {errors.dob && <p className="error-message">{errors.dob.message}</p>}
            </div>
        </div>
    );
};

export default Step1PersonalInfo;
