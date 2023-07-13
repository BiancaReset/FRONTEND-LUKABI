import React from 'react';
const Footer = (props) => {
    return (
<div className="Footer mt-5 p-5 bg-dark text-white text-center">
    <a className="navbar-brand" href="#">{props.footer}</a>

</div>    );
}

export default Footer;
