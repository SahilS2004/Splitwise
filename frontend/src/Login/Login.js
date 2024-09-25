import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Verification.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
        <div className='login_page'>
            <div className='Background'>
            <p id="Blue">S</p><p id="LBlue">P</p><p id="LBlue">L</p><p id="LBlue">I</p><p id="LBlue">T</p>
            <div></div>
            <p id="Blue">W</p><p id="LBlue">I</p><p id="LBlue">S</p><p id="LBlue">E</p><p id='Blue'>.</p>
            </div>
            <div className='login_body'>
            <h2>Welcome Back To .</h2>
            <div className="logo"><span>Splitwise.</span></div>
            <form >
                <div className="input-group">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="input-group">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <i className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </i>
                </div>
                <button className="login-btn" type="submit">Login</button>
            </form>
            <p className="signup-text">Don't have an account? <a>Sign Up</a></p>
            </div>
            
        </div>
        <hr />
        <div className='handles_2'>
            <a href="https://github.com/SahilS2004/Splitwise" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='awe_2' /></a>
            <a href="https://www.instagram.com/sahil_s2004/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='awe_2' /></a>
            <a href="mailto:sahilsarawgi1239@gmail.com"><FontAwesomeIcon icon={faMailBulk} className='awe_2' /></a>
        </div>
        </>
    );
}