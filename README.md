# Dhileepan M — Developer Portfolio

A modern, premium, fully responsive developer portfolio built with **React**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Features

- Animated hero with typing effect and GitHub profile image
- About, Skills, Featured Projects, and live GitHub repos (via API)
- GitHub statistics dashboard with contribution graph
- Education timeline, certifications, internship experience, achievements
- Contact form with validation (opens email client)
- Dark / light mode toggle
- Glassmorphism UI, smooth scrolling, mobile responsive
- SEO meta tags via react-helmet-async

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion
- React Icons
- React Hook Form + Zod
- Axios (GitHub API)

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Environment Variables

Copy `.env.example` to `.env`:

```env
VITE_GITHUB_USERNAME=anm30222uca26
VITE_GITHUB_TOKEN=          # optional, increases API rate limit
```

## Customize

Update your details in `src/data/`:

| File | Content |
|------|---------|
| `personal.js` | Name, email, phone, LinkedIn, resume link |
| `skills.js` | Skill categories and levels |
| `featuredProjects.js` | Highlighted projects |
| `experience.js` | Internships |
| `education.js` | Academic history |
| `certifications.js` | Certificates |
| `achievements.js` | Achievements |

Add your resume PDF to `public/resume.pdf`.

## Deployment

### Vercel (recommended)

```bash
npm run build
npx vercel
```

Set `VITE_GITHUB_USERNAME` in the Vercel dashboard.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

Add to `vite.config.js`:

```js
export default { base: '/portfolio/' }
```

Then:

```bash
npm run build
npx gh-pages -d dist
```

## GitHub Profile

[github.com/anm30222uca26](https://github.com/anm30222uca26)

## License

MIT
