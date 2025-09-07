import React from 'react';
import './DashboardLayout.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-container">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
