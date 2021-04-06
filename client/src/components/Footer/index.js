import React from 'react';
import "./style.css";
import image from '../../../public/logo-wht.png'

function Footer () {

    return (
        <footer id="sticky-footer" className=" py-4 bg-dark text-white-50">
            <div className="container text-center">
            <small>Copyright &copy; <img src={image} width="75" height="25" alt="gainzz logo"/></small>

            </div>
        </footer>
    )
}

export default Footer;