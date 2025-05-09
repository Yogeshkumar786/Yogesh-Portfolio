
import { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  image: ReactNode;
  children?: ReactNode;
}

const ExperienceCard = ({ title, image, children }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
        {image}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ExperienceCard;
