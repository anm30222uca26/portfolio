import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { personalInfo } from '../../data/personal';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <section id="contact" className="section-container bg-gray-100/50 dark:bg-dark-card/30">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project or opportunity? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <GlassCard>
          <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            {[
              { icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: HiLocationMarker, label: 'Location', value: personalInfo.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm hover:text-primary-500 transition">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-border">
            <p className="text-sm text-gray-500 mb-3">Connect with me</p>
            <div className="flex gap-3">
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
                  className="p-3 glass rounded-xl text-xl hover:text-primary-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {['name', 'email', 'subject'].map((field) => (
              <div key={field}>
                <input
                  {...register(field)}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-border border border-transparent focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>
                )}
              </div>
            ))}
            <div>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-border border border-transparent focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white rounded-xl font-medium transition shadow-lg shadow-primary-500/25"
            >
              Send Message
            </motion.button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
