
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { Code, Globe, Terminal, Cpu, Award } from 'lucide-react';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Skills</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Programming Languages */}
        <SkillCard 
          title="Programming Languages"
          icon={<Code size={24} className="text-portfolio-green" />}
          skills={['Java', 'C', 'C++', 'Python', 'JavaScript', 'SQL']}
        />

        {/* Web Development */}
        <SkillCard 
          title="Web & Frameworks"
          icon={<Globe size={24} className="text-portfolio-green" />}
          skills={['HTML', 'CSS', 'React.js', 'Express.js', 'MongoDB', 'Mongoose']}
        />

        {/* Hardware/Embedded */}
        <SkillCard 
          title="Hardware/Embedded"
          icon={<Cpu size={24} className="text-portfolio-green" />}
          skills={['Arduino', 'Raspberry Pi', 'IOT', 'Embedded Systems']}
        />

        {/* Tools & Concepts */}
        <SkillCard 
          title="Tools & Concepts"
          icon={<Terminal size={24} className="text-portfolio-green" />}
          skills={['Microsoft Excel', 'DSA', 'ML', 'UI/UX Design', 'DL', 'NLP', '3D Modeling', 'OS Algorithms']}
        />

        {/* Soft Skills */}
        <SkillCard 
          title="Soft Skills"
          icon={<Award size={24} className="text-portfolio-green" />}
          skills={['Leadership', 'Design Thinking', 'Decision Making', 'Project Management']}
        />
      </div>
    </div>
  );
};

export default Skills;
