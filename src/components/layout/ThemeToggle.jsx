import { useTheme } from '../../context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-xl glass hover:bg-white/80 dark:hover:bg-white/10 transition"
    >
      {theme === 'dark' ? <HiSun className="text-xl text-yellow-400" /> : <HiMoon className="text-xl text-primary-600" />}
    </button>
  );
}
