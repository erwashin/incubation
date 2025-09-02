import React from 'react';
import './RecentIdeas.css';

const ideas = [
  { title: 'AI-Powered Customer Support', status: 'Under Review', time: '2 days ago' },
  { title: 'SAP Prediction', status: 'Adopted', time: '5 days ago' },
  { title: 'Predictive Trend Analysis', status: 'In Development', time: '1 week ago' }
];

export default function RecentIdeas() {
  return (
    <div className="idea-list">
      {ideas.map((idea, i) => (
        <div className="idea-item" key={i}>
          <div>
            <strong>{idea.title}</strong>
            <div>{idea.time}</div>
          </div>
          <span className="status-badge">{idea.status}</span>
        </div>
      ))}
    </div>
  );
}