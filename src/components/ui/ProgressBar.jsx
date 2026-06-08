import { motion } from 'framer-motion';

export default function ProgressBar({ label, value, icon: Icon }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="flex items-center gap-2 text-sm font-medium">
          {Icon && <Icon className="text-primary-500 text-lg" />}
          {label}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
        />
      </div>
    </div>
  );
}
