# Next.js Project Template

A comprehensive template for creating high-converting Next.js websites with integrated planning, competitor analysis, and modern best practices.

## 🚀 Quick Start

### 1. Clone This Template
```bash
# Use as GitHub template (recommended)
# Click "Use this template" button on GitHub

# Or clone directly
git clone https://github.com/YOUR_USERNAME/nextjs-project-template.git my-new-project
cd my-new-project
```

### 2. **REQUIRED: Install MCPs First**
⚠️ **CRITICAL STEP** - Before anything else, install required MCP tools:

1. **Read and follow** `MCP_SETUP_GUIDE.md`
2. **Install the MCPs** using the provided commands
3. **Verify installation** before proceeding

**DO NOT SKIP THIS STEP** - The execution plan requires these tools!

### 3. Add Your Assets
Upload your project assets to the organized folders:

```
assets/
├── branding/
│   ├── logos/          # Upload your logo files (SVG, PNG)
│   ├── images/         # Upload brand images (hero, products, etc.)
│   └── brand-info.txt  # Fill out brand guidelines
├── competitor-urls.txt # Add competitor URLs (one per line)
└── content-links.txt   # Add content inspiration URLs
```

### 4. Run the Execution Plan
Open `UNIVERSAL_NEXTJS_PROJECT_EXECUTION_PLAN.md` and work with Claude to:
1. Claude verifies MCP installation
2. Claude reads your assets and analyzes competitors (using Bright Data MCP)
3. Claude uses Context-7 MCP for documentation when needed
4. Fill out the comprehensive questionnaire
5. Claude generates a project-specific CLAUDE.md file
6. Execute the 6-phase development plan

### 5. Result
You'll get a complete, production-ready Next.js website with:
- ✅ Custom branding and design
- ✅ Competitive insights integrated
- ✅ Facebook Pixel tracking
- ✅ Modern animations and effects
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Deployed to Vercel

---

## 📁 Template Structure

```
nextjs-project-template/
├── MCP_SETUP_GUIDE.md                         # REQUIRED: MCP installation guide
├── UNIVERSAL_NEXTJS_PROJECT_EXECUTION_PLAN.md  # Main execution file
├── README.md                                   # This file
├── .env.example                               # Environment variables template
├── .gitignore                                 # Git ignore rules
└── assets/
    ├── branding/
    │   ├── logos/
    │   │   └── README.md                      # Logo specifications
    │   ├── images/
    │   │   └── README.md                      # Image specifications  
    │   └── brand-info.txt                     # Brand guidelines template
    ├── competitor-urls.txt                    # Competitor websites to analyze
    └── content-links.txt                      # Content inspiration links
```

---

## 📋 Setup Checklist

### Before Starting:
- [ ] Clone or use this template repository
- [ ] **CRITICAL: Install MCPs** (read `MCP_SETUP_GUIDE.md`)
  - [ ] Install Bright Data MCP
  - [ ] Install Context-7 MCP
  - [ ] Verify both MCPs are working
- [ ] Add your logo files to `assets/branding/logos/`
- [ ] Add your brand images to `assets/branding/images/`
- [ ] Fill out `assets/branding/brand-info.txt`
- [ ] Add 3-5 competitor URLs to `assets/competitor-urls.txt`
- [ ] Add content inspiration URLs to `assets/content-links.txt` (optional)

### Ready to Execute:
- [ ] Open `UNIVERSAL_NEXTJS_PROJECT_EXECUTION_PLAN.md` 
- [ ] Work with Claude to analyze assets and fill questionnaire
- [ ] Let Claude generate your project-specific CLAUDE.md
- [ ] Execute the 6-phase development plan

---

## 🎯 What This Template Provides

### 🔍 Automatic Analysis
- **Competitor Research**: Uses Bright Data MCP to analyze competitor websites
- **Brand Integration**: Reads your brand assets and guidelines
- **Content Insights**: Reviews content inspiration for best practices

### 📱 Modern Website Features
- **Next.js 14**: Latest App Router with TypeScript
- **Tailwind CSS**: Custom theme based on your brand colors
- **Framer Motion**: Smooth animations and micro-interactions
- **Facebook Pixel**: Complete tracking and event integration
- **Mobile-First**: Responsive design optimized for all devices

### 📈 Marketing Integration
- **Lead Capture**: Optimized forms with validation
- **Facebook Ads**: Pixel tracking and conversion events
- **WhatsApp Integration**: Direct contact capabilities
- **SEO Optimization**: Meta tags, structured data, performance

