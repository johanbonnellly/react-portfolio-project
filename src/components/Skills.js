// src/components/Skills.js
import React from 'react';
import '../assets/styles/Skills.css';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  // Add more skills here
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill.name} - {skill.level}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
