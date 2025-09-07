import React from 'react';
import IdeaDiscovery from '../components/IdeaDiscovery';

function Discovery() {
  return (
    <div className="discovery-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Discovery</h1>
        <p className="text-secondary">Explore new ideas and trending topics in citizen development.</p>
      </div>
      
      <div className="discovery-content">
        <IdeaDiscovery />
      </div>
    </div>
  );
}

export default Discovery;
