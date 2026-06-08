import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
