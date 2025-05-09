
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-gray-900">
      {children}
    </h2>
  );
};

export default SectionTitle;
