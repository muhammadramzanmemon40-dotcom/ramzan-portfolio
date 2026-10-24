# RAMZAN MEMON — PORTFOLIO WEBSITE
### Graphic Designer & Visual Creative | Creative Portfolio 2026

An exceptional, visually distinctive, award-worthy portfolio website designed and built for **Ramzan Memon (Muhammad Ramzan Feroze Memon)**, professional graphic designer and visual creative based in Islamabad, Pakistan.

---

## 🎨 Creative Concept: The Designer's Canvas

This website is styled as a blend of a **contemporary art direction portfolio**, an **editorial design studio**, and an **independent creative agency**. It rejects generic developer and SaaS templates in favor of oversized Swiss typography, high-contrast visual grids, deep obsidian backgrounds, and vibrant project artwork.

### Visual Identity Specifications
- **Background**: `#0B0B0D` (Obsidian Charcoal)
- **Primary Text**: `#F5F3EF` (Warm Off-White)
- **Accent**: `#C7FF4D` (Acid Lime / Electric Chartreuse)
- **Secondary Text**: `#A4A4AA` (Muted Studio Silver)
- **Surface Elevation**: `#111115` & `#15151B`
- **Hairline Borders**: `#1E1E26` & `#2D2D38`

---

## 📂 Project Structure

```
ramzan-memon-portfolio/
│
├── index.html                   # Semantic HTML5 single-page application
├── server.js                    # Zero-dependency local Node.js static server
├── package.json                 # Project configuration & npm scripts
├── README.md                    # Setup, customization & deployment manual
│
└── assets/
    ├── css/
    │   └── style.css            # Custom editorial design system & print stylesheet
    ├── js/
    │   └── main.js              # Project database, filtering, modal, audio, validation
    ├── docs/
    │   ├── Muhammad_Ramzan_Resume.pdf          # Authentic submitted CV PDF
    │   └── Muhammad_Ramzan_Portfolio_2026.pdf  # Full 18-page creative portfolio PDF
    └── images/
        ├── ramzan-portrait.png                 # Authentic designer portrait (PDF page 1)
        ├── project-01-rent-a-car.jpg           # Rent a Car Commercial Campaign
        ├── project-02-plaza-sale.jpg           # Plaza for Sale Real Estate Campaign
        ├── project-03-visiting-cards.png       # Jasper Elric & SeekNova Visiting Cards
        ├── project-04-official-letterhead.jpg  # Official Corporate Letterheads
        ├── project-05-marketing-flyer.jpg      # Creative Agency Marketing Flyer
        ├── project-06-diary-black.png          # 2026 Executive Annual Planner
        ├── project-06-diary-brown.png          # Executive Diary Brown Leather Edition
        ├── project-07-executive-suite.png      # Muhammad Ramzan Executive Suite
        ├── project-08-hero-banners.jpg         # Widescreen Digital Hero Banners
        ├── project-09-logo-vector.svg          # Logo Marks & Vector Drawing System
        ├── project-10-ui-ux-app.png            # To Do List Task Mobile App UI
        ├── project-11-book-cover.jpg           # Book Cover Design: Milk and Honey
        └── project-12-creative-editing.svg     # Double Exposure & Photo Compositing
```

---

## 🚀 How to Run Locally

### Option 1: Using the Bundled Antigravity Node Runner (Instant)
Run the following in PowerShell from this project directory:
```powershell
& "C:\Users\MUHAMMAD RAMZAN\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js
```
Then open your browser to: **`http://localhost:3000`**

### Option 2: Using Standard Node.js
If Node.js is in your system PATH:
```bash
node server.js
```

### Option 3: Direct Browser Launch (Zero-Server)
Since all paths are relative and self-contained with no external CDN requirements:
Simply **double-click `index.html`** in Windows Explorer or open it with Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## 🎯 Key Interactive Features

1. **Editorial Portfolio Gallery with Dynamic Filtering**:
   - Filter by: *All (12)*, *Commercial Posters & Marketing (3)*, *Stationery & Merchandise (3)*, *Brand Identity & Logos (2)*, *UI/UX & Digital (2)*, *Publishing & Creative Editing (2)*.
2. **Deep Case Study Drawer / Modal**:
   - Clicking any project opens the complete design case study with large visual presentation, design rationale, role, software tools, archive year, and project deliverables checklist.
3. **Full-Resolution Lightbox**:
   - Click the image inside any case study modal to inspect full-resolution artwork with dark backdrop isolation.
4. **Dedicated Printable A4 CV (Curriculum Vitae)**:
   - Formatted in an editorial Swiss A4 grid.
   - **"Print / Save as PDF"** button triggers an optimized `@media print` layout that hides web chrome and prints a crisp, black-and-white, job-ready resume.
   - **"Download CV (PDF)"** downloads the original submitted PDF resume.
   - **"Portfolio (PDF)"** downloads the full 18-page original portfolio presentation.
5. **Interactive Client Inquiry Form**:
   - Validates client name, email format, budget scope, and minimum message length.
   - Includes real-time submission simulation with loading state.
   - Generates a pre-filled `mailto:` client fallback link for 100% reliable offline or client-side dispatch.
6. **Tactile Sound Synth Engine (Web Audio API)**:
   - Subtle high-frequency micro-clicks and soft chords during navigation and form completion.
   - Can be muted/unmuted anytime via the sound icon button in the header.
7. **Accessibility & Reduced Motion**:
   - Semantic HTML5 landmark tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
   - Keyboard accessible (Tab focus, `Enter` to open case study, `Escape` to close modal and lightbox).
   - Full support for `prefers-reduced-motion`.

---

## ✏️ How to Edit or Add New Projects

All project data lives inside [`assets/js/main.js`](assets/js/main.js) in the `projectsData` array:

```javascript
{
  id: 13,
  num: "13",
  title: "Your New Project Title",
  category: "Brand Identity",
  filterCategory: "brand-identity", // posters-marketing, stationery-merchandise, brand-identity, uiux-digital, publishing-creative
  year: "2026",
  role: "Lead Visual Designer",
  tools: ["Adobe Illustrator", "Photoshop"],
  thumbnail: "assets/images/your-thumbnail.jpg",
  heroImage: "assets/images/your-hero-image.jpg",
  shortDesc: "Short 1-2 sentence description for the card.",
  rationale: "Detailed rationale describing problem, concept, and execution.",
  specs: [
    { label: "Dimensions", val: "A4 / 300 DPI" },
    { label: "Color Profile", val: "CMYK Pre-Press" }
  ],
  deliverables: [
    "Vector master files",
    "Print-ready PDF"
  ]
}
```

---

## 🌐 Free Production Deployment

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.

### Deploying to Netlify
1. Drag and drop the `ramzan-memon-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. It goes live instantly with SSL and custom domain support.

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In Settings → Pages, select the `main` branch and `/` root directory.
3. Your portfolio is published at `https://<username>.github.io/<repo-name>/`.

---

© 2026 **Ramzan Memon** (Muhammad Ramzan Feroze Memon). All rights reserved.
