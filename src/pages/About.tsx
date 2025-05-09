
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>About Me</SectionTitle>
      
      {/* Bio Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          As a bachelor's student, I am seeking a career in Computer Science and Engineering. I am passionate 
          about expanding my knowledge and developing a diverse set of multi-disciplinary skills relevant to the field. 
          With a motivated attitude & compatible nature, I am committed to excelling in the field & eager to 
          contribute to the computer science industry and help drive innovation forward.
        </p>
      </div>
      
      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap size={24} className="text-portfolio-green mr-2" />
          <h3 className="text-2xl font-playfair font-bold">Education</h3>
        </div>
        
        <div className="space-y-8">
          {/* Bachelors */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-portfolio-green">
            <h4 className="text-xl font-semibold">B.Tech. Computer Science and Engineering</h4>
            <p className="text-gray-600">National Institute of Technology, Andhra Pradesh</p>
            <p className="text-gray-500">2022 - 2026</p>
            <p className="mt-2 text-gray-700">
              Currently pursuing my bachelor's degree with focus on computer architecture, algorithms, and software engineering.
            </p>
          </div>
          
          {/* Intermediate */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-portfolio-green">
            <h4 className="text-xl font-semibold">Intermediate</h4>
            <p className="text-gray-600">H.D. Public School, Rohtak | Affiliated by C.B.S.E. Board</p>
            <p className="text-gray-500">2021 - 2022</p>
            <p className="mt-2 text-gray-700">
              Completed intermediate education with 81% marks, focusing on Mathematics, Physics, and Computer Science.
            </p>
          </div>
        </div>
      </div>

      {/* Languages Section (moved from Skills page) */}
      <div className="mb-12">
        <h3 className="text-2xl font-playfair font-bold mb-6">Languages</h3>
        
        <div className="space-y-6">
          {/* Hindi */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">Hindi</span>
              <span className="text-sm text-gray-500">Native</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-portfolio-green h-2.5 rounded-full w-[90%]"></div>
            </div>
          </div>
          
          {/* English */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">English</span>
              <span className="text-sm text-gray-500">Fluent</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-portfolio-green h-2.5 rounded-full w-[85%]"></div>
            </div>
          </div>
          
          {/* Punjabi */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">Punjabi</span>
              <span className="text-sm text-gray-500">Intermediate</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-portfolio-green h-2.5 rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hobbies Section */}
      <div>
        <div className="flex items-center mb-6">
          <BookOpen size={24} className="text-portfolio-green mr-2" />
          <h3 className="text-2xl font-playfair font-bold">Hobbies & Interests</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
            <h4 className="text-xl font-medium text-portfolio-green mb-2">Cooking</h4>
            <p className="text-gray-700">
              I enjoy experimenting with different cuisines and creating new recipes in my free time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
            <h4 className="text-xl font-medium text-portfolio-green mb-2">Travelling</h4>
            <p className="text-gray-700">
              Exploring new places, cultures, and cuisines is something I'm passionate about.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
            <h4 className="text-xl font-medium text-portfolio-green mb-2">Exploring Technologies</h4>
            <p className="text-gray-700">
              I love staying updated with the latest tech trends and experimenting with new frameworks and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
