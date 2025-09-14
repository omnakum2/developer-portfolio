# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional skills, projects, and services with a sleek dark theme design featuring mustard yellow accents.

## 🚀 Features

- **Modern Design**: Dark theme with charcoal background and mustard yellow accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Custom CSS animations and transitions for enhanced user experience
- **Interactive Navigation**: Smooth scrolling navigation with active section tracking
- **Portfolio Showcase**: Organized display of academic and company projects
- **Skills Display**: Visual representation of technical skills with proficiency levels
- **Contact Section**: Professional contact information and social links
- **TypeScript**: Full type safety and better development experience
- **Component-Based Architecture**: Modular React components for maintainability

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Icons** - Comprehensive icon library
- **React Router DOM** - Client-side routing

### Build Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Autoprefixer
- **Lovable Tagger** - Development component tagging

### Styling
- **Custom CSS Variables** - HSL color system for consistent theming
- **Tailwind Animate** - Animation utilities
- **Custom Animations** - Fade-in, glow, and float effects
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── AboutSection.tsx     # Personal bio and timeline
│   ├── ContactSection.tsx   # Contact information
│   ├── Footer.tsx           # Site footer
│   ├── HeroSection.tsx      # Landing section with profile
│   ├── Navigation.tsx       # Main navigation
│   ├── PortfolioSection.tsx # Project showcase
│   ├── ServicesSection.tsx  # Offered services
│   └── SkillsSection.tsx    # Technical skills display
├── data/
│   └── portfolio.json       # Portfolio data (personal info, projects, etc.)
├── pages/
│   └── NotFound.tsx         # 404 error page
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
├── index.css                # Global styles and CSS variables
└── vite-env.d.ts           # Vite type definitions
```

## 🎨 Design System

### Color Palette
- **Background**: Charcoal Black (`#0F172A`)
- **Primary**: Mustard Yellow (`#EAB308`)
- **Secondary**: Slate Gray (`#334155`)
- **Cards**: Dark Gray (`#1E293B`)
- **Text**: Light Gray (`#F8FAFC`)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code**: Fira Code (Monospace)

### Animations
- **Fade In**: Smooth entrance animations
- **Hover Effects**: Scale and lift on hover
- **Glow Effects**: Subtle glowing animations
- **Float**: Gentle floating animation for profile image

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

### Hero Section
- Profile image with floating animation
- Animated typewriter effect for titles
- Call-to-action buttons
- Smooth scroll indicators

### About Section
- Personal biography
- Professional timeline
- Quick stats cards
- Educational background

### Skills Section
- Primary expertise highlight
- Secondary skills with progress bars
- Additional technologies grid
- Visual skill level indicators

### Services Section
- Service offerings with descriptions
- Feature lists for each service
- Consultation call-to-action

### Portfolio Section
- Tabbed interface (Academic/Company projects)
- Project cards with images
- Tech stack tags
- Key features lists
- GitHub links

### Contact Section
- Contact information cards
- Social media links
- Availability status
- Professional contact details

## 🔧 Customization

### Updating Content
1. Edit `src/data/portfolio.json` to update personal information, projects, and skills
2. Replace profile images in the `public/` directory
3. Update project images as needed

### Styling Changes
1. Modify CSS variables in `src/index.css`
2. Update Tailwind configuration in `tailwind.config.ts`
3. Add custom animations in the CSS file

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Navigation.tsx`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The portfolio can be deployed to any static hosting service:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Simply run `npm run build` and upload the `dist/` folder contents.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with this portfolio template, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
