import React from 'react';

const SkillsSection = () => {
  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB',
    'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL'
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map(skill => (
          <div 
            key={skill}
            className="bg-card border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-sm font-medium">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
