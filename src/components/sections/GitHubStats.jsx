import { FaGithub } from 'react-icons/fa';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function GitHubStats() {
  const { stats, languages, loading, error } = useGitHubStats();

  const topLangs = stats
    ? Object.entries(languages)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
    : [];

  const maxLangCount = topLangs.length > 0 ? topLangs[0][1] : 1;

  return (
    <section id="github-stats" className="section-container">
      <SectionHeading
        title="GitHub Statistics"
        subtitle="My open-source activity and contribution overview"
      />

      {loading && (
        <div className="grid md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass rounded-2xl p-6 h-24 animate-pulse bg-gray-200/50 dark:bg-dark-border/50" />
          ))}
        </div>
      )}

      {error && (
        <GlassCard className="text-center text-red-500">
          <FaGithub className="text-3xl mx-auto mb-2" />
          <p>Unable to load GitHub stats: {error}</p>
        </GlassCard>
      )}

      {!loading && !error && stats && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {[
              { label: 'Repositories', value: stats.publicRepos },
              { label: 'Followers', value: stats.followers },
              { label: 'Following', value: stats.following },
              { label: 'Total Stars', value: stats.totalStars },
            ].map(({ label, value }) => (
              <GlassCard key={label} className="text-center">
                <p className="text-3xl font-bold text-primary-500">{value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{label}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mb-8 overflow-hidden">
            <h3 className="font-display text-lg font-semibold mb-4">Contribution Graph</h3>
            <img
              src={`https://ghchart.rshah.org/${personalInfo.githubUsername}`}
              alt="GitHub contribution graph"
              className="w-full rounded-lg"
            />
          </GlassCard>

          <GlassCard>
            <h3 className="font-display text-lg font-semibold mb-4">Top Languages</h3>
            <div className="space-y-4">
              {topLangs.map(([lang, count]) => (
                <div key={lang} className="flex items-center gap-3">
                  <span className="w-24 text-sm font-medium shrink-0">{lang}</span>
                  <div className="flex-1 h-2.5 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-1000"
                      style={{ width: `${(count / maxLangCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8 text-right">{count}</span>
                </div>
              ))}
              {topLangs.length === 0 && (
                <p className="text-gray-500 text-sm">No language data available yet.</p>
              )}
            </div>
          </GlassCard>
        </>
      )}
    </section>
  );
}
