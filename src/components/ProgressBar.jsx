import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="progress-container">
            <div className="progress-bar-bg">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="step-indicator">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round(progress)}% Complete</span>
            </div>
        </div>
    );
};

export default ProgressBar;
