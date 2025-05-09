
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/experience" className="inline-block mb-8 bg-portfolio-green text-white px-4 py-2 rounded-md hover:bg-portfolio-dark-green transition-colors">
        <div className="flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </div>
      </Link>
      
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-gray-900 border-b pb-4">
        Positions & Achievements
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-4">Positions</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h4 className="text-xl font-semibold mb-2">Executive Member roles in CSE Association</h4>
            <p className="text-gray-700">
              Responsible for organizing technical events and workshops for computer science students.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">JS in I&E Cell</h4>
            <p className="text-gray-700">
              Junior Secretary in the Innovation & Entrepreneurship Cell, helping organize entrepreneurship events.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-4">Achievements</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">1st Position in VisionaThon (KONARK)</h4>
            <p className="text-gray-700">
              Won first place in the prestigious VisionaThon hackathon organized by KONARK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
