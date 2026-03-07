# H1GROW — Monetize Your Content

<p align="center">
  <img src="logo.png" alt="H1Grow Logo" width="120" />
</p>

<p align="center">
  <strong>The platform helping Pakistani content creators earn what they deserve.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#license">License</a>
</p>

---

## Overview

**H1GROW** is a landing page for a creator monetization platform built for Pakistani influencers and content creators. It helps creators generate recurring revenue through personalized software products — zero risk, zero inventory, maximum earnings.

The site features a bold **brutalist design** aesthetic with smooth Framer Motion animations, a dark theme with silver accents, and fully functional email-powered contact and lead capture forms.

---

## Features

- 🎬 **Intro Animation** — Cinematic loading sequence on first visit
- 🧭 **Sticky Navbar** — Responsive navigation with smooth scroll anchors
- 🚀 **Hero Section** — Bold headline with animated call-to-action
- ❌ **Problem Section** — Highlights pain points creators face
- ✅ **Solution Section** — Showcases the H1Grow value proposition
- ⚙️ **How It Works** — Step-by-step breakdown of the creator workflow
- 🤝 **Refer a Friend** — Referral program section with lead capture form
- ❓ **FAQ** — Accordion-style frequently asked questions
- 📣 **Final CTA** — Conversion-focused call-to-action block
- 📩 **Contact Form** — Sends real emails via the **Resend** API
- 📬 **Lead Capture** — Creator sign-up form with confirmation and owner notification emails
- 🔒 **Privacy Page** — Dedicated privacy policy route

---

## Tech Stack

| Technology                                                       | Purpose                       |
| ---------------------------------------------------------------- | ----------------------------- |
| [Next.js 14](https://nextjs.org/)                                | React framework (App Router)  |
| [React 18](https://react.dev/)                                   | UI library                    |
| [TypeScript](https://www.typescriptlang.org/)                    | Type safety                   |
| [Tailwind CSS 3](https://tailwindcss.com/)                       | Utility-first styling         |
| [Framer Motion](https://www.framer.com/motion/)                  | Animations & transitions      |
| [Lucide React](https://lucide.dev/)                              | Icon library                  |
| [Resend](https://resend.com/)                                    | Transactional email API       |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cruspy2004/H1grow_landinpage.git
   cd H1grow_landinpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the project root:

   ```env
   # Resend API Key — get yours at https://resend.com/api-keys
   RESEND_API_KEY=re_your_api_key_here

   # Your email — receives notifications when someone submits a form
   OWNER_EMAIL=your@email.com

   # Your verified domain for "from" address (set up at https://resend.com/domains)
   # Before domain verification, use: resend.dev
   FROM_DOMAIN=yourdomain.com
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
H1Grow_landingpaeg/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts        # Contact form email endpoint
│   │   │   └── submit/
│   │   │       └── route.ts        # Lead capture + confirmation email endpoint
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy policy page
│   │   ├── globals.css             # Global styles & Tailwind directives
│   │   ├── layout.tsx              # Root layout with metadata & SEO
│   │   ├── page.tsx                # Home page (assembles all sections)
│   │   └── icon.png                # Favicon
│   └── components/
│       ├── IntroAnimation.tsx      # Cinematic intro sequence
│       ├── Navbar.tsx              # Sticky navigation bar
│       ├── Hero.tsx                # Hero section
│       ├── Problem.tsx             # Pain-point section
│       ├── Solution.tsx            # Value proposition section
│       ├── HowItWorks.tsx          # Step-by-step workflow
│       ├── ReferAFriend.tsx        # Referral section with form
│       ├── FAQ.tsx                 # Accordion FAQ
│       ├── FinalCTA.tsx            # Final call-to-action
│       ├── Contact.tsx             # Contact form component
│       ├── Footer.tsx              # Footer
│       ├── About.tsx               # About component
│       ├── Privacy.tsx             # Privacy policy component
│       └── ui/                     # Shared UI primitives
├── tailwind.config.ts              # Tailwind theme (brutalist colors, fonts, shadows)
├── next.config.mjs                 # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
├── package.json                    # Dependencies & scripts
└── logo.png                        # H1Grow brand logo
```

---

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Create production build              |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint                           |

---

## Environment Variables

| Variable         | Required | Description                                              |
| ---------------- | -------- | -------------------------------------------------------- |
| `RESEND_API_KEY`  | ✅       | API key from [Resend](https://resend.com/api-keys)       |
| `OWNER_EMAIL`     | ✅       | Email address that receives form notifications           |
| `FROM_DOMAIN`     | ✅       | Verified sender domain (use `resend.dev` before verification) |

---

## API Endpoints

### `POST /api/contact`

Handles contact form submissions. Sends the message to the site owner via Resend.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### `POST /api/submit`

Handles creator lead capture. Sends a confirmation email to the creator and a notification to the site owner.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "instagram": "string",
  "followers": "string"
}
```

---

## Design System

The landing page follows a **brutalist design** language:

- **Colors:** Black background (`#000`), white text, silver accents (`#C0C0C0`), with a brutal red (`#FF0055`) for emergency highlights
- **Typography:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings, [Inter](https://fonts.google.com/specimen/Inter) for body
- **Shadows:** Hard-edge box shadows for a brutalist feel
- **Layout:** CSS Grid background pattern with 60px grid lines for texture

---

## Deployment

This is a standard Next.js application. Deploy it to any platform that supports Node.js:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com/)
3. Add your environment variables in the Vercel dashboard
4. Deploy 🚀

### Other Platforms

Works with **Netlify**, **Railway**, **Render**, or any Docker / Node.js host. Make sure to:
- Set the build command to `npm run build`
- Set the output directory to `.next`
- Configure all required environment variables

---

## License

This project is private and proprietary. All rights reserved.

---

<p align="center">
  Built with 🖤 for Pakistani creators.
</p>
