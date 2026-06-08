import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '../../data/personal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © {year} {personalInfo.name}. Built with <FaHeart className="text-red-500" /> using React
          </p>
          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: personalInfo.github },
              { icon: FaLinkedin, href: personalInfo.linkedin },
              { icon: HiMail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
