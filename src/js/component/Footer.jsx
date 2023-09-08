import React from 'react';
const Footer = (props) => {
    return (
<nav className="navbar fixed-bottom custom-navbar w-50 p-3 Width 50%">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.footer}</a>
  </div>
</nav>
    )
}
export default Footer;

