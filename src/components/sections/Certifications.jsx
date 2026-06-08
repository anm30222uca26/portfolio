import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container bg-gray-100/50 dark:bg-dark-card/30">
      <SectionHeading title="Certifications" subtitle="Professional certifications and credentials" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <GlassCard key={cert.id} delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 text-xl shrink-0">
                <FaCertificate />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{cert.issuer}</p>
                <p className="text-primary-500 text-sm font-medium mb-3">{cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-500 hover:underline font-medium"
                  >
                    View Credential <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
