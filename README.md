# The English Practice — Website

Official business website for **The English Practice**, a specialist English for Specific Purposes (ESP) training consultancy led by **Chriselle Dmello**, holder of a Master's in English Language Teaching.

The website delivers role-targeted communication training information for educators, academic institutions, and corporate organisations.

---

## Technology Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation / SSG)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Interactivity:** Vanilla browser JavaScript (zero heavy SPA frameworks)
- **Deployment Target:** Render Static Sites (Publish directory: `dist`)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### 3. Run the Production Build

```bash
npm run build
```

This compiles static HTML, CSS, JavaScript, and asset files into the `dist/` directory.

### 4. Preview the Production Build Locally

```bash
npm run preview
```

Serves the built `dist/` folder locally to verify production rendering.

---

## Business Content Configuration

All core business variables, founder credentials, contact parameters, and training delivery formats are centralized in:

📁 `src/data/businessConfig.ts`

```typescript
export const businessConfig = {
  businessName: "The English Practice",
  tagline: "English for the Work You Do.",
  brandDescriptor: "Professional English Communication & Language Development",
  trainerName: "Chriselle Dmello",
  trainerTitle: "English Language Teaching Specialist",
  trainerQualification: "Master's in English Language Teaching",
  specialisation: "English for Specific Purposes (ESP)",
  trainingFormats: ["Online Training", "One-to-One Training", "Group Training"],
  businessEmail: "", // Add confirmed email here
  phone: "",         // Add phone number here
  whatsapp: "",      // Add WhatsApp number here (e.g. +91XXXXXXXXXX)
  businessAddress: "",
  city: "",
  websiteUrl: "",    // Set canonical custom domain once selected
  instagram: "",
  linkedin: "",
  trainerPhoto: "",  // Place authentic photo in public/images and set path
  yearsOfExperience: null,
  enquiryMethod: 'copy-message', // Switch to 'direct-mailto' or 'form-endpoint'
  contactFormEndpoint: "",
};
```

### How to Add Real Contact Details

1. Open `src/data/businessConfig.ts`.
2. Fill in `businessEmail`, `phone`, `whatsapp`, and `websiteUrl`.
3. To switch the contact form from clipboard-copy mode to direct email or form submission:
   - For direct email: set `enquiryMethod: 'direct-mailto'`.
   - For an approved form endpoint (e.g. Formspree/Netlify Forms): set `contactFormEndpoint: 'https://...'` and `enquiryMethod: 'form-endpoint'`.
4. Rebuild the website with `npm run build`.

---

## Render Static Site Deployment Guide

This website is designed for **Render Static Sites**.

1. Create an account on [Render](https://render.com/).
2. Click **New +** and select **Static Site**.
3. Connect your Git repository.
4. Configure the build and publish settings:
   - **Name:** `the-english-practice`
   - **Branch:** `main`
   - **Root Directory:** *(leave empty for repository root)*
   - **Build Command:** `npm ci && npm run build` (or `npm install && npm run build`)
   - **Publish Directory:** `dist`
5. Click **Create Static Site**.
6. Once deployed, attach your custom domain in the Render dashboard and update `websiteUrl` in `src/data/businessConfig.ts`.

---

## Updating the Website After Deployment

Whenever you make changes (updating content, adding FAQs, adding verified credentials):

1. Edit the relevant file in `src/data/` or `src/pages/`.
2. Test locally using `npm run build` and `npm run preview`.
3. Commit and push the changes to your Git repository:
   ```bash
   git add .
   git commit -m "Update training modules and contact configuration"
   git push origin main
   ```
4. Render will automatically detect the push, rebuild, and redeploy the static site within seconds.

---

## Site Architecture

- `/` — Homepage: Hero, Philosophy, 2 Core Audiences, ESP vs General Comparison, Formats, 4-Step Approach, Interactive Communication Lab, Founder Profile, FAQs, Consultation CTA.
- `/english-for-teachers` — English for Educators: 6 Expandable Modules, School Cohorts, 1-on-1 Teacher Coaching, Educator FAQs.
- `/corporate-english` — Corporate English & Workplace Communication: 6 Expandable Modules, ESP Advantage, Organisational Workshops vs Individual Coaching, Corporate FAQs.
- `/our-approach` — Our Proposed Learning Methodology: Discover, Design, Practise, Review, and Contextual Analysis.
- `/about` — About Chriselle Dmello: Master's in English Language Teaching, Teaching Philosophy, and Core Focus Areas.
- `/contact` — Training Consultation Request: 8-field accessible form with clipboard summary copy and privacy notice.
- `/404` — Custom 404 page with navigation fallbacks.
- `/sitemap.xml` & `robots.txt` — SEO indexing.
