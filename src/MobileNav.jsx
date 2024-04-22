import React, { useState } from 'react';
import './mobile-nav.css'

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.documentElement.style.overflowY = isMobileNavOpen ? 'auto' : 'hidden';
  };

  function confirmDownload() {
    // Show a confirmation dialog
    if (window.confirm("Do you want to download the Resume?")) {
      // If user confirms, initiate the download
      var link = document.createElement("a");
      link.href = "./assets/rajResume.pdf";
      link.download = "rajResume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <div className="mobile-nav">
      <ul className="mobile-nav__menu">
        <li><a className="mobile-nav__link" href="#about">About</a></li>
        <li><a className="mobile-nav__link" href="#feature">Work</a></li>
        <li><a className="mobile-nav__link" href="#contact">Contact</a></li>
        <li><button
                  className="mobile-nav__resume btn"
                  onClick={() => confirmDownload()}
                >
                  Download Resume
                </button></li>
      </ul>
    </div>
  );
}

export default MobileNav;
