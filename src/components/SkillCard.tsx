
import { ReactNode } from 'react';
import SkillTag from './SkillTag';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
