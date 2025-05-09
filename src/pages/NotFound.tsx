
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-portfolio-green mb-4">404</h1>
        <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-900">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center text-portfolio-green hover:underline font-medium text-lg">
          <ArrowLeft size={18} className="mr-2" /> Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
