# CardioCare - Cardiac Healthcare Website

A modern, animated landing page for a cardiac healthcare service built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Splash Screen**: Heartbeat animation splash screen (5-6 seconds)
- 🎨 **Modern UI**: Clean, professional design matching the healthcare theme
- 🎭 **Smooth Animations**: Framer Motion animations throughout the site
- 📱 **Responsive Design**: Fully responsive across all devices
- 🔍 **SEO Optimized**: Complete SEO setup with structured data, meta tags, and Open Graph
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 🎯 **Component-Based**: All components are separated for easy maintenance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header component
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Statistics.tsx      # Statistics/features section
│   ├── SplashScreen.tsx    # Splash screen with heartbeat
│   └── StructuredData.tsx  # SEO structured data
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Components

### SplashScreen
- Heartbeat animation using Framer Motion
- 5-6 second display duration
- Smooth fade-out transition

### Header
- Fixed navigation bar
- Responsive menu
- Dropdown for "More" section
- Sign In/Sign Up buttons

### Hero
- Animated headline and description
- Call-to-action buttons
- Doctors image with overlay cards
- Decorative animated shapes

### Statistics
- Three feature cards
- Hover animations
- Scroll-triggered animations

## SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for:
  - Medical Organization
  - WebSite
  - Medical Service
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Semantic HTML

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary Teal: `#14B8A6`
- Primary Green: `#86EFAC`
- Secondary Gray: `#1F2937`

### Content
- Update text content in respective component files
- Replace images in the Hero component
- Modify statistics in `Statistics.tsx`

### SEO
- Update metadata in `app/layout.tsx`
- Modify structured data in `components/StructuredData.tsx`
- Update `public/robots.txt` with your domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for client use in the healthcare sector.

## Support

For issues or questions, please contact the development team.

