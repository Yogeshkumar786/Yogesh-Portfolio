
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>Experience</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Internships Card */}
        <Link to="/internships" className="block no-underline">
          <ExperienceCard 
            title="Internships" 
            image={<img src="./images/internship.png" alt="Internships" className="w-full h-full object-cover" />}
          >
          </ExperienceCard>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="block no-underline">
          <ExperienceCard 
            title="Projects" 
            image={<img src="./images/projects.png" alt="Projects" className="w-full h-full object-cover" />}
          >
          </ExperienceCard>
        </Link>

        {/* Positions Card */}
        <Link to="/achievements" className="block no-underline">
          <ExperienceCard 
            title="Positions/Achievements" 
            image={<img src="./images/positions-achievements.png" alt="Projects" className="w-full h-full object-cover" />}
          >
          </ExperienceCard>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
