import { FaGraduationCap, FaBullseye, FaLightbulb, FaTrophy } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const aboutCards = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    content:
      'Pursuing B.Tech in Computer Science Engineering with focus on software development, IoT, and emerging technologies.',
  },
  {
    icon: FaBullseye,
    title: 'Career Objective',
    content:
      'Seeking opportunities in full stack development, IoT engineering, and software roles where I can apply my technical skills and grow as a developer.',
  },
  {
    icon: FaLightbulb,
    title: 'Technical Interests',
    content:
      'Web development, IoT systems, mobile applications, cloud computing, open source contribution, and building real-world solutions.',
  },
  {
    icon: FaTrophy,
    title: 'Achievements',
    content:
      'Completed GitHub Skills certification, Smart Internz program, and actively building projects showcased on GitHub.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        title="About Me"
        subtitle="A passionate CS student dedicated to building impactful software and IoT solutions"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {aboutCards.map((card, i) => (
          <GlassCard key={card.title} delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 text-xl shrink-0">
                <card.icon />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{card.content}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
