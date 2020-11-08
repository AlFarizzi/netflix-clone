import React from 'react';
import './Navbar.css';
import {useState,useEffect} from 'react';

function Navbar() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400) {
                document.getElementById('navbar').classList.add('navbar_black');
            } else {
                document.getElementById('navbar').classList.remove('navbar_black');
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);
    return (
        <div className="navbar" id="navbar">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo"
            className="nav_logo"/>
        </div>
    );
}

export default Navbar;