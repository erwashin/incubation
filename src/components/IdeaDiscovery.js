import React, { useState } from 'react';
import './IdeaDiscovery.css';
import './Card.css'; // Import shared card style

function IdeaDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');

  const tags = ['ZebraAI', 'Agent', 'Nexus'];
  const trendingCategory = {
    name: 'Customer Experience',
    ideaCount: 15,
  };

  return (
    <section className="card">
      <h2>Idea Discovery</h2>
      <input
        type="text"
        placeholder="Search ideas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="tags">
        <strong>Tags:</strong> {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="trending">
        <strong>Trending Category:</strong> {trendingCategory.name} ({trendingCategory.ideaCount} ideas)
      </div>
    </section>
  );
}

export default IdeaDiscovery;