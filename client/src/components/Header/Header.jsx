import React from 'react';
import "./Header.css"

function Header(props) {
    return (
        <div>
            <header className='Header'>
                <div className="LogoSide">
                    Logo
                </div>
                <div className="MenuSide">
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Service</a>
                </div>
                <div className="ProfileSide">
                    <a href="">Login</a>
                    <a href="Registraion">Registration</a>
                    <a href="">Profile</a>
                </div>
            </header>
        </div>
    );
}

export default Header 