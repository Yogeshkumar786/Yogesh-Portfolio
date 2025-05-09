
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft } from 'lucide-react';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/experience" className="inline-block mb-8 bg-portfolio-green text-white px-4 py-2 rounded-md hover:bg-portfolio-dark-green transition-colors">
        <div className="flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </div>
      </Link>
      
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-gray-900 border-b pb-4">
        Projects
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">SmartDrive-TCU (SIH 2023)</h3>
          <p className="text-gray-700 mb-4">Vehicle data analysis with ESP-32 and sensors</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Live Gas Analyzer</h3>
          <p className="text-gray-700 mb-4">Alerts when vehicle emissions exceed limits</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Digital-Ballot</h3>
          <p className="text-gray-700 mb-4">Online voting platform</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Mentor-Mentee Web App</h3>
          <p className="text-gray-700 mb-4">For student-faculty interaction</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">SIWART</h3>
          <p className="text-gray-700 mb-4">Hybrid wind and solar energy generator</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Phase-Change Containers</h3>
          <p className="text-gray-700 mb-4">Thermal stability for water in extreme cold</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
