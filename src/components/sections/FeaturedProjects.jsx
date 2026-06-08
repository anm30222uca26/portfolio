import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects } from '../../data/featuredProjects';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';

export default function FeaturedProjects() {
  return (
    <section id="featured" className="section-container">
      <SectionHeading
        title="Featured Projects"
        subtitle="Highlighted projects showcasing my development skills"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, i) => (
          <GlassCard key={project.id} delay={i * 0.1} className="overflow-hidden p-0">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <ul className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-primary-500 hover:underline font-medium"
                >
                  <FaGithub /> Code
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-sm text-primary-500 hover:underline font-medium"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
