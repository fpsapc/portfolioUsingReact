import React, { useState } from 'react';

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log("clicked");
  };

  return (
    <header>
      <nav>
        <div className="logo">Your Name</div>
        <div className={`nav-links ${showLinks ? 'show' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleLinks}>
          <div className={`line ${showLinks ? 'line1' : ''}`}></div>
          <div className={`line ${showLinks ? 'line2' : ''}`}></div>
          <div className={`line ${showLinks ? 'line3' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
