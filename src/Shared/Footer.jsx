import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-400 text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Cooking</a>
    <a className="link link-hover">Recipes</a>
    <a className="link link-hover">Delivery</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;