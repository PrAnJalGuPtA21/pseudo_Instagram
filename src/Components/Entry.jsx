import React from 'react'
import './entry.css'

export default function Entry() {
    return (
        <div className="box">
            <div className="box-entry">
                <div className="login-page">
                    <div className="login-box">
                        <img
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                            alt="Instagram Logo"
                        />
                        <form>
                            <input type="text" placeholder="Phone number, username, or email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Log In</button>
                        </form>
                        <div className="or-divider">
                            <span>-------------------OR-----------------</span>
                        </div>
                        <span className="fb">Log in with Facebook</span>
                        <a href="#">Forgotten your password?</a>
                    </div>
                </div>
                <div className="sign-up">
                    <span className='signspan'> Don't have an account?<a href="#"> Sign Up</a></span>
                </div>
                <div className="get">
                    <span> Get the app </span>
                </div>
                <div className="images">
                    <div className="img1">
                        <img alt="Get it on Google Play" classname="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" />
                    </div>
                    <div className="img2">
                        <img alt="Get it from Microsoft" classname="_aa5q2" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" />
                    </div>
                </div>
            </div>
        </div >

    )
}
