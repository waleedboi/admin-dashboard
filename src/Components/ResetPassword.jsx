import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // STEP 1
import '../CSS/ResetPassword.css';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // STEP 2

    const handleReset = () => {
        setSuccessMessage('✅ Password has been reset successfully!');

        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="reset-container">
            <div className="reset-box">
                <img src="/public/DELIVERMEE LOGO 1.svg" alt="Logo" />
                <h3>Reset Password <img src="/public/lock.png" className='lock' alt="Lock" /></h3>
                <p className="instruction">Your new password must be different from previously used passwords</p>

                <div className="form-group password-wrapper">
                    <label >New Password</label>
                    <div className="input-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter new password"
                            className="password-input"
                        />
                        <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                            {/* <img src="/eye.svg" alt="Toggle visibility" /> */}
                        </span>
                    </div>
                </div>

                <div className="form-group password-wrapper">
                    <label>Confirm Password</label>
                    <div className="input-container">
                        <input
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="Confirm new password"
                            className="password-input"
                        />
                        <span className="toggle-icon" onClick={() => setShowConfirm(!showConfirm)}>
                            {/* <img src="/eye.svg" alt="Toggle visibility" /> */}
                        </span>
                    </div>
                </div>

                <button className="reset-btn" onClick={handleReset}>Set New Password</button>
                {successMessage && <p className="success-message">{successMessage}</p>}

                <a href="/login" className="back-link">
                    <img src='/public/Linkhh.svg' alt="Back" />
                </a>
            </div>
        </div>
    );
};

export default ResetPassword;



