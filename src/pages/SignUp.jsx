import React from 'react';
import logo from "../assests/logo.png";
import hero from "../assests/hero.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup">
        <div className='signup-box'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="signup-container">
                <div className="signup-left">
                    <h2>Hello!</h2>
                    <div className="info">
                        <p>____________ Create your account ____________</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="email" placeholder='Email-id' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button>Sign Up</button>
                    </form>
                    <h3>OR</h3>
                    <div className="signup-options">
                        <h3>Sign Up with Google</h3>
                        <img src="" alt="Google-icon" />
                        <h3>Sign Up with Github</h3>
                        <img src="" alt="Github-icon" />
                    </div>
                    <h4>Already have an account <span>
                        <Link to="/login" >Login</Link>
                        </span></h4>
                </div>
                <div className="signup-right">
                    <img src={hero} alt="Hero" />
                </div>
            </div>
            <div className="signup-banner"></div>
        </div>
    </div>
  )
}

export default SignUp