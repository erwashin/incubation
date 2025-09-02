import React from 'react';
import './ResourcesLibrary.css';

const resources = [
  'How-to Documentation',
  'Reusable Code Snippets',
  'Notebooks',
  );
}  'Templates',
  'Datasets'
];

export default function ResourcesLibrary() {
  return (
    <div className="resources-grid">
      {resources.map((r, i) => (
        <div className="resource-card" key={i}>{r}</div>
      ))}
    </div>
