import React from 'react';
import StatsPanel from '../components/StatsPanel';
import RecentIdeas from '../components/RecentIdeas';
import DevStatus from '../components/DevStatus';
import CTABox from '../components/CTABox';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-secondary">Welcome back! Here's what's happening in your citizen development program.</p>
      </div>
      
      <div className="dashboard-grid">
        <StatsPanel />
        <RecentIdeas />
        <DevStatus />
        <CTABox />
      </div>
    </div>
  );
}

export default Dashboard;
