import React from 'react';
import './IdeaAdoption.css';
import './Card.css'; // Import shared card style

function IdeaAdoption() {
  return (
    <section className="card">
      <h2>Ideas Adoption</h2>
      <p>Pick a new idea or join a co-development project.</p>
      <button className="adopt-button">Adopt Ideas</button>
    </section>
  );
}

export default IdeaAdoption;