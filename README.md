# Dr. James R. Gordon Website

A luxury medical landing page designed to position Dr. James R. Gordon as a top-tier, nationally recognized oculofacial plastic surgeon with deep clinical authority, refined aesthetics, and patient trust.

## Overview

The website emphasizes trust, authority, and conversion through sophisticated animations, rich media content, and professional design. Built with performance-first architecture using static site generation for blazing-fast load times and optimal SEO.

**Project Type:** Web App (Landing Page)
**Status:** Initial Setup Complete
**Version:** 0.1.0
**Domain:** drjamesgordon.com

## Features

### Core Sections
- **Hero Section** with video background + rotating text (credentials, logo, tagline)
- **Legacy of Excellence** with awards marquee (7 logos, continuous scroll)
- **Meet Dr. Gordon** bio section with CTA
- **Signature Treatments** grid (4 interactive cards, 40+ procedures)
- **Consultation CTA** sections throughout
- **Dr. Gordon Difference** (2,000+ 5-star reviews)
- **Hallmark of Excellence** with accreditations marquee
- **Press Features** with video embed + magazine covers grid
- **Before/After Gallery** with clip-path slider (4 treatment categories)
- **Contact Form** with newsletter opt-in

### Animations
- Sophisticated animations inspired by Dr. Kolker's website (drkolker.com)
- Swiper.js carousels for marquees
- Scroll-triggered animations (fadeInUp, fadeUpSmooth)
- Hover effects on cards and buttons
- 0.4s standard timing with cubic-bezier easing
- Stagger patterns for sequential reveals

## Tech Stack

- **Frontend:** Next.js 15.1.8 (App Router) with static export + React 18.3.1
- **Styling:** Tailwind CSS 4.x with custom burgundy palette (#9A2E2E)
- **Animation:** Swiper.js 11.x + CSS transforms + Framer Motion 11.x (optional)
- **Forms:** React Hook Form 7.x + Zod validation
- **Backend:** Next.js API Routes (serverless /api/contact endpoint)
- **Email:** Resend for form submissions
- **Database:** Airtable (optional) for form storage
- **Deployment:** Vercel with global CDN
- **Analytics:** Google Analytics 4
- **Fonts:** Google Fonts (Poppins, Bhineka) + AzoSans Black

See [TECH-STACK.md](../ultrathink-docs/drjamesgordon.com-project/TECH-STACK.md) for detailed rationale.

## Architecture

Static site generation with Next.js 15 + React 18, deployed to Vercel with global CDN for maximum performance (<2.5s LCP). Sophisticated animations using Swiper.js for marquees and CSS transforms following Dr. Kolker patterns. Minimal serverless backend (single /api/contact endpoint) with Resend for email delivery. Optional Airtable for form storage. Zero-cost deployment for expected traffic (100-1,000 users).

See [ARCHITECTURE-v1.0.md](../ultrathink-docs/drjamesgordon.com-project/ARCHITECTURE-v1.0.md) for complete architecture documentation.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS)
- npm 10+
- Git
- Resend API key (for contact form)
- Google Analytics 4 tracking ID (optional)
- Airtable account (optional, for form storage)

### Installation

\`\`\`bash
# Clone the repository
git clone git@github.com-cobautista:cobautista/drjamesgordon.com-project.git
cd drjamesgordon.com-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Configuration

Create `.env.local` with:

\`\`\`bash
# Resend API Key (required for contact form)
RESEND_API_KEY=re_xxxxx

# Airtable (optional)
AIRTABLE_API_KEY=key_xxxxx
AIRTABLE_BASE_ID=app_xxxxx

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-xxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

See [DEPLOYMENT-GUIDE.md](../ultrathink-docs/drjamesgordon.com-project/DEPLOYMENT-GUIDE.md) for production setup.

## Project Structure

\`\`\`
drjamesgordon.com-project/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage (all sections)
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles + Tailwind
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts   # Contact form API endpoint
│   ├── components/             # React components
│   │   ├── Hero.tsx           # Hero section with video
│   │   ├── LegacyExcellence.tsx
│   │   ├── MeetDrGordon.tsx
│   │   ├── TreatmentsGrid.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── ContactForm.tsx
│   │   └── ui/                # Reusable UI components
│   ├── lib/                    # Utility functions
│   │   ├── resend.ts          # Email service
│   │   └── airtable.ts        # Database (optional)
│   └── styles/                 # Additional styles (if needed)
├── public/
│   ├── images/                 # Static images
│   ├── videos/                 # Background videos
│   └── fonts/                  # Custom fonts (AzoSans)
├── docs/                       # Additional documentation
├── .env.example                # Environment variables template
├── .gitignore
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
\`\`\`

## Documentation

All project documentation is stored in `../ultrathink-docs/drjamesgordon.com-project/`:

- **PRD-v1.0.md** - Product Requirements Document (all 13 sections)
- **ARCHITECTURE-v1.0.md** - System Architecture (10 comprehensive sections)
- **TECH-STACK.md** - Technology choices and rationale
- **DEPLOYMENT-GUIDE.md** - Production deployment instructions for Vercel
- **API-SPEC.md** - API specification for /api/contact endpoint
- **NEXT-STEPS.md** - Your first development tasks
- **diagrams/** - Visual documentation (Excalidraw prompts)

## Development

### Running Tests

\`\`\`bash
npm test
\`\`\`

### Linting

\`\`\`bash
npm run lint
\`\`\`

### Type Checking

\`\`\`bash
npm run type-check
\`\`\`

### Building for Production

\`\`\`bash
npm run build
# Generates static export in /out folder
\`\`\`

## Deployment

See [DEPLOYMENT-GUIDE.md](../ultrathink-docs/drjamesgordon.com-project/DEPLOYMENT-GUIDE.md) for complete deployment instructions to Vercel.

**Quick Deploy:**
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
\`\`\`

## API Documentation

See [API-SPEC.md](../ultrathink-docs/drjamesgordon.com-project/API-SPEC.md) for complete API documentation for the contact form endpoint.

## Next Steps

See [NEXT-STEPS.md](../ultrathink-docs/drjamesgordon.com-project/NEXT-STEPS.md) for your prioritized development tasks.

**Recommended First Task:** Implement Hero Section with video background and rotating text.

## Performance Targets

- **Time to First Byte (TTFB):** <200ms
- **Largest Contentful Paint (LCP):** <2.5s
- **First Input Delay (FID):** <100ms
- **Cumulative Layout Shift (CLS):** <0.1
- **Total Page Weight:** <2MB

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari (iOS): Last 2 versions
- Chrome Mobile (Android): Last 2 versions

## License

Proprietary - All rights reserved by Dr. James R. Gordon

## Contact

**Client:** Dr. James R. Gordon (Semi-technical stakeholder)
**Developer:** Maintained by Cob (cobautista)

---

**Generated by UltraThink Project Initialization** - 2026-02-09
