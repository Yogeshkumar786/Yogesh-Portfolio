
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="./images/myself.png"  
                  alt="Yogesh Kumar" 
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 text-center text-sm text-gray-700">
                  Driven to innovate with real-world engineering solutions
                </div>
              </div>
            </div>
            <div className="order-2 md:order-2">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6 text-gray-900">
                Hi, I'm Yogesh Kumar – <span className="text-portfolio-green">Computer Science Engineer</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                passionate about innovation, problem-solving, and technology
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/resume">View Resume</Button>
                <Button href="/contact" variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
