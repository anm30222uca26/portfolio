import { useState, useEffect } from 'react';
import axios from 'axios';
import { personalInfo } from '../data/personal';

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || personalInfo.githubUsername;

function getHeaders() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`,
          { headers: getHeaders() }
        );
        setRepos(
          data
            .filter((r) => !r.fork)
            .map((r) => ({
              id: r.id,
              name: r.name,
              description: r.description,
              html_url: r.html_url,
              homepage: r.homepage,
              language: r.language,
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              topics: r.topics || [],
            }))
        );
      } catch (err) {
        setError(err.message || 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
