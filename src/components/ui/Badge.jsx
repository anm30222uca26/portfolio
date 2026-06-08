import { motion } from 'framer-motion';

export default function Badge({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 bg-primary-500/10 text-primary-500 dark:text-primary-400 rounded-full font-medium">
      {children}
    </span>
  );
}
