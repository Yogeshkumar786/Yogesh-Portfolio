
import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
}

const SkillTag = ({ children }: SkillTagProps) => {
  return (
    <span className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-lg transition-colors m-1">
      {children}
    </span>
  );
};

export default SkillTag;
