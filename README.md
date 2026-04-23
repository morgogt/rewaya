# Rewaya - Islamic Learning Platform

A modern, responsive landing page for Rewaya, a digital hub for authentic Islamic learning. Built with React, Vite, and TailwindCSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful animations and smooth interactions using Framer Motion
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized with Vite for fast builds and development
- **No External Auth**: Runs as a standalone marketing site with no Base44 or backend dependencies

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rewaya
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/Radix UI components
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── CoursesSection.jsx
│   ├── Testimonials.jsx
│   └── ...
├── pages/              # Page components
│   └── Home.jsx
├── lib/                # Utilities and context
│   ├── AuthContext.jsx # Local stub auth provider
│   └── utils.js
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Key Components

- **Navbar**: Navigation with smooth scrolling to sections
- **Hero Section**: Eye-catching landing hero with animations
- **Courses Section**: Showcases Quran, Tajweed, Hifz, and Islamic Studies programs
- **Testimonials**: Real student feedback and success stories
- **Contact Section**: Lead capture form
- **Footer**: Links and contact information

## Customization

### Colors

The app uses TailwindCSS with custom colors defined in `tailwind.config.js`. Key colors:
- Gold: Primary accent color (`#D4A853`)
- Juniper: Dark primary (`#141F18`)
- Ivory: Light text (`#F5F3EF`)

### Content

Edit component files in `src/components/` to customize:
- Course offerings
- Testimonials
- Contact information
- Navigation links

## Tech Stack

- **React** 18 - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Lucide Icons** - Icon library

## Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © Rewaya

## Support

For issues or questions, please create an issue in the repository.

