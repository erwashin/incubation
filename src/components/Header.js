import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Citizen Development Program</h1>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Ideas</li>
          <li>Workspace</li>
          <li>Discovery</li>
          <li>Resources</li>
          <li>Analytics</li>
        </ul>
      </nav>
      <div className="user-profile">John Doe</div>
    </header>
  );
}

export default Header;
