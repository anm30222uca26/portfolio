import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <section id="projects" className="section-container bg-gray-100/50 dark:bg-dark-card/30">
      <SectionHeading
        title="GitHub Projects"
        subtitle="Repositories fetched live from my GitHub profile"
      />

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass rounded-2xl p-6 h-48 animate-pulse bg-gray-200/50 dark:bg-dark-border/50" />
          ))}
        </div>
      )}

      {error && (
        <GlassCard className="text-center text-red-500">
          <FaGithub className="text-3xl mx-auto mb-2" />
          <p>Unable to load repositories: {error}</p>
        </GlassCard>
      )}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <GlassCard key={repo.id} delay={i * 0.05}>
              <h3 className="font-display text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                {repo.description || 'No description available'}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && <Badge>{repo.language}</Badge>}
                {repo.topics.slice(0, 2).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:underline text-sm font-medium"
                >
                  View Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary-500 hover:underline text-sm font-medium"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </section>
  );
}
