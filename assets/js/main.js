/**
 * RAMZAN MEMON — PORTFOLIO CORE ENGINE & INTERACTIVITY
 * Art Direction: Independent Design Studio & Editorial Showcase
 * Source of Truth: Authentic CV & 2026 Portfolio of Muhammad Ramzan
 * Mobile & Touch Optimized
 */

(function () {
  'use strict';

  // --- Sound Synth Engine (Web Audio API) ---
  let soundEnabled = true;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
  }

  // Mobile touch unlock
  function unlockAudioOnFirstInteraction() {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    document.removeEventListener('touchstart', unlockAudioOnFirstInteraction);
    document.removeEventListener('click', unlockAudioOnFirstInteraction);
  }
  document.addEventListener('touchstart', unlockAudioOnFirstInteraction, { passive: true, once: true });
  document.addEventListener('click', unlockAudioOnFirstInteraction, { passive: true, once: true });

  function playClickSound() {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  function playSuccessSound() {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.08); // C#
      osc.frequency.setValueAtTime(659.25, now + 0.16); // E
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  // --- Authentic Project Database (Extracted from 18-page PDF) ---
  const projectsData = [
    {
      id: 1,
      num: "01",
      title: "Rent a Car Commercial Campaign",
      category: "Commercial Poster",
      filterCategory: "posters-marketing",
      year: "2026",
      role: "Lead Visual Designer & Compositor",
      tools: ["Adobe Photoshop", "Color Grading", "Pre-Press"],
      thumbnail: "assets/images/project-01-rent-a-car.jpg",
      heroImage: "assets/images/project-01-rent-a-car.jpg",
      shortDesc: "Complete commercial promotional poster featuring high-impact luxury rental cars, rental rates, fleet specifications, and prominent booking call-to-actions.",
      rationale: "Engineered to capture immediate consumer attention in commercial transit and outdoor advertising spaces. The layout combines a dramatic atmospheric mountain pass backdrop with high-contrast luxury automotive cutouts, utilizing a dynamic split-tone cobalt and gold promotional ribbon. The typography establishes a strict vertical reading hierarchy — from primary rental rates ($300/day) to fleet specifications and prominent dual contact channels.",
      specs: [
        { label: "Format", val: "High-Res Commercial Poster" },
        { label: "Resolution", val: "300 DPI CMYK Pre-Press" },
        { label: "Bleed / Margin", val: "3mm Standard Print Bleed" },
        { label: "Execution", val: "100% Edge-to-Edge Full Layout" }
      ],
      deliverables: [
        "Master high-resolution CMYK print files with bleed",
        "Social media square promotional cutdowns",
        "Landscape digital billboard format (1920×1080)",
        "Layered non-destructive Adobe Photoshop PSD master"
      ]
    },
    {
      id: 2,
      num: "02",
      title: "Plaza & Modern Home Real Estate Campaign",
      category: "Real Estate & Architecture",
      filterCategory: "posters-marketing",
      year: "2026",
      role: "Visual Creative & Layout Artist",
      tools: ["Photoshop", "Illustrator", "Typography"],
      thumbnail: "assets/images/project-02-plaza-sale.jpg",
      heroImage: "assets/images/project-02-plaza-sale.jpg",
      shortDesc: "Comprehensive commercial property marketing campaign with structured feature highlights, clear typography hierarchy, and luxury architectural presentation.",
      rationale: "Created for a high-end property development showcase. The visual strategy employs deep twilight purple and ultraviolet gradients to establish exclusivity, framing an angular architectural photograph against celestial atmospheric textures. Strategic yellow callout badges highlight key investor incentives (10% down payment, booking from $2,000, installment options) with high-visibility investor contact blocks.",
      specs: [
        { label: "Format", val: "Property Marketing Spread" },
        { label: "Software", val: "Photoshop & Illustrator" },
        { label: "Color Profile", val: "sRGB Display & CMYK Proofed" },
        { label: "Layout Grid", val: "Multi-Tier Feature Callout Grid" }
      ],
      deliverables: [
        "Commercial plaza sales promotional posters",
        "Feature highlight investor specification sheet",
        "Social media real estate feed templates",
        "High-contrast investor call-to-action blocks"
      ]
    },
    {
      id: 3,
      num: "03",
      title: "Jasper Elric & SeekNova Visiting Cards",
      category: "Stationery & Corporate Identity",
      filterCategory: "stationery-merchandise",
      year: "2026",
      role: "Identity & Print Production Designer",
      tools: ["Adobe Illustrator", "300 DPI Pre-Press", "Spot UV Prep"],
      thumbnail: "assets/images/project-03-visiting-cards.png",
      heroImage: "assets/images/project-03-visiting-cards.png",
      shortDesc: "Complete minimalist double-sided business card presentation designed with standard print bleeds, clean typography, tactile contrast, and luxury executive branding.",
      rationale: "A study in executive restraint and tactile refinement. The identity cards for Jasper Elric and Rhea Kapoor (SeekNova Technologies) utilize a deep forest charcoal slate base contrasted with subtle holographic spectrum accents. The reverse side features crisp white typography set in a rigorous Swiss modernist hierarchy, ensuring full legibility across contact coordinates, office addresses, and digital endpoints.",
      specs: [
        { label: "Standard Size", val: "3.5\" × 2.0\" Standard Die Cut" },
        { label: "Pre-Press", val: "300 DPI CMYK + 0.125\" Bleeds" },
        { label: "Finishing", val: "Matte Velvet Touch + Spot UV Foil" },
        { label: "Edge Safety", val: "Full Double-Sided Margin Clearance" }
      ],
      deliverables: [
        "Double-sided vector master artwork (AI/EPS)",
        "Pre-press print-ready PDF with trim and bleed marks",
        "Selective spot-UV varnish mask separation layers",
        "Photorealistic 3D stationery presentation mockups"
      ]
    },
    {
      id: 4,
      num: "04",
      title: "Official Corporate Letterhead Architecture",
      category: "Corporate Identity",
      filterCategory: "brand-identity",
      year: "2026",
      role: "Brand Identity Designer",
      tools: ["Adobe Illustrator", "A4 Grid System", "Vector Typography"],
      thumbnail: "assets/images/project-04-official-letterhead.jpg",
      heroImage: "assets/images/project-04-official-letterhead.jpg",
      shortDesc: "Professional A4 corporate letterhead templates formatted for formal communications, featuring balanced header and footer architecture and legal clarity.",
      rationale: "Corporate letterhead systems require absolute precision to ensure functional harmony between legal typography, executive signatures, and corporate branding. This suite features a dynamic geometric chevron header in brand corporate orange and charcoal, balanced with an anchor footer displaying physical office locations, direct lines, and digital credentials. Engineered with strict margin boundaries for offset litho printing and digital Word document integration.",
      specs: [
        { label: "Document Size", val: "Standard ISO A4 (210 × 297 mm)" },
        { label: "Safe Margin", val: "20mm Gutter Boundary System" },
        { label: "Type Hierarchy", val: "Header / Body / Legal Footer" },
        { label: "Compatibility", val: "Litho Print & MS Word Integration" }
      ],
      deliverables: [
        "Vector master stationery templates in Adobe Illustrator",
        "Editable corporate Microsoft Word (.docx) headers",
        "Interactive digital PDF stationery with live links",
        "Corporate stationery brand guidelines sheet"
      ]
    },
    {
      id: 5,
      num: "05",
      title: "Creative Digital Marketing Agency Collateral",
      category: "Marketing Collateral",
      filterCategory: "posters-marketing",
      year: "2026",
      role: "Marketing Designer & Layout Specialist",
      tools: ["Adobe Illustrator", "Editorial Grid", "Vector Graphics"],
      thumbnail: "assets/images/project-05-marketing-flyer.jpg",
      heroImage: "assets/images/project-05-marketing-flyer.jpg",
      shortDesc: "Promotional flyer layouts built to drive business conversions, organizing complex service information into readable, visually compelling sections.",
      rationale: "Designed to help modern creative agencies communicate extensive service capabilities at a single glance. The composition employs a balanced multi-column grid, combining corporate executive portraiture with bold, rhythmic typography. Key service pillars (Business Ideas, Brand Solutions, Digital Marketing, Business Analysis) are framed within high-contrast badge containers, leading eyes directly toward the contact CTA ribbon.",
      specs: [
        { label: "Format", val: "Promotional Marketing Flyer" },
        { label: "Grid Structure", val: "Dynamic Multi-Column Layout" },
        { label: "Software", val: "Adobe Illustrator CC" },
        { label: "Output", val: "Digital Web & Offset Litho 300 DPI" }
      ],
      deliverables: [
        "Single-sheet promotional flyer layouts",
        "Corporate agency capability cards",
        "High-impact promotional ribbon vector assets",
        "Ready-to-print CMYK production files"
      ]
    },
    {
      id: 6,
      num: "06",
      title: "2026 Executive Diary & Annual Planner",
      category: "Corporate Merchandise",
      filterCategory: "stationery-merchandise",
      year: "2026",
      role: "Product & Packaging Designer",
      tools: ["Photoshop", "Illustrator", "Foil Stamping Die"],
      thumbnail: "assets/images/project-06-diary-black.png",
      heroImage: "assets/images/project-06-diary-black.png",
      shortDesc: "Custom corporate notebook and daily planner cover branding featuring embossed logo placement, premium leather foil textures, gilded page edges, and refined interior layout architecture.",
      rationale: "Engineered for high-end annual corporate gifts, executive stationery kits, and luxury foil-stamped journals. The design establishes a tactile material language featuring deep saddle brown and obsidian black leather bindings. Bespoke gold hot-stamped emblems ('M' monogram and geometric apex crests) are coupled with refined gilded page borders and satin ribbon bookmarks.",
      specs: [
        { label: "Product Type", val: "Hardcover Executive Annual Planner" },
        { label: "Binding", val: "Premium Debossed Faux Leather" },
        { label: "Finishing", val: "Metallic Hot Gold & Silver Foil" },
        { label: "Interior", val: "80 GSM Gilded Edge Archival Grid" }
      ],
      deliverables: [
        "Vector die-cut stamp lines for hot foil embossing",
        "Front, spine, and rear cover mechanical specifications",
        "Bespoke corporate annual planner calendar layout",
        "Photorealistic 3D product visualization renders"
      ]
    },
    {
      id: 7,
      num: "07",
      title: "Muhammad Ramzan Executive Branded Suite",
      category: "Custom Merchandise & Identity",
      filterCategory: "stationery-merchandise",
      year: "2026",
      role: "Art Director & Brand Identity Designer",
      tools: ["Illustrator", "Laser Engraving", "Gold Stamping"],
      thumbnail: "assets/images/project-07-executive-suite.png",
      heroImage: "assets/images/project-07-executive-suite.png",
      shortDesc: "Custom executive corporate merchandise kit featuring precision laser-etched business card cases, hot gold foil stamped metal identity cards, and branded accessories crafted for high-end client presentation.",
      rationale: "Personal signature merchandise directly showcasing the Muhammad Ramzan identity typography in metallic gold foil and brushed matte aluminum. This suite serves as a tactile touchpoint when meeting enterprise clients, pairing a laser-engraved metal business card presentation case with hot gold foil-stamped identity cards and custom stylus pens.",
      specs: [
        { label: "Materials", val: "Anodized Aluminum & Matte Metal" },
        { label: "Etching", val: "Precision High-Resolution Laser Vector" },
        { label: "Identity Mark", val: "Muhammad Ramzan 'MR' Signature Seal" },
        { label: "Purpose", val: "Enterprise Client Presentation Kit" }
      ],
      deliverables: [
        "Laser-engraving vector paths for metal accessories",
        "Hot foil stamping dies for metallic business cards",
        "Branded luxury presentation box packaging art",
        "Comprehensive personal visual identity brand guide"
      ]
    },
    {
      id: 8,
      num: "08",
      title: "Digital Marketing Hero Banners (2560×1440)",
      category: "Large Format & Digital Advertising",
      filterCategory: "uiux-digital",
      year: "2026",
      role: "Digital Campaign Art Director",
      tools: ["Photoshop", "Illustrator", "Responsive Layout"],
      thumbnail: "assets/images/project-08-hero-banners.jpg",
      heroImage: "assets/images/project-08-hero-banners.jpg",
      shortDesc: "High-impact widescreen promotional headers and responsive hero banners engineered for brand marketing campaigns and online engagement.",
      rationale: "Carefully engineered with unobstructed copy zones, strong call-to-action buttons, QR code integration, and crisp vector assets. The widescreen layout balances high-energy vivid tangerine gradients with crisp corporate dark slate, providing a commanding digital header suitable for enterprise websites, LinkedIn hero placements, and Google Responsive Display campaigns.",
      specs: [
        { label: "Resolutions", val: "2560×1440 & 1920×1080 Widescreen" },
        { label: "Interactive", val: "Scannable QR Code & Direct CTA Zones" },
        { label: "Aspect Ratio", val: "16:9 Landscape Digital Standard" },
        { label: "Optimization", val: "Ultra-Crisp Vector & WebP Ready" }
      ],
      deliverables: [
        "Widescreen 2560×1440 website hero banners",
        "1920×1080 social media corporate header graphics",
        "Mobile responsive header crop variations",
        "High-contrast vector CTA and icon assets"
      ]
    },
    {
      id: 9,
      num: "09",
      title: "Logo Design & Vector Drawing System",
      category: "Identity Marks & Vector Geometry",
      filterCategory: "brand-identity",
      year: "2026",
      role: "Identity Designer & Vector Specialist",
      tools: ["Adobe Illustrator", "Pen Tool Mastery", "Golden Ratio"],
      thumbnail: "assets/images/project-09-logo-vector.svg",
      heroImage: "assets/images/project-09-logo-vector.svg",
      shortDesc: "Multi-faceted identity system exploring circular geometric seals, dynamic apex vectors, custom letterform kerning ('RAM'), and complex pen tool bezier curve mastery.",
      rationale: "A comprehensive demonstration of foundational mark-making across distinct visual vernaculars. This system encompasses: (1) Geometric Marks with precise circular grid-based balances for app icons and seals; (2) Abstract Symbols utilizing dynamic diagonal triangles symbolizing movement, speed, and innovation; (3) Custom Wordmarks with tailored letterform kerning and bespoke geometry for 'RAM'; and (4) Complex Pen Tool Vector Drawing delivered in infinitely scalable formats.",
      specs: [
        { label: "Vector Geometry", val: "Precision Bezier Curves & Grid Balance" },
        { label: "Scale", val: "Infinitely Scalable 16px Favicon to Billboard" },
        { label: "Mark Types", val: "Geometric, Abstract, Wordmark, Vector Icon" },
        { label: "Formats", val: "SVG, AI, EPS, PDF, Transparent PNG" }
      ],
      deliverables: [
        "Full vector mark suite across all 4 visual disciplines",
        "Monochrome, inverted, and color brand mark variations",
        "Construction grid guides showing circular & diagonal geometry",
        "Exported favicon and application icon packages"
      ]
    },
    {
      id: 10,
      num: "10",
      title: "To Do List Task Mobile App & UI System",
      category: "UI/UX & Mobile Design",
      filterCategory: "uiux-digital",
      year: "2026",
      role: "UI/UX Designer & Prototyper",
      tools: ["Figma", "Auto-Layout", "Design Tokens", "Wireframing"],
      thumbnail: "assets/images/project-10-ui-ux-app.png",
      heroImage: "assets/images/project-10-ui-ux-app.png",
      shortDesc: "Figma wireframes and interface screens designed with modern typography, user-centric hierarchy, and mobile layout discipline.",
      rationale: "A clean, modern productivity interface built entirely in Figma utilizing Auto-Layout and modular component tokens. The user journey is streamlined around an intuitive 3-screen dashboard: welcome onboarding, task management feed with status chips ('Crafting Idea', 'Design Process'), and categorical organization with visual icons. Prioritizes accessibility, generous tap targets, light mode clarity, and structured information density.",
      specs: [
        { label: "Platform", val: "iOS & Android Mobile Layout" },
        { label: "Architecture", val: "Figma Auto-Layout & Component System" },
        { label: "Color Palette", val: "Clean Light Mode with Cyan & Coral Accents" },
        { label: "Screen Count", val: "3+ Core Flow Screens & Component Library" }
      ],
      deliverables: [
        "Figma master design system with interactive components",
        "High-fidelity clickable interactive mobile prototype",
        "Design token documentation (typography, colors, radii, shadows)",
        "Organized developer handoff specs with pixel-perfect assets"
      ]
    },
    {
      id: 11,
      num: "11",
      title: "Book Cover Design: Milk and Honey",
      category: "Publishing & Editorial Art",
      filterCategory: "publishing-creative",
      year: "2026",
      role: "Book Cover & Editorial Designer",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Spine Calculation"],
      thumbnail: "assets/images/project-11-book-cover.jpg",
      heroImage: "assets/images/project-11-book-cover.jpg",
      shortDesc: "Front cover, spine, and back cover layouts designed for print publication, balancing title dominance with artistic depth and tactile finish.",
      rationale: "Created as an art-directed jacket packaging concept for rupi kaur's iconic poetry collection. The design champions stark, intentional restraint — set on an ultra-deep matte black jacket, featuring lowercase white serif typography paired with delicate hand-drawn botanical and bee line art. Spine calculations account for precise paper bulk, complemented by standard ISBN barcode placement and tactile spot varnish areas.",
      specs: [
        { label: "Publication Type", val: "Trade Paperback & Hardcover Jacket" },
        { label: "Spine Calculation", val: "Exact Page Count Paper Bulk Sizing" },
        { label: "Typography", val: "Editorial Serif with Intentional Kerning" },
        { label: "Compliance", val: "Official EAN/ISBN Barcode & Pricing Safe Zone" }
      ],
      deliverables: [
        "Complete mechanical flat print spread (Front, Spine, Back)",
        "3D photorealistic hardcover mockup presentation",
        "Ebook and audiobook square digital cover editions",
        "Print-ready 300 DPI CMYK PDF with crop marks"
      ]
    },
    {
      id: 12,
      num: "12",
      title: "Photo Manipulation & Double Exposure Techniques",
      category: "Creative Photo Editing",
      filterCategory: "publishing-creative",
      year: "2026",
      role: "Creative Retoucher & Digital Artist",
      tools: ["Photoshop", "Frequency Separation", "Double Exposure"],
      thumbnail: "assets/images/project-12-creative-editing.svg",
      heroImage: "assets/images/project-12-creative-editing.svg",
      shortDesc: "Advanced digital image editing encompassing artistic double exposure silhouettes, multi-image perspective compositing, and frequency separation skin retouching.",
      rationale: "Explores the technical boundaries of Adobe Photoshop across three distinct digital manipulation specializations: (1) Double Exposure Effects seamlessly blending human portrait silhouettes with urban architecture and natural flora using non-destructive blend modes; (2) Advanced Compositing matching focal lengths, horizon vanishing points, and atmospheric color temperature; (3) Commercial Retouching utilizing frequency separation to isolate skin tone gradients from fine micro pore textures.",
      specs: [
        { label: "Techniques", val: "Double Exposure, Compositing, Retouching" },
        { label: "Color Space", val: "16-Bit ProPhoto RGB & Pre-Press CMYK" },
        { label: "Methodology", val: "Non-Destructive Layer Masks & Smart Objects" },
        { label: "Retouching Grade", val: "Commercial Beauty Frequency Separation" }
      ],
      deliverables: [
        "Layered 16-bit Adobe Photoshop master documents (.psd)",
        "Side-by-side Before/After retouching breakdown artboards",
        "Cinematic split-tone color grading presets",
        "Ultra high-resolution commercial print master exports"
      ]
    }
  ];

  // --- DOM Elements ---
  const projectGrid = document.getElementById('projectGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalHeroBox = document.getElementById('modalHeroBox');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalRole = document.getElementById('modalRole');
  const modalTools = document.getElementById('modalTools');
  const modalYear = document.getElementById('modalYear');
  const modalFormat = document.getElementById('modalFormat');
  const modalDesc = document.getElementById('modalDesc');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  // Lightbox
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  // Navigation & Drawer
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sound Toggle
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  // Contact Form & Toast
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const toastNotice = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const serviceInquireLinks = document.querySelectorAll('[data-service-inquire]');

  // CV Actions
  const printCvBtn = document.getElementById('printCvBtn');

  // --- Render Portfolio Gallery ---
  function renderProjects(filter = 'all') {
    if (!projectGrid) return;
    projectGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.filterCategory === filter);

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = `project-card ${p.id === 1 || p.id === 8 || p.id === 10 ? 'featured' : ''}`;
      card.setAttribute('data-id', p.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View case study for ${p.title}`);

      card.innerHTML = `
        <div class="project-media-wrapper">
          <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" />
          <div class="project-badge-overlay">
            <span class="badge-tag">${p.category}</span>
            <span class="badge-num">${p.num}</span>
          </div>
          <div class="project-hover-curtain">
            <span class="hover-cta-pill">Explore Case Study →</span>
          </div>
        </div>
        <div class="project-info">
          <div>
            <span class="project-category">${p.tools[0]} • ${p.year}</span>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-excerpt">${p.shortDesc}</p>
          </div>
          <div class="project-footer">
            <div class="project-tools">
              ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
            </div>
            <svg class="view-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        playClickSound();
        openProjectModal(p.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClickSound();
          openProjectModal(p.id);
        }
      });

      projectGrid.appendChild(card);
    });
  }

  // --- Open Project Modal ---
  function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !modalOverlay) return;

    modalHeroImg.src = project.heroImage;
    modalHeroImg.alt = project.title;
    modalCategory.textContent = project.category;
    modalTitle.textContent = `${project.num} / ${project.title}`;
    modalRole.textContent = project.role;
    modalTools.textContent = project.tools.join(', ');
    modalYear.textContent = project.year;
    modalFormat.textContent = project.specs[0] ? project.specs[0].val : 'Design Deliverable';
    modalDesc.textContent = project.rationale;

    // Deliverables list
    modalDeliverables.innerHTML = project.deliverables
      .map(d => `<li>${d}</li>`)
      .join('');

    // Specs list
    modalSpecsList.innerHTML = project.specs
      .map(s => `
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; padding:0.4rem 0; border-bottom:1px solid var(--border-subtle); gap:0.5rem;">
          <span style="font-family:var(--font-mono); color:var(--text-tertiary)">${s.label}:</span>
          <span style="font-family:var(--font-mono); color:var(--accent); font-weight:600; text-align:right;">${s.val}</span>
        </div>
      `)
      .join('');

    // Pre-fill CTA
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeProjectModal();
        prefillContactForm(`Inquiry about ${project.title}`, project.category);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      };
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Lightbox Zoom ---
  function openLightbox(src, alt) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Enlarged project preview';
    lightboxOverlay.classList.add('active');
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
  }

  // --- Toast Notification ---
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice || !toastMsg) return;
    toastMsg.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3500);
  }

  // --- Pre-fill Contact Form ---
  function prefillContactForm(subjectText, serviceType = '') {
    const messageInput = document.getElementById('formMessage');
    const serviceSelect = document.getElementById('formService');
    if (serviceSelect && serviceType) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceType.toLowerCase()) ||
            serviceType.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    if (messageInput) {
      messageInput.value = `Hi Ramzan,\n\nI would like to discuss ${subjectText}.\n`;
      messageInput.focus();
    }
  }

  // --- Event Listeners Initialization ---
  function initEvents() {
    // Filter click
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickSound();
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const filterVal = btn.getAttribute('data-filter') || 'all';
        renderProjects(filterVal);
      });
    });

    // Modal close
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        playClickSound();
        closeProjectModal();
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          playClickSound();
          closeProjectModal();
        }
      });
    }

    // Modal Hero click -> Lightbox
    if (modalHeroBox) {
      modalHeroBox.addEventListener('click', () => {
        if (modalHeroImg && modalHeroImg.src) {
          playClickSound();
          openLightbox(modalHeroImg.src, modalTitle ? modalTitle.textContent : '');
        }
      });
    }

    // Lightbox close
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        playClickSound();
        closeLightbox();
      });
    }

    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
          playClickSound();
          closeLightbox();
        }
      });
    }

    // Keyboard ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
          closeLightbox();
        } else if (modalOverlay && modalOverlay.classList.contains('active')) {
          closeProjectModal();
        }
      }
    });

    // Navbar Scroll Spy & Blur
    window.addEventListener('scroll', () => {
      if (!navbar) return;
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      const sections = ['work', 'about', 'skills', 'services', 'cv', 'contact'];
      let currentSection = '';
      for (const sectionId of sections) {
        const sec = document.getElementById(sectionId);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 180) {
            currentSection = sectionId;
            break;
          }
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });

    // Mobile Drawer Toggle
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        playClickSound();
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileToggle.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Smooth navigation on link click from drawer
      const mobileLinks = mobileDrawer.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            playClickSound();
            mobileDrawer.classList.remove('open');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
            const target = document.querySelector(href);
            if (target) {
              setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
              }, 60);
            }
          }
        });
      });
    }

    // Audio Mute Toggle
    if (soundToggleBtn && soundIcon) {
      soundToggleBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        if (soundEnabled) {
          playClickSound();
          soundToggleBtn.setAttribute('title', 'Sound: On');
          soundIcon.innerHTML = `
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 12C17.004 13.3308 16.4774 14.6024 15.54 15.54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          `;
          showToast("Sound effects enabled");
        } else {
          soundToggleBtn.setAttribute('title', 'Sound: Off');
          soundIcon.innerHTML = `
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          `;
          showToast("Sound effects muted");
        }
      });
    }

    // Copy Email Button
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        playClickSound();
        const email = 'memonmuhammadramzan80@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast(`Copied ${email} to clipboard!`);
          }).catch(() => {
            showToast(`Contact: ${email}`);
          });
        } else {
          showToast(`Contact: ${email}`);
        }
      });
    }

    // Print CV Button
    if (printCvBtn) {
      printCvBtn.addEventListener('click', () => {
        playClickSound();
        window.print();
      });
    }

    // Services CTA link prefilling
    serviceInquireLinks.forEach(link => {
      link.addEventListener('click', () => {
        playClickSound();
        const serviceName = link.getAttribute('data-service-inquire') || 'Custom Project';
        prefillContactForm(serviceName, serviceName);
      });
    });

    // Contact Form Submission & Validation
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClickSound();

        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const service = document.getElementById('formService').value;
        const budget = document.getElementById('formBudget').value;
        const message = document.getElementById('formMessage').value.trim();
        const submitBtn = document.getElementById('formSubmitBtn');

        // Validation
        if (!name || !email || !message) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill in all required fields (Name, Email, Message).';
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please enter a valid email address.';
          return;
        }

        if (message.length < 10) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please provide a little more detail in your message (at least 10 characters).';
          return;
        }

        // Simulate Sending State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <svg style="animation:spin 1s linear infinite; width:16px; height:16px; display:inline-block; vertical-align:middle; margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2A10 10 0 0 1 22 12" stroke-linecap="round"/>
          </svg>
          Transmitting Inquiry...
        `;
        submitBtn.disabled = true;

        setTimeout(() => {
          playSuccessSound();
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
          formStatus.className = 'form-status success';
          formStatus.innerHTML = `
            <strong>Thank you, ${name}!</strong> Your inquiry regarding <em>"${service || 'Design Project'}"</em> has been received. 
            A confirmation draft has also been prepared for direct dispatch via your email client.
            <div style="margin-top:0.75rem">
              <a href="mailto:memonmuhammadramzan80@gmail.com?subject=Project Inquiry: ${encodeURIComponent(service)} from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Client Name: ${name}\nClient Email: ${email}\nBudget Range: ${budget}\n\nProject Scope:\n${message}`)}" 
                 style="color:var(--accent); font-weight:700; text-decoration:underline;">
                Click here to dispatch directly via your email client →
              </a>
            </div>
          `;
          showToast(`Inquiry ready! Thank you, ${name}.`);
          contactForm.reset();
        }, 1100);
      });
    }
  }

  // Initialize on DOM load
  
  // =========================================================================
  // SMART EXPENSE SCREENSHOT CAROUSEL & LIGHTBOX CONTROLS
  // =========================================================================
  function initSmartExpenseCarousel() {
    const track = document.getElementById('seCarouselTrack');
    const prevBtn = document.getElementById('seCarouselPrev');
    const nextBtn = document.getElementById('seCarouselNext');
    const dotsWrap = document.getElementById('seDotsWrap');
    const currentSlideSpan = document.getElementById('seCurrentSlide');
    const downloadBtn = document.getElementById('seDownloadApkBtn');

    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.se-slide-card'));
    const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.se-dot')) : [];

    function updateCarouselState() {
      const scrollLeft = track.scrollLeft;
      const cardWidth = slides[0] ? slides[0].offsetWidth : 280;
      const gap = 24; // 1.5rem
      const totalWidth = cardWidth + gap;
      
      const activeIndex = Math.min(
        slides.length - 1,
        Math.max(0, Math.round(scrollLeft / totalWidth))
      );

      // Update dots
      dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Update counter
      if (currentSlideSpan) {
        currentSlideSpan.textContent = String(activeIndex + 1);
      }

      // Update arrows disabled state
      if (prevBtn) {
        prevBtn.disabled = scrollLeft <= 10;
      }
      if (nextBtn) {
        const maxScroll = track.scrollWidth - track.clientWidth - 10;
        nextBtn.disabled = scrollLeft >= maxScroll;
      }
    }

    // Scroll by 1 slide
    function scrollSlide(direction) {
      playClickSound();
      const cardWidth = slides[0] ? slides[0].offsetWidth : 280;
      const gap = 24;
      const step = (cardWidth + gap) * direction;
      track.scrollBy({ left: step, behavior: 'smooth' });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollSlide(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollSlide(1));
    }

    // Dot click
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        playClickSound();
        const cardWidth = slides[0] ? slides[0].offsetWidth : 280;
        const gap = 24;
        track.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
      });
    });

    // Debounced scroll listener for touch swipe and track scroll
    let scrollTimeout = null;
    track.addEventListener('scroll', () => {
      if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
      scrollTimeout = requestAnimationFrame(updateCarouselState);
    }, { passive: true });

    // Keyboard navigation (arrow keys when track is focused)
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollSlide(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollSlide(1);
      }
    });

    // Make each screenshot clickable to open existing lightbox
    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        playClickSound();
        const imgSrc = slide.getAttribute('data-img');
        const imgTitle = slide.getAttribute('data-title') || 'Smart Expense Screen';
        if (imgSrc && typeof openLightbox === 'function') {
          openLightbox(imgSrc, imgTitle);
        }
      });
    });

    // Download APK button sound & toast
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        playSuccessSound();
        showToast('Initiating Smart-Expense.apk direct download (22.2 MB)...');
      });
    }

    // Initial state
    updateCarouselState();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSmartExpenseCarousel();
    renderProjects('all');
    initEvents();
  });
})();
