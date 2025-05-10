import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-portfolio-green hover:underline">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-900">Yogesh Kumar</h1>
          <p className="text-gray-600 mt-2">Computer Science Engineer</p>
          <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-700">
            <span>422275@student.nitandhra.ac.in</span>
            <span>•</span>
            <span>+91 9306000458</span>
            <span>•</span>
            <span>Rohtak, Haryana, India</span>
          </div>
        </div>
        
        <hr className="my-6" />
        
        {/* Objective */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Objective</h2>
          <p className="text-gray-700">
            As a bachelor’s student, I am seeking a career in Computer Science and Engineering. I am passionate 
            about expanding my knowledge and developing a diverse set of multi-disciplinary skills relevant to the field. 
            With a motivated attitude & compatible nature, I am committed to excelling in the field & eager to 
            contribute to the computer science industry and help drive innovation forward.
          </p>
        </div>
        
        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Education</h2>
          
          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">B.Tech. Computer Science and Engineering</h3>
              <span className="text-gray-600">2022 - 2026</span>
            </div>
            <p className="text-gray-700">National Institute of Technology, Andhra Pradesh</p>
          </div>
          
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">Intermediate - 81%</h3>
              <span className="text-gray-600">2021 - 2022</span>
            </div>
            <p className="text-gray-700">H.D. Public School, Rohtak | C.B.S.E. Board</p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <p className="text-gray-700">Java, C, C++, Python, JavaScript, SQL</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Web Development</h3>
              <p className="text-gray-700">HTML, CSS, React.js, Express.js, MongoDB, Mongoose</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Hardware/Embedded</h3>
              <p className="text-gray-700">Arduino, Raspberry Pi, IOT, Embedded Systems</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Tools & Concepts</h3>
              <p className="text-gray-700">
                Microsoft Excel, DSA, ML, Deep Learning, UI/UX Design, Operating System Algorithms, 
                Design Thinking, Problem Solving, 3D Modelling
              </p>
            </div>
          </div>
        </div>
        
        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Projects</h2>
          
          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">SmartDrive - Telematic Control Unit</h3>
              <span className="text-gray-600">2023</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Developed an automatic analysing system using ESP-32 and sensors</li>
              <li>Sensors captured vehicle data which was uploaded to a custom database</li>
              <li>Project was built for SIH 2023</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Live Gas Analyzer</h3>
              <span className="text-gray-600">2023</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Device alerts when vehicle gas emissions exceed safe limits</li>
              <li>Built as part of innovation competition (VisionaThon)</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Digital-Ballot</h3>
              <span className="text-gray-600">2022</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Online voting website with authentication system</li>
              <li>Designed secure and accessible web interface</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Mentor-Mentee Web Application</h3>
              <span className="text-gray-600">2023</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Connects students with faculty for academic interaction</li>
              <li>Students can post queries and receive mentorship</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Smart Home Automation System</h3>
              <span className="text-gray-600">2023</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Developed IoT-based home automation using Arduino and Raspberry Pi</li>
              <li>Created mobile app interface for remote control</li>
              <li>Implemented voice command functionality</li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">E-Commerce Platform</h3>
              <span className="text-gray-600">2022</span>
            </div>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Built full-stack e-commerce site with React and Node.js</li>
              <li>Implemented secure payment gateway integration</li>
              <li>Designed database schema for product management</li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Internship</h2>
          <div className="flex justify-between">
            <h3 className="font-medium">Diesel Engine Analysis - ABR ROADLINES PVT. LTD.</h3>
            <span className="text-gray-600">Dec 2023</span>
          </div>
          <p className="text-gray-700 pl-5 mt-1">Performed engine diagnostics and operational efficiency analysis on heavy-duty diesel engines.</p>
        </div>

        {/* Positions of Responsibility */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Positions of Responsibility</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Executive Member, CSE Association – Managed and organized departmental events.</li>
            <li>Executive Member, Innovation and Entrepreneurship Cell – Organized college events and promotional campaigns.</li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-portfolio-green border-b pb-1">Languages</h2>
          <p className="text-gray-700">Hindi (Native), English (Professional), Punjabi (Limited)</p>
        </div>
        
        <div className="mt-10 text-center">
          <Button onClick={() => window.print()}>Download Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
