import { FaTrophy } from 'react-icons/fa';
import { achievements } from '../../data/achievements';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <SectionHeading title="Achievements" subtitle="Milestones and accomplishments along my journey" />

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <GlassCard key={item.id} delay={i * 0.1}>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary-500/10 text-primary-500 text-2xl mb-4">
                <FaTrophy />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <span className="text-xs text-primary-500 font-medium">{item.date}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
