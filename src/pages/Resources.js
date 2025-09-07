import React from 'react';
import ResourcesLibrary from '../components/ResourcesLibrary';

function Resources() {
  return (
    <div className="resources-page">
      <div className="page-header">
        <h1 className="text-3xl font-bold">Resources</h1>
        <p className="text-secondary">Access learning materials, templates, and development tools.</p>
      </div>
      
      <div className="resources-content">
        <ResourcesLibrary />
      </div>
    </div>
  );
}

export default Resources;
