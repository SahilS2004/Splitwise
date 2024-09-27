import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMailBulk, faRightToBracket, faUserPlus, faSignOutAlt, faFlagCheckered, faMoneyBills} from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from 'react-router-dom';
import coderImage from './coder.png';
import splitLogo from './splitwise.png';
import { faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
// import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';


export default function Home() {
    // const [loggedInUser, setLoggedInUser] = useState(null); 
    // const navigate = useNavigate();
    // const auth = getAuth();
    
    //   useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setLoggedInUser(user);
    //         } else {
    //             setLoggedInUser(null);
    //         }
    //     });
    //     return () => unsubscribe();
    // }, [auth]);

    // const handleLogout = () => {
    //     signOut(auth)
    //         .then(() => {
    //             alert('Logout successful!');
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             console.error("Error logging out: ", error);
    //         });
    // };


  return (
    <div>
        <div class="navbar_2" fit>
        <h2><img src={splitLogo} alt='LogoSplitwise'/>  Splitwise.</h2>
        <div>
        {/* {loggedInUser ? (
            <>
              <span>Welcome,  <FontAwesomeIcon icon={faFlagCheckered}/>  User</span>
              <button className='login_logout'><FontAwesomeIcon icon={faSignOutAlt}/>Logout</button>
            </>
          ) : ( */}
            {/* <> */}
        {/* <Link to='/login'> */}
            <button className="login_logout" ><FontAwesomeIcon icon={faRightToBracket} />    Login</button>
        {/* </Link> */}
        {/* <Link to='/signup'> */}
            <button className="sign_up" ><FontAwesomeIcon icon={faUserPlus} />   Sign up</button>
        {/* </Link> */}
            {/* </>
          )} */}
        </div>
        </div>
        <div className='body_home'>
            <div className='codePenHed'>
              <p id="Blue">S</p><p id="LBlue">P</p><p id="LBlue">L</p><p id="LBlue">I</p><p id="LBlue">T</p>
              <div></div>
              <p id="Blue">W</p><p id="LBlue">I</p><p id="LBlue">S</p><p id="LBlue">E</p><p id='Blue'>.</p>
            </div>
            {/* <Link to='/code_editor'> */}
                <div className='image_pro'>
                    <img src={coderImage} alt="Project" />
                </div>
            {/* </Link> */}

        </div>
        <hr class="line"/>
        <div className="about">
            <h1>About :. </h1>
            <div>
            <p>This project is a feature-rich code editor designed for web developers to experiment with HTML, CSS, and JavaScript in real-time. Here’s what you can expect:</p>
            <ul>
                <li>HTML, CSS, and JavaScript Code Spaces: Write and execute your code for each language separately in dedicated spaces.</li>
                <li>Mobile Responsive: The interface adapts seamlessly to mobile devices, allowing for on-the-go coding.</li>
                <li>Live Interactive UI: View your code changes reflected in real-time in the live preview section.</li>
                <li>Expandable Code and Live Preview Space: Need more room? Both the code spaces and live preview area are expandable to suit your workflow.</li>
                <li>Reset to Default Code: Easily revert any changes and go back to the default code setup with a single click.</li>
                <li>Code Trashing Feature: Clean up your workspace by trashing unwanted code with ease.</li>
            </ul>
            </div>
        </div>
        <hr/>
        <div className='handles'>
            <a href="https://github.com/SahilS2004/Splitwise" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='awe' /></a>
            <a href="https://www.instagram.com/sahil_s2004/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='awe' /></a>
            <a href="mailto:sahilsarawgi1239@gmail.com"><FontAwesomeIcon icon={faMailBulk}  className='awe'/></a>
        </div>
    </div>
  )
}