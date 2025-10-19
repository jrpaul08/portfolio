# Data Scientist Portfolio

A modern, responsive React portfolio website designed specifically for data scientists. This portfolio showcases professional skills, projects, and technical expertise in a clean, minimalist design.

## Features

- **Hero Section**: Professional introduction with profile picture and call-to-action
- **About Section**: Personal background and professional journey
- **Proficiencies**: Six key skill areas with detailed descriptions
- **Featured Projects**: Showcase of data science projects with interactive dashboard preview
- **Tools & Technologies**: Visual display of technical stack and favorite tools
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional aesthetic with smooth animations

## Technologies Used

- React 18 with TypeScript
- CSS3 with modern features (Grid, Flexbox, Gradients)
- Responsive design principles
- Modern web standards

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization

### Personal Information
- Update the hero section with your name, title, and profile picture
- Modify the about section with your personal background
- Replace the featured project with your own work

### Styling
- Colors can be customized in the CSS files
- Fonts and spacing can be adjusted in the global styles
- Component-specific styles are in individual CSS files

### Content
- Update the proficiencies section with your specific skills
- Add your own projects to the projects section
- Modify the tools section with your technology stack

## Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── Hero.tsx & Hero.css
│   ├── About.tsx & About.css
│   ├── Proficiencies.tsx & Proficiencies.css
│   ├── Projects.tsx & Projects.css
│   └── Tools.tsx & Tools.css
├── App.tsx
├── App.css
└── index.tsx
```

## Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project for production:
```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).