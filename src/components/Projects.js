// src/components/Projects.js
import React, { useState } from 'react';
import Card from './Card';
import '../assets/styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { title: 'Project 1', description: 'Description of your project 1.', category: 'web' },
    { title: 'Project 2', description: 'Description of your project 2.', category: 'mobile' },
    { title: 'Project 3', description: 'Description of your project 3.', category: 'web' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('web')}>Web</button>
        <button onClick={() => setFilter('mobile')}>Mobile</button>
      </div>
      {filteredProjects.map((project, index) => (
        <Card key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default Projects;
