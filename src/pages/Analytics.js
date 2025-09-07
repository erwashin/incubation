import React from 'react';
import Leaderboard from '../components/Leaderboard';
import Metrics from '../components/Metrics';

function Analytics() {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-secondary">Track performance metrics and team engagement.</p>
      </div>
      
      <div className="analytics-grid">
        <Metrics />
        <Leaderboard />
      </div>
    </div>
  );
}

export default Analytics;
