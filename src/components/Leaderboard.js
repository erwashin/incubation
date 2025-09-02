import React from 'react';
import './Leaderboard.css';

const topIdeas = [
  { title: 'SAP Prediction', points: 112 },
  { title: 'Escalation Redesign', points: 101 },
  { title: 'Transcript Analysis', points: 90 },
  { title: 'Log Analytics', points: 61 },
  { title: 'Transfer Root Cause', points: 56 }
];

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      {topIdeas.map((idea, i) => (
        <div className="leaderboard-item" key={i}>
          <span>{idea.title}</span>
          <span className="points">{idea.points}</span>
        </div>
      ))}
    </div>
  );
}