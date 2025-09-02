import React from 'react';
import './DevStatus.css';

const projects = [
  { title: 'Escalation Redesign', sprint: 'Sprint 2 of 4', stage: 'Nexus', progress: 50 },
  { title: 'Scoping Agent', sprint: 'Sprint 1 of 6', stage: 'Agentic Service', progress: 20 }
];

export default function DevStatus() {
  return (
    <div>
      <h3>Development Status Tracking</h3>
      {projects.map((p, i) => (
        <div key={i}>
          <div><strong>{p.title}</strong> ({p.sprint}) - {p.stage}</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${p.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}