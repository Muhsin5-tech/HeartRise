import React from 'react';

function Header({ learnMore }) {
  return (
    <header>
      <div className="logo">
        <img
          src="/logo.png"
          alt="HeartRise Outreach Foundation Logo"
        />
      </div>
      <div className="header-content">
        <h1>HeartRise Outreach</h1>
        <p className="tagline">Together, we heal for a better tomorrow.</p>
        <button onClick={learnMore}>Learn More</button>
      </div>
    </header>
  );
}

export default Header;
