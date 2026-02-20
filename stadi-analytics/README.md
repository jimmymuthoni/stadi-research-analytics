# Stadi Research & Analytics - Enterprise Website

A modern, fully responsive Next.js website built with TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✅ **Enterprise-grade design** with refined aesthetics
- ✅ **Fully responsive** - mobile-first approach
- ✅ **Multi-page architecture** - Home, About, Services, Capabilities, Case Studies, Contact
- ✅ **Smooth animations** using Framer Motion
- ✅ **Professional staff profiles** with team photos
- ✅ **Comprehensive service documentation**
- ✅ **Impact-driven case studies**
- ✅ **Contact form** with validation
- ✅ **SEO optimized** with metadata

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
stadi-analytics/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── capabilities/
│   │   └── page.tsx
│   ├── case-studies/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   ├── sections/
│   │   ├── HeroEnterprise.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── StaffGrid.tsx
│   │   ├── CapabilitySection.tsx
│   │   ├── CaseStudyBlock.tsx
│   │   └── CTAEnterprise.tsx
│   └── ui/
│       └── FadeIn.tsx
└── public/
    └── images/
        ├── logo.jpeg
        ├── home.jpeg
        ├── staff1.jpeg
        ├── staff2.jpeg
        └── staff3.jpeg
```

## Design System

### Colors
- **Primary Purple**: `#5B2EFF`
- **Secondary Blue**: `#2563EB`
- **Gradient**: Purple to Blue
- **Neutral Grays**: F8FAFC to 0F172A

### Typography
- **Headings**: Semibold, tracking-tight
- **Body**: Text-lg, leading-relaxed
- **Scale**: 4xl to 6xl for heroes, 3xl-4xl for sections

### Spacing
- **Desktop Sections**: py-24 to py-32
- **Mobile Sections**: py-16
- **Containers**: max-w-7xl with px-6 lg:px-8

### Animations
- **Fade In Up**: 30px translate with 0.6s duration
- **Stagger Children**: 0.08-0.12s delays
- **Hover Effects**: Scale 1.02, 200ms transitions

## Services Offered

1. **Market Research** - Consumer insights and market analysis
2. **Questionnaire Design & Scripting** - ODK, KoBo Toolbox, Survey CTO
3. **Data Collection & Management** - Mobile and online data collection
4. **Training & Capacity Development** - Research and analytics training
5. **Data Science Consultancy** - ML models and predictive analytics

## Contact Information

- **Location**: Nairobi, Kenya
- **Phone**: +254 710 331 173
- **Email**: hello@stadianalytics.com
- **Website**: www.stadianalytics.com

## License

© 2026 Stadi Research & Analytics. All rights reserved.
