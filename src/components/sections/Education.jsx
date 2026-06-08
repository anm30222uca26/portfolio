import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/education';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading title="Education" subtitle="My academic journey and qualifications" />

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-500/30 hidden md:block" />

        <div className="space-y-8">
          {education.map((item, i) => (
            <GlassCard key={item.id} delay={i * 0.1} className="md:ml-12 relative">
              <div className="absolute -left-12 top-8 hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-primary-500 text-white">
                <FaGraduationCap />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-xl font-semibold">{item.degree}</h3>
                <span className="text-sm text-primary-500 font-medium">{item.duration}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">{item.institution}</p>
              <p className="text-sm text-primary-500 mb-2">CGPA: {item.cgpa}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
