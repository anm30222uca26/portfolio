import { useState, useEffect } from 'react';
import axios from 'axios';
import { personalInfo } from '../data/personal';

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || personalInfo.githubUsername;

function getHeaders() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function useGitHubStats() {
  const [stats, setStats] = useState(null);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = getHeaders();
        const [userRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${USERNAME}`, { headers }),
          axios.get(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { headers }),
        ]);

        const langMap = {};
        for (const repo of reposRes.data) {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
          }
        }

        setStats({
          followers: userRes.data.followers,
          following: userRes.data.following,
          publicRepos: userRes.data.public_repos,
          totalStars: reposRes.data.reduce((s, r) => s + r.stargazers_count, 0),
        });
        setLanguages(langMap);
      } catch (err) {
        setError(err.message || 'Failed to fetch GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, languages, loading, error };
}
