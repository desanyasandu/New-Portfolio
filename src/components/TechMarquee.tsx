import React from 'react';

const row1 = [
  'React.js',
  'TypeScript',
  'JavaScript',
  'Spring Boot',
  'Java',
  'Python',
  'REST APIs',
  'Node.js',
  'Framer Motion'
];

const row2 = [
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Git & GitHub',
  'CI/CD',
  'Docker',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'Responsive Design'
];

const TechMarquee: React.FC = () => {
  // Double the arrays to create a seamless infinite loop
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <div className="marquee-container">
      {/* Row 1: Scrolling Left */}
      <div className="marquee-row marquee-row-left">
        {duplicatedRow1.map((tech, index) => (
          <div key={`row1-${tech}-${index}`} className="marquee-pill">
            {tech}
          </div>
        ))}
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="marquee-row marquee-row-right">
        {duplicatedRow2.map((tech, index) => (
          <div key={`row2-${tech}-${index}`} className="marquee-pill" style={{ borderColor: 'rgba(34, 211, 238, 0.15)' }}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
