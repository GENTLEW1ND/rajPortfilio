import React, { useState } from 'react';
import './mobile-nav.css'

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.documentElement.style.overflowY = isMobileNavOpen ? 'auto' : 'hidden';
  };

  return (
    <div className="mobile-nav">
      <ul className="mobile-nav__menu">
        <li><a className="mobile-nav__link" href="#about">About</a></li>
        <li><a className="mobile-nav__link" href="#feature">Work</a></li>
        <li><a className="mobile-nav__link" href="#contact">Contact</a></li>
        <li><a className="mobile-nav__link" href="#">Resume</a></li>
      </ul>
    </div>
  );
}

export default MobileNav;
