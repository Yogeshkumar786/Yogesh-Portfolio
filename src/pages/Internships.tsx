
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft } from 'lucide-react';

const Internships = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/experience" className="inline-block mb-8 bg-portfolio-green text-white px-4 py-2 rounded-md hover:bg-portfolio-dark-green transition-colors">
        <div className="flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </div>
      </Link>
      
      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-gray-900 border-b pb-4">
        Internships
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Diesel Engine Analysis at ABR ROADLINES PVT.LTD.</h3>
          <p className="text-gray-500 mb-4">Dec 2023</p>
          <p className="text-gray-700">
            Worked on analyzing diesel engine performance and efficiency. Conducted tests and collected data to optimize engine operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
