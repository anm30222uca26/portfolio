import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiMail, HiArrowDown } from 'react-icons/hi';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/personal';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingRoles);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="section-container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-500 font-medium mb-2">Hello, I&apos;m</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
            {personalInfo.role}
          </p>
          <p className="text-lg text-primary-500 h-8 mb-6 font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition shadow-lg shadow-primary-500/25"
            >
              Hire Me
            </motion.a>
            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass rounded-xl font-medium flex items-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition"
            >
              <FaDownload /> Resume
            </motion.a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: HiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass rounded-xl text-xl hover:text-primary-500 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary-500/30 animate-float shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary-500 transition"
      >
        <HiArrowDown className="text-2xl animate-bounce" />
      </motion.a>
    </section>
  );
}
