import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Step2AccountDetails = ({ register, errors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="step-content">
            <h2 style={{ marginBottom: '1.5rem' }}>Account Details</h2>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={errors.email ? 'error' : ''}
                    {...register('email')}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className={errors.password ? 'error' : ''}
                        {...register('password')}
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-wrapper">
                    <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className={errors.confirmPassword ? 'error' : ''}
                        {...register('confirmPassword')}
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="error-message">{errors.confirmPassword.message}</p>
                )}
            </div>
        </div>
    );
};

export default Step2AccountDetails;
