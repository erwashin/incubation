import React from 'react';
import StatusTracking from '../components/StatusTracking';
import Metrics from '../components/Metrics';

function Workspace() {
  return (
    <div className="workspace-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Workspace</h1>
        <p className="text-secondary">Manage your projects and track development progress.</p>
      </div>
      
      <div className="workspace-grid">
        <StatusTracking />
        <Metrics />
      </div>
    </div>
  );
}

export default Workspace;
