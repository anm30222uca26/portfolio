import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-100/50 dark:bg-dark-card/30">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Technologies I work with and continue to learn"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <GlassCard key={category.title} delay={i * 0.1}>
            <h3 className="font-display text-xl font-semibold mb-6 text-primary-500">
              {category.title}
            </h3>
            {category.skills.map((skill) => (
              <ProgressBar
                key={skill.name}
                label={skill.name}
                value={skill.level}
                icon={skill.icon}
              />
            ))}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
