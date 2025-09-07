import React from 'react';
import IdeaDiscovery from '../components/IdeaDiscovery';
import IdeaAdoption from '../components/IdeaAdoption';

function Ideas() {
  return (
    <div className="ideas-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Ideas</h1>
        <p className="text-secondary">Discover, submit, and track innovative ideas from your team.</p>
      </div>
      
      <div className="ideas-grid">
        <IdeaDiscovery />
        <IdeaAdoption />
      </div>
    </div>
  );
}

export default Ideas;
