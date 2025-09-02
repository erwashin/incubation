import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Citizen Development Program</div>
      <div className="nav-tabs">
        <div className="nav-tab">Dashboard</div>
        <div className="nav-tab">Ideas</div>
        <div className="nav-tab">Workspace</div>
        <div className="nav-tab">Discovery</div>
        <div className="nav-tab">Resources</div>
        <div className="nav-tab">Analytics</div>
      </div>
      <div className="profile">
        https://i.pravatar.cc/32
        <span>John Doe</span>
      </div>
    </nav>
  );
}