### 🎨 2025 Design Trends
- **Bold Layouts**: Asymmetric and block-based designs
- **Micro-Animations**: Hover effects and scroll triggers
- **Modern Effects**: Glassmorphism, gradients, 3D elements
- **AI Personalization**: Dynamic content adaptation

---

## 🛠️ Asset Guidelines

### Logo Files (`assets/branding/logos/`)
- **Formats**: SVG (preferred), PNG with transparency
- **Sizes**: 200-400px width for main logo
- **Naming**: `logo.svg`, `logo-dark.svg`, `logo-light.svg`

### Brand Images (`assets/branding/images/`)
- **Hero Images**: 1920x1080px or 1200x600px
- **Product Images**: 800x800px (square) or 1200x800px
- **Formats**: JPG for photos, PNG for graphics
- **Size**: Keep under 500KB when possible

### Brand Information (`assets/branding/brand-info.txt`)
Fill out:
- Primary, secondary, and accent colors (hex codes)
- Font preferences for headers and body text
- Brand voice and personality
- Logo usage guidelines

### Competitor URLs (`assets/competitor-urls.txt`)
Add one URL per line:
```
https://competitor1.com
https://competitor2.com
https://competitor3.com
```

### Content Links (`assets/content-links.txt`)
Add inspiration URLs:
```
https://good-copy-example.com
https://testimonial-inspiration.com
https://hero-section-example.com
```

---

## 🚀 Development Workflow

### Phase 1: Asset Analysis (Automatic)
Claude reads all your assets and analyzes competitors using Bright Data MCP.

### Phase 2: Project Planning
Fill out the comprehensive questionnaire with pre-populated information from your assets.

### Phase 3: CLAUDE.md Generation
Claude creates a project-specific instruction file based on your requirements.

### Phase 4: Development Execution
Follow the 6-phase development plan:
1. **Setup & Foundation** (30-45 min)
2. **Core Layout & Design** (45-60 min)  
3. **Interactive Elements** (30-45 min)
4. **Content Integration** (30 min)
5. **Marketing Integration** (20-30 min)
6. **Testing & Deployment** (30 min)

### Phase 5: Production Website
Complete, optimized Next.js website deployed to Vercel.

---

## 📊 Expected Results

### Performance Targets
- **Lighthouse Score**: 95+
- **Loading Speed**: <2.5s LCP
- **Mobile Score**: 100%
- **SEO Score**: 95+

### Marketing Features
- **Facebook Pixel**: Fully configured with event tracking
- **Lead Generation**: Optimized contact forms
- **Conversion Tracking**: Complete analytics setup
- **Social Integration**: WhatsApp, social media links

### Design Quality
- **Modern Aesthetics**: 2025 design trends implementation
- **Brand Consistency**: Your brand identity throughout
- **User Experience**: Intuitive navigation and interactions
- **Responsive Design**: Perfect on all devices

---

## 🔧 Technical Stack

```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS (custom brand theme)
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Email: EmailJS or Resend
Analytics: Facebook Pixel + Vercel Analytics
Deployment: Vercel
Performance: Optimized for Core Web Vitals
```

---

## ❓ Frequently Asked Questions

### Q: Do I need coding knowledge?
A: No! The template and Claude handle all the technical implementation. You just need to provide assets and answer questions.

### Q: How long does it take to create a website?
A: The complete process takes 3-4 hours from start to deployed website.

### Q: Can I customize the design?
A: Yes! The questionnaire covers all design preferences, and the system adapts to your brand and style.

### Q: Is Facebook Pixel required?
A: No, it's optional. The template works for any marketing strategy.

### Q: What if I don't have professional images?
A: The system provides guidance on image requirements and can suggest placeholder solutions.

### Q: Can I use this for different industries?
A: Yes! The template is universal and adapts to any business type or industry.

---

## 📞 Support

For questions or issues:
1. Check the asset README files for specifications
2. Review the execution plan for detailed instructions
3. Ensure all required assets are properly uploaded
4. Follow the questionnaire step by step

---

## 🎉 Ready to Build?

1. **Add your assets** to the organized folders
2. **Open the execution plan** and work with Claude
3. **Get your professional website** in hours, not weeks!

Start by uploading your brand assets and competitor URLs, then open `UNIVERSAL_NEXTJS_PROJECT_EXECUTION_PLAN.md` to begin!# Next.js-Template-GrowInity
