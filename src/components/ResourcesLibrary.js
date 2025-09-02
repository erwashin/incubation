import React from 'react';
import './ResourcesLibrary.css';
import './Card.css'; // Import shared card style

function ResourcesLibrary() {
  const resources = [
    { name: 'Documentation', link: '#' },
    { name: 'Code Snippets', link: '#' },
    { name: 'Notebooks', link: '#' },
    { name: 'Templates', link: '#' },
    { name: 'Datasets', link: '#' },
  ];

  return (
    <section className="card">
      <h2>Resources Library</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link}>{resource.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResourcesLibrary;