
import SectionTitle from '../components/SectionTitle';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Contact Me</SectionTitle>
      
      <div className="max-w-2xl mx-auto">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-700 mb-8">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-portfolio-green bg-opacity-10 p-3 rounded-full mr-4">
                <Mail size={20} className="text-portfolio-green" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Email</h4>
                <a href="mailto:yogeshkumarmaliksinghjat200@gmail.com" className="text-gray-700 hover:text-portfolio-green">
                  yogeshkumarmaliksinghjat200@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-portfolio-green bg-opacity-10 p-3 rounded-full mr-4">
                <Phone size={20} className="text-portfolio-green" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Phone</h4>
                <a href="tel:+919306000458" className="text-gray-700 hover:text-portfolio-green">
                  +91 9306000458
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-portfolio-green bg-opacity-10 p-3 rounded-full mr-4">
                <MapPin size={20} className="text-portfolio-green" />
              </div>
              <div>
                {/* <h4 className="font-medium text-lg">Location</h4>
                <p className="text-gray-700">Ambala, Haryana, India</p> */}
                <h4 className="font-medium text-lg">Location</h4>
                <a
                  href="https://www.google.com/maps/place/Ambala,+Haryana,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 underline hover:text-blue-600"
                >
                  Ambala, Haryana, India
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
