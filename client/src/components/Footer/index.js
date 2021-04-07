import React from 'react';
import "./style.css";

function Footer () {

    return (
        <footer id="sticky-footer" className=" py-4 bg-dark text-white-50">
            <div className="container text-center">
            <small>Copyright &copy; <img src={`${process.env.PUBLIC_URL}/logo-wht.png`} width="75" height="25" alt="gainzz logo"/></small>

            </div>
        </footer>
    )
}

export default Footer;