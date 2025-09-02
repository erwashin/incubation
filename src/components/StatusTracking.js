import React from 'react';
import './StatusTracking.css';
import './Card.css'; // Import shared card style

function StatusTracking() {
  const projects = [
    {
      name: 'Escalation Redesign',
      sprint: 'Sprint 2 of 4',
      team: 'Nexus',
      progress: 50,
    },
    {
      name: 'Scoping Agent',
      sprint: 'Sprint 1 of 6',
      team: 'Agentic Service',
      progress: 20,
    },
  ];

  return (
    <section className="card">
      <h2>Development Status Tracking</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-status">
          <div className="project-info">
            <strong>{project.name}</strong> – {project.sprint} – {project.team}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${project.progress}%` }}
            >
              {project.progress}%
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatusTracking;