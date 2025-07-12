# Universal Next.js Project Execution Plan Template

## 🚨 CRITICAL EXECUTION RULES

### **⚠️ DIRECTORY REQUIREMENTS**
- ❌ **NEVER create new project folders** 
- ✅ **ALWAYS work within `Next.js-Template-GrowInity` directory just rename the directory to (Project name)**
- ✅ **Preserve MCP configurations** (Bright Data, Context-7)
- ✅ **Use existing assets folder structure**

### **📋 PHASE-BY-PHASE TODO SYSTEM**
- ✅ **Create separate todo lists for each phase**
- ✅ **Complete each phase FULLY before next phase**
- ✅ **Verify all requirements before proceeding**
- ❌ **DO NOT mix phases in single todo list**

## Instructions for Claude
When starting a new Next.js project, use this template to:

### **STEP 1: PRE-EXECUTION VERIFICATION**
1. **Verify Current Directory** - Must be in `Next.js-Template-GrowInity`
2. **Check MCP Availability** - Confirm `bright-data` and `context-7` MCPs are installed
3. **Read `CUSTOMER_DATA.md` file first** - This contains the GrowInity form submission
4. **Extract all customer information** from the email data in that file
5. **Read ALL asset files** - brand-info.txt, competitor-urls.txt, content-links.txt
6. **Create project-specific CLAUDE.md** with customer specifications

### **STEP 2: VALIDATE TEMPLATE ASSETS**
1. **Read brand-info.txt** - Extract EXACT colors, fonts, and brand guidelines
2. **Inventory existing assets** - Check logos and images in branding folders
3. **Review competitor URLs** - Prepare for Bright Data analysis
4. **Confirm content references** - Review content-links.txt

### **STEP 3: NO DUPLICATE QUESTIONS**
- ✅ **DO**: Use form data directly from CUSTOMER_DATA.md
- ✅ **DO**: Use existing brand assets and colors
- ✅ **DO**: Work within existing directory structure
- ❌ **DON'T**: Re-ask any questions already answered in the form
- ❌ **DON'T**: Create new folders or duplicate assets
- ❌ **DON'T**: Mix multiple phases in one todo list

**Note**: MCPs (Bright Data and Context-7) should already be installed before reaching this plan.

### Step 1: Process Customer Data from GrowInity Form
**First, read the `CUSTOMER_DATA.md` file to extract customer form submission:**

#### 1.1 Read Customer Data File
```
Read the CUSTOMER_DATA.md file and extract all customer information from the email content.
The email contains structured data from the GrowInity form with all project requirements.
```

#### 1.2 Extract Key Information
From the email data, extract ALL form fields - they will auto-populate sections throughout this document:
- ✅ Project details (name, goals, industry, description)
- ✅ Target audience (age, location, problems, behavior)
- ✅ Design preferences (style, colors, mood, animations)
- ✅ Brand information (USP, tone, messages, assets)
- ✅ Technical requirements (integrations, languages, CRM)
- ✅ Marketing setup (Facebook, tracking, newsletter)
- ✅ Budget, timeline, and contact information

**IMPORTANT**: After extraction, skip directly to "Customer Data Integration" section - all this data is already collected!

### Step 2: Read Template Assets (After Processing Customer Data)
After extracting customer data, read these files to gather additional project information:

**🔍 Required Reading:**
- `./assets/competitor-urls.txt` - Analyze each URL with Bright Data MCP
- `./assets/content-links.txt` - Review content references and inspiration
- `./assets/branding/brand-info.txt` - Extract brand colors, fonts, and guidelines
- Check `./assets/branding/logos/` folder for available logo files
- Check `./assets/branding/images/` folder for available brand images

**📋 Analysis Tasks:**
1. **Competitor Analysis**: For each URL in competitor-urls.txt, use Bright Data MCP to analyze:
   - Layout structures and design patterns
   - User experience flows
   - Content strategies
   - Visual hierarchy and modern design elements
   - Call-to-action placements

2. **Brand Asset Inventory**: List available logos and images from branding folders

3. **Content Research**: Review any content links for inspiration and best practices

**📝 Pre-filled Information**: Use the gathered information to pre-populate relevant questionnaire sections.

---

## 🔴 STOP HERE IF PROCESSING FORM DATA 🔴
**The section below contains all the customer data from the form. DO NOT manually fill these fields!**

---

## Customer Data Integration from GrowInity Form

### 🚀 IMPORTANT: Start Here for Form Submissions
**When a customer submits the GrowInity form:**
1. **First read CUSTOMER_DATA.md** - This contains the complete form submission
2. **All data below is AUTO-POPULATED** - Do NOT ask these questions again
3. **Skip to "Additional Technical Questions" section** for any missing technical details

### 📊 Form Data Mapping Reference

| Form Field | Auto-Populates To | Status |
|------------|-------------------|---------|
| `projectName` | Project Name | ✅ From Form |
| `businessGoal` | Primary Business Goal | ✅ From Form |
| `industry` | Target Industry | ✅ From Form |
| `businessDescription` | Project Description | ✅ From Form |
| `customerAge` | Target Age Range | ✅ From Form |
| `customerLocation` | Target Location | ✅ From Form |
| `customerProblems` | Audience Pain Points | ✅ From Form |
| `customerBehavior` | Online Behavior | ✅ From Form |
| `inspirationUrls` | Competitor URLs | ✅ From Form |
| `designStyle` | Design Aesthetic | ✅ From Form |
| `preferredColors` | Color Preferences | ✅ From Form |
| `desiredMood` | Mood/Atmosphere | ✅ From Form |
| `animations` | Animation Preferences | ✅ From Form |
| `uniqueSellingPoint` | USP | ✅ From Form |
| `brandTone` | Brand Voice | ✅ From Form |
| `keyMessages` | Key Messages | ✅ From Form |
| `usesFacebook` | Facebook Marketing | ✅ From Form |
| `facebookPixelId` | Pixel ID | ✅ From Form |
| `integrations` | Required Integrations | ✅ From Form |
| `budget` | Budget Range | ✅ From Form |
| `timeline` | Timeline | ✅ From Form |
| `contactName/Email` | Contact Info | ✅ From Form |

### 📋 Complete Form Field List
**All these fields are collected by the GrowInity form - no need to ask again:**

```
✅ projectName           ✅ customerAge          ✅ uniqueSellingPoint
✅ businessGoal          ✅ customerLocation     ✅ brandTone
✅ businessGoalOther     ✅ customerProblems     ✅ keyMessages (array)
✅ industry              ✅ customerBehavior     ✅ hasAssets (array)
✅ businessDescription   ✅ inspirationUrls      ✅ websiteComponents
✅ designStyle (array)   ✅ inspirationLikes     ✅ contactMethods
✅ preferredColors       ✅ inspirationDifference ✅ formFields
✅ desiredMood          ✅ usesFacebook         ✅ integrations (array)
✅ animations (array)    ✅ facebookPixel        ✅ languages
✅ budget               ✅ facebookPixelId      ✅ hostingPreference
✅ timeline             ✅ trackingGoals        ✅ supportType
✅ specificDate         ✅ newsletterSystem     ✅ contactName/Email
```

### 🔄 Auto-Population Process
When processing form data, Claude will:
1. Extract all form fields from CUSTOMER_DATA.md
2. Populate the corresponding sections automatically
3. Create asset files (competitor-urls.txt, brand-info.txt)
4. Generate project-specific CLAUDE.md
5. Identify any gaps that need developer input

---

## Additional Technical Questions (Developer Use Only)

### ⚙️ Technical Specifications NOT in Customer Form

These questions may need clarification after reviewing the form submission:

#### Advanced Layout & Effects
- **Specific Layout Grid System:** 
  - [ ] CSS Grid with specific breakpoints
  - [ ] Flexbox-based layout
  - [ ] Custom grid system
  - **Notes:** ___________ (only if customer needs differ from standard responsive design)

- **Advanced Animation Requirements:**
  - [ ] Complex page transitions
  - [ ] 3D transformations
  - [ ] WebGL/Three.js elements
  - [ ] Lottie animations
  - **Notes:** ___________ (only if beyond standard Framer Motion)

#### Technical Architecture
- **Specific Framework Requirements:**
  - Next.js version constraints?  Choose the best!

- **Authentication & User Management:**
  - [ ] NextAuth.js
  - [ ] Clerk
  - [ ] Supabase Auth
  - [ ] Custom auth solution
  - **Requirements:** ___________ (only if form indicates user accounts needed)

- **Database Requirements:**
  - [ ] PostgreSQL (Supabase/Neon)
  - [ ] MongoDB
  - [ ] Prisma ORM required
  - [ ] No database needed
  - **Schema complexity:** ___________

- **API Specifications:**
  - External APIs to integrate: ___________
  - Rate limiting requirements: ___________
  - Webhook endpoints needed: ___________

#### Performance & Optimization
- **Specific Performance Requirements:**
  - Max bundle size: ___________ KB
  - Time to Interactive target: ___________ seconds
  - Specific caching strategy: ___________

- **SEO Technical Requirements:**
  - Structured data types needed: ___________
  - XML sitemap specifications: ___________
  - Robots.txt customization: ___________

#### Deployment & DevOps
- **CI/CD Requirements:**
  - [ ] GitHub Actions setup
  - [ ] Automated testing required
  - [ ] Staging environment needed
  - **Custom deployment needs:** ___________

- **Monitoring & Analytics:**
  - [ ] Sentry error tracking
  - [ ] Custom analytics events
  - [ ] Performance monitoring (Vercel Analytics)
  - **Additional tracking:** ___________

#### Content Management
- **CMS Requirements (if blog/dynamic content needed):**
  - [ ] Sanity.io
  - [ ] Contentful
  - [ ] MDX files
  - [ ] Custom CMS solution
  - **Content types:** ___________

### 📝 Notes Section
**Additional technical considerations based on form review:**
_This section is filled by the developer after analyzing the form submission_
- 
- 
- 

---

## Claude Instructions for CLAUDE.md Generation

After collecting the above information, create a project-specific CLAUDE.md file with:

### 1. Project Overview Section
- Use project name and description from questions
- Include primary business goal and target audience
- Add any affiliate links or special URLs

### 2. General Development Guidelines (Mandatory)
```
## General Development Guidelines
1. First think through the problem, read the codebase for relevant files, and create a plan using TodoWrite tool
2. Mark tasks as in_progress when working and completed when done
3. Check in before beginning work for plan verification
4. Give high-level explanations of changes at each step
5. Keep all changes simple - avoid massive or complex modifications
6. Minimize code impact - every change should be as small as possible
7. Always prioritize simplicity and clarity
```

### 3. Project-Specific Requirements
- **Target Audience:** From demographic answers
- **Branding & Design:** From design preferences and color choices
- **Lead Capture Priority:** From conversion goals
- **Competitive Analysis:** From inspiration URLs and improvement goals
- **Content Strategy:** From key messages and content type preferences
- **Technical Stack:** Always include:
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS (custom theme based on brand colors)
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Email: EmailJS or Resend
Deployment: Vercel
Marketing: Facebook Pixel (if applicable)
```

### 4. Key Features Section
Based on answers, include relevant features:
- Hero Section with compelling headlines
- Product/Service showcase
- Benefits/Features section
- Contact form with specified fields
- Integration requirements (WhatsApp, social media, etc.)
- Social proof (testimonials, trust badges)
- Compliance requirements

### 5. Performance Requirements
- Lighthouse Score: 95+
- Mobile-first responsive design
- Fast loading times (<2.5s LCP)
- SEO optimized based on priority level

### 6. Facebook Pixel Integration (if applicable)
Include specific implementation details:
- Pixel ID configuration
- Event tracking setup
- Conversion tracking strategy

### 7. Compliance Requirements
List all applicable compliance needs from the questionnaire

### 8. Development Phases
Reference the 6-phase execution plan below

### 9. GrowInity Form Data Integration Instructions
When receiving customer data from GrowInity form submission:

#### 9.1 Competitive Analysis Enhancement
- Use `inspirationUrls` from form as starting point for competitive analysis
- Add these URLs to `./assets/competitor-urls.txt` (one per line)
- Research additional competitors in customer's `industry` sector
- Focus analysis on elements customer mentioned in `inspirationLikes`
- Compare with customer's improvement goals from `inspirationDifference`

#### 9.2 Content Strategy Mapping
- **Primary Value Proposition:** Use `uniqueSellingPoint` from form
- **Key Messages:** Extract from `keyMessages` array (max 3 provided)
- **Content Types Needed:** Map from `websiteComponents` selections:
  - Homepage content → Hero headlines, value propositions
  - Product/service content → Based on `businessGoal` and `uniqueSellingPoint`
  - About us content → Use `brandTone` and `businessDescription`
  - Testimonials → If selected in `websiteComponents`
  - FAQ → If selected in `websiteComponents`
  - Legal pages → Based on `legalPages` selections
- **SEO Keywords:** Use `targetKeywords` if provided
- **Content Creation Strategy:** 
  - If form data is comprehensive → "Help create content based on provided information"
  - If form data is minimal → "Claude should suggest content" + request additional details

#### 9.3 Brand Asset Handling
- Create `./assets/branding/brand-info.txt` with form data:
  ```
  Brand Colors: [preferredColors]
  Brand Tone: [brandTone]
  Design Style: [designStyle]
  Unique Selling Point: [uniqueSellingPoint]
  Key Messages: [keyMessages]
  Desired Mood: [desiredMood]
  ```
- If `hasAssets` includes logos/images → Request files via follow-up email
- Use `designStyle` preferences to guide Tailwind CSS theme customization

#### 9.4 Technical Requirements Processing
- Map `integrations` array to Required Integrations section
- Set up Facebook Pixel if `usesFacebook` indicates usage
- Configure contact methods based on `contactMethods` selections
- Plan multi-language support if `languages` indicates multiple languages

### 10. Form Data Quality Assessment
Evaluate completeness of form submission:
- **High Quality (>80% fields completed):** Proceed with full development
- **Medium Quality (50-80% completed):** Create project with placeholders, request missing info
- **Low Quality (<50% completed):** Request additional information before starting development

---

## GrowInity Form Data Processing Workflow

### Step 1: Process Customer Data from CUSTOMER_DATA.md
The customer form submission email has been pasted into `CUSTOMER_DATA.md`. Extract data automatically:

#### 1.1 Read Customer Data File
```
Read the CUSTOMER_DATA.md file and parse the email content to extract all form fields.
The email contains structured HTML with customer responses from the GrowInity form.
```

#### 1.2 Extract and Populate Files
Using the extracted data, create and populate these files:

1. **Create `./assets/competitor-urls.txt`**
   ```
   [inspirationUrls[0]]
   [inspirationUrls[1]]
   [inspirationUrls[2]]
   ```

2. **Create `./assets/branding/brand-info.txt`**
   ```
   Company: [contactName] / [companyName]
   Industry: [industry]
   Brand Colors: [preferredColors]
   Brand Tone: [brandTone]
   Design Style: [designStyle.join(', ')]
   Unique Selling Point: [uniqueSellingPoint]
   Key Messages: 
   - [keyMessages[0]]
   - [keyMessages[1]] 
   - [keyMessages[2]]
   Desired Mood: [desiredMood]
   Target Audience: [customerAge], [customerLocation]
   Customer Problems: [customerProblems]
   ```

3. **Create `./assets/content-links.txt`**
   ```
   # Add any inspiration URLs for content reference
   [inspirationUrls from form if provided]
   ```

### Step 2: Auto-Generate CLAUDE.md File
Use this template to create a project-specific CLAUDE.md:

```markdown
# [projectName] - Website Development Project

## Project Overview
**Client:** [contactName] ([companyName])
**Industry:** [industry]
**Primary Goal:** [businessGoal]
**Timeline:** [timeline] ([specificDate if provided])
**Budget:** [budget]

**Project Description:** [businessDescription]

## General Development Guidelines
1. First think through the problem, read the codebase for relevant files, and create a plan using TodoWrite tool
2. Mark tasks as in_progress when working and completed when done
3. Check in before beginning work for plan verification
4. Give high-level explanations of changes at each step
5. Keep all changes simple - avoid massive or complex modifications
6. Minimize code impact - every change should be as small as possible
7. Always prioritize simplicity and clarity

## Target Audience
- **Demographics:** [customerAge], [customerLocation]
- **Pain Points:** [customerProblems]
- **Online Behavior:** [customerBehavior]

## Branding & Design Requirements
- **Design Style:** [designStyle.join(', ')]
- **Preferred Colors:** [preferredColors]
- **Brand Tone:** [brandTone]
- **Desired Mood:** [desiredMood]
- **Animations:** [animations.join(', ')]

## Unique Selling Proposition
[uniqueSellingPoint]

## Key Messages
1. [keyMessages[0]]
2. [keyMessages[1]]
3. [keyMessages[2]]

## Website Components Required
[websiteComponents.map(component => `- ${component}`).join('\n')]

## Contact Methods
[contactMethods.map(method => `- ${method}`).join('\n')]

## Technical Stack
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS (custom theme based on brand colors: [preferredColors])
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Email: Resend
Deployment: Vercel
[Facebook Pixel integration if usesFacebook !== 'geen-facebook']

## Integrations Required
[integrations.map(integration => `- ${integration}`).join('\n')]
[If crmSystem: `- CRM: ${crmSystem}`]

## Facebook Marketing Setup
[If usesFacebook !== 'geen-facebook']:
- **Facebook Usage:** [usesFacebook]
- **Pixel Setup:** [facebookPixel]
[If facebookPixelId]: - **Pixel ID:** [facebookPixelId]
- **Tracking Goals:** [trackingGoals.join(', ')]

## SEO Requirements
- **Priority Level:** [seoImportance]
- **Target Keywords:** [targetKeywords]
- **Local SEO:** [customerType === 'lokaal' ? 'Required' : 'Not needed']
- **Device Focus:** [deviceUsage]

## Multi-language Support
[languages === 'alleen-nederlands' ? 'Dutch only' : languages]
[If otherLanguages]: Additional languages: [otherLanguages]

## Legal & Compliance
[If industryRules.length > 0]:
**Industry Regulations:** [industryRules.join(', ')]
[If industryRulesOther]: Additional: [industryRulesOther]
**Required Legal Pages:** [legalPages.join(', ')]

## Hosting & Support
- **Hosting:** [hostingPreference]
[If existingWebsite]: - **Current Website:** [existingWebsite]
- **Support Type:** [supportType]

## Contact Information
- **Name:** [contactName]
- **Email:** [contactEmail]
[If contactPhone]: - **Phone:** [contactPhone]
[If companyName]: - **Company:** [companyName]

[If additionalInfo]:
## Additional Notes
[additionalInfo]

## Development Phases
Follow the 6-phase execution plan:
1. Setup & Foundation (30-45 minutes)
2. Core Layout & Design (45-60 minutes) 
3. Interactive Elements & Effects (30-45 minutes)
4. Content Integration & Personalization (30 minutes)
5. Marketing & Analytics Integration (20-30 minutes)
6. Testing, Compliance & Deployment (30 minutes)

## Performance Requirements
- Lighthouse Score: 95+
- Mobile-first responsive design ([deviceUsage])
- Fast loading times (<2.5s LCP)
- SEO optimized ([seoImportance] priority)
```

### Step 3: Ready for Development
With the CLAUDE.md file generated from form data, you can now:
1. Upload this template to any new project
2. Execute the 6-phase development plan
3. All customer requirements are captured and mapped
4. Project will be delivered exactly to customer specifications

---

## Technical Implementation Plan

### Tech Stack (Standard for All Projects)
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Email: Resend
Deployment: Vercel
Analytics: Basic website analytics (Google Analytics)
Testing: Playwright (E2E) with UI Mode
Marketing: Only implement if customer specifically requests
```

### Optional Marketing Features (Only Implement If Customer Requests)

#### Facebook Pixel Integration (If Requested)
- Only implement if customer specifically mentions social media marketing
- Check CUSTOMER_DATA.md for Facebook usage requirements
- See detailed implementation guide below in "Implementation Examples"

#### Email Marketing Integration (If Requested)
- Newsletter systems (Mailchimp, ConvertKit, etc.)
- Email automation
- Lead magnets and sequences

#### Analytics & Tracking (Standard)
- Google Analytics (always include for basic website analytics)
- Search Console setup
- Basic conversion tracking

---

## Implementation Examples

### Facebook Pixel Setup for Next.js 14 App Router
**⚠️ CRITICAL: ONLY IMPLEMENT IF CUSTOMER EXPLICITLY REQUESTS SOCIAL MEDIA MARKETING**
**🔍 Always check CUSTOMER_DATA.md first - do not assume this is needed**

#### Setup Instructions (When Customer Requests It)

1. **Install Dependencies:**
```bash
npm install react-facebook-pixel
```

2. **Create Pixel Component:**
```typescript
// components/FacebookPixel.tsx
'use client';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel = ({ pixelId }: FacebookPixelProps) => {
  useEffect(() => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, [pixelId]);

  return null;
};

export default FacebookPixel;
```

3. **Add to Layout:**
```typescript
// app/layout.tsx
import FacebookPixel from '@/components/FacebookPixel';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!} />
        {children}
      </body>
    </html>
  );
}
```

4. **Event Tracking Hook:**
```typescript
// hooks/useFacebookPixel.ts
import { useCallback } from 'react';

export const useFacebookPixel = () => {
  const track = useCallback((eventName: string, parameters = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  }, []);

  const trackCustom = useCallback((eventName: string, parameters = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  }, []);

  return { track, trackCustom };
};
```

#### Common Events Implementation (When Applicable)
- **Lead Event:** Form submissions
- **Contact Event:** WhatsApp/contact button clicks
- **ViewContent Event:** Product/service page views
- **Custom Events:** Based on specific project needs

#### Environment Variables (When Using Facebook Pixel)
```env
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here
```

---

## Development Phases (6-Phase Approach) - SEQUENTIAL EXECUTION

### 🚨 IMPORTANT: Phase-by-Phase Todo System
**Create separate todo lists for each phase. Do NOT proceed to next phase until current phase is 100% complete.**

### Phase 1: Setup & Foundation (30-45 minutes)
**🔴 STOP: Create PHASE 1 TODO LIST ONLY**
**🔍 CUSTOMER CHECK FIRST: Review CUSTOMER_DATA.md and CLAUDE.md for project requirements**

**⚠️ CRITICAL: Phase 1 MUST include complete Playwright testing setup (lines 692-696)**
**This ensures testing framework is ready for future test creation when needed**
- [ ] **VERIFY**: Current directory is `Next.js-Template-GrowInity` 
- [ ] **VERIFY**: MCPs (bright-data, context-7) are available
- [ ] **READ**: brand-info.txt for EXACT brand colors (#22254F #016ADF #FFFFFF)
- [ ] **READ**: assets/branding/logos/ for existing logo files
- [ ] Initialize Next.js project **IN CURRENT DIRECTORY** (no new folders)
- [ ] Install dependencies: Tailwind, Framer Motion, React Hook Form, Zod
- [ ] Configure Tailwind with **EXACT brand colors from brand-info.txt**
- [ ] Set up basic project structure within existing folder
- [ ] Create reusable UI components (Button, Input) 
- [ ] **USE EXISTING LOGO** from assets/branding/logos/
- [ ] Configure Facebook Pixel (if applicable)
- [ ] **COMPLETE PLAYWRIGHT SETUP** (4 steps):
  - [ ] Install Playwright: `npm init playwright@latest` (choose TypeScript, e2e folder, GitHub Actions)
  - [ ] Create test folder structure: `/test/e2e/`, `/test/page-objects/`, `/test/fixtures/`, `/test/utils/`
  - [ ] Add test scripts to package.json: `test`, `test:ui`, `test:debug`, `test:headed`, `test:report`, `test:codegen`
  - [ ] Create test README.md with usage instructions and example test workflow
- [ ] **VERIFICATION**: Brand colors visible, logo integrated, MCPs working, **Playwright tests runnable** (`npm run test --help` works)
- [ ] **STOP HERE**: Mark Phase 1 complete before Phase 2

### Phase 2: Core Layout & Design (45-60 minutes)
**🔴 STOP: Create PHASE 2 TODO LIST ONLY (after Phase 1 complete)**
**🔍 CUSTOMER CHECK: Review design preferences and branding requirements**
- [ ] **USE Bright Data MCP**: Analyze each URL in competitor-urls.txt
- [ ] **DOCUMENT**: Competitive analysis insights 
- [ ] **USE EXISTING IMAGES** from assets/branding/images/
- [ ] Build responsive layout with header/footer
- [ ] Implement Hero section with brand-specific messaging
- [ ] Create product/service showcase sections
- [ ] Add benefits/features section with 2025 design trends
- [ ] Implement mobile-first responsive design
- [ ] **APPLY**: Competitor analysis insights to design
- [ ] **VERIFICATION**: All existing assets used, competitive insights applied
- [ ] **STOP HERE**: Mark Phase 2 complete before Phase 3

### Phase 3: Interactive Elements & Effects (30-45 minutes)
**🔴 STOP: Create PHASE 3 TODO LIST ONLY (after Phase 2 complete)**
**🔍 CUSTOMER CHECK: Review contact methods and form requirements**
- [ ] Implement contact form with validation (Name, Email, Phone, Message)
- [ ] Add Framer Motion animations based on customer preferences
- [ ] Create smooth scroll navigation
- [ ] Add hover effects and micro-interactions
- [ ] Implement loading states and transitions
- [ ] Apply modern effects (glassmorphism, gradients, etc.)
- [ ] **VERIFICATION**: All animations working, form functional
- [ ] **STOP HERE**: Mark Phase 3 complete before Phase 4

### Phase 4: Content Integration & Personalization (30 minutes)
**🔴 STOP: Create PHASE 4 TODO LIST ONLY (after Phase 3 complete)**
**🔍 CUSTOMER CHECK: Review content requirements and personalization needs**
- [ ] **USE**: Content references from content-links.txt
- [ ] **USE**: Existing images from assets/branding/images/
- [ ] Implement lead capture strategy
- [ ] Add testimonials/social proof section
- [ ] Integrate WhatsApp/contact methods
- [ ] SEO optimization (meta tags, structured data)
- [ ] Apply AI-powered personalization (if requested)
- [ ] **VERIFICATION**: All existing content and images integrated
- [ ] **STOP HERE**: Mark Phase 4 complete before Phase 5

### Phase 5: Customer-Requested Integrations (20-30 minutes)
**🔴 STOP: Create PHASE 5 TODO LIST ONLY (after Phase 4 complete)**
**🔍 CUSTOMER CHECK FIRST: Review CUSTOMER_DATA.md integrations section**

ONLY implement what customer specifically requested:
- [ ] Payment processing integration (if in customer requirements)
- [ ] Email service integration (for contact forms - standard)
- [ ] Basic website analytics (Google Analytics - standard)
- [ ] Facebook Pixel (ONLY if customer requested social media marketing)
- [ ] CRM integration (if specified and not "Geen" or "None")
- [ ] Newsletter system (if requested)
- [ ] Other customer-specific integrations from their form
- [ ] **VERIFICATION**: Only requested integrations implemented
- [ ] **STOP HERE**: Mark Phase 5 complete before Phase 6

### Phase 6: Testing, Compliance & Deployment (30 minutes)
**🔴 STOP: Create PHASE 6 TODO LIST ONLY (after Phase 5 complete)**
**🔍 CUSTOMER CHECK: Review legal requirements and deployment preferences**
- [ ] Add compliance requirements (disclaimers, privacy policy)
- [ ] Test form submissions and integrations
- [ ] Mobile responsiveness testing
- [ ] Performance optimization (Lighthouse 95+)
- [ ] Deploy to Vercel with custom domain
- [ ] Final testing and optimization
- [ ] **FINAL VERIFICATION**: All features working, brand applied, assets used

---

## Testing Infrastructure (Only When Requested)

### ✅ Playwright Setup Summary (Completed in Phase 1)
After Phase 1 completion, your project will have:
- ✅ `@playwright/test` package installed
- ✅ `/test/` folder structure created
- ✅ `playwright.config.ts` configured
- ✅ Test scripts added to package.json
- ✅ Test README.md with instructions
- ✅ `npm run test --help` command working

### Important: Tests Are Created On-Demand Only
Tests are NOT created during the initial project setup. The testing infrastructure is installed and configured, but actual tests are only written when explicitly requested by the user.

### Test Folder Structure (Created Empty During Setup)
```
/test/
├── README.md                   # Instructions for creating tests
├── playwright.config.ts        # Pre-configured and ready
├── e2e/                       # Empty - tests go here when requested
├── page-objects/              # Empty - page objects go here when requested
├── fixtures/                  # Empty - custom fixtures go here when requested
└── utils/                     # Empty - helpers go here when requested
```

### Test README.md Content
The following README is created in the /test folder during setup:

```markdown
# Playwright Testing Guide

## When to Create Tests
Only create tests when explicitly requested. Common test scenarios:
- Contact form submissions
- Navigation flows
- Facebook Pixel events
- Mobile responsiveness
- Performance benchmarks

## How to Request a Test
Ask Claude: "Create a test for [specific feature]"
Example: "Create a test for the contact form that verifies email sending and Facebook Pixel tracking"

## Test Commands
- `npm run test:ui` - Open UI mode with browser preview (recommended for development)
- `npm test` - Run all tests headless
- `npm run test:debug` - Debug mode with breakpoints
- `npm run test:headed` - Run tests with visible browser
- `npm run test:codegen` - Record a new test by interacting with the site

## Test Organization
Tests will be created in /test/e2e/ with descriptive names:
- contact-form.spec.ts
- navigation.spec.ts
- facebook-pixel.spec.ts
- mobile-responsive.spec.ts
```

### Pre-configured playwright.config.ts
This configuration is created during setup:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
```

### Test Scripts Added to package.json
During setup, these scripts are added:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:debug": "playwright test --debug",
    "test:headed": "playwright test --headed",
    "test:report": "playwright show-report",
    "test:codegen": "playwright codegen http://localhost:3000"
  }
}
```

### Example Test Creation Workflow

1. **User Request**: "Create a test for the contact form"

2. **Claude Creates Test File**: `/test/e2e/contact-form.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should submit form and track Facebook Pixel Lead event', async ({ page }) => {
    await page.goto('/');
    
    // Fill out the form
    await page.fill('[name="name"]', 'Test User');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="message"]', 'Test message');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Verify success message
    await expect(page.locator('.success-message')).toBeVisible();
    
    // Verify Facebook Pixel event (if applicable)
    // This would check that fbq('track', 'Lead') was called
  });
});
```

3. **Running the Test**: 
   - User: "Run the contact form test with UI mode"
   - Claude executes: `npm run test:ui`
   - Result: Browser preview opens showing test execution

### Benefits of This Approach
1. **Zero Overhead**: No tests created until actually needed
2. **Visual Debugging**: UI mode provides browser preview for easy debugging
3. **Ready Infrastructure**: Everything configured, just ask to create tests
4. **Clear Documentation**: README explains when and how to test
5. **Multiple Browsers**: Tests can run on Chrome, Firefox, Safari, and mobile

### Common Test Scenarios to Request

- **Form Testing**: "Create a test for all form submissions"
- **Navigation**: "Create a test for the navigation menu on mobile"
- **Facebook Pixel**: "Create a test to verify Facebook Pixel events fire correctly"
- **Performance**: "Create a test to ensure page loads under 3 seconds"
- **Responsive**: "Create a test to verify mobile layout"
- **User Flows**: "Create a test for the complete user journey from landing to conversion"

---

## Post-Launch Optimization Checklist

### Performance Monitoring
- [ ] Lighthouse score verification (target: 95+)
- [ ] Core Web Vitals optimization
- [ ] Facebook Pixel event verification
- [ ] Conversion tracking confirmation

### Marketing Setup
- [ ] Facebook Pixel Helper verification
- [ ] Conversion API setup (advanced)
- [ ] A/B testing preparation
- [ ] Email automation integration

### SEO & Analytics
- [ ] Google Search Console setup
- [ ] Analytics goal configuration
- [ ] Keyword tracking setup
- [ ] Local SEO optimization (if applicable)

---

## Competitive Analysis Framework (Using Bright Data MCP)

When competitor URLs are provided, analyze:

### 1. Design & Layout Analysis
- Overall visual hierarchy
- Color schemes and branding approach
- Typography choices
- Layout patterns (grid vs. asymmetric)
- Use of whitespace and negative space

### 2. User Experience Flow
- Navigation structure
- Call-to-action placement and design
- Form design and fields
- Mobile responsiveness approach
- Loading speed and performance

### 3. Content Strategy
- Headline and messaging approach
- Value proposition presentation
- Social proof implementation
- Content organization
- SEO optimization level

### 4. Modern Design Elements
- Animation and interaction usage
- 2025 design trends implementation
- Accessibility features
- Visual effects and modern touches

### 5. Conversion Optimization
- Lead capture strategies
- Trust signals and credibility
- Urgency and scarcity tactics
- Personalization elements

---

## Ready to Execute Checklist

Once all questions are answered:

✅ **Project Foundation**
- Project goals and target audience defined
- Competitive analysis completed
- Design preferences established
- Technical requirements confirmed

✅ **Marketing Integration**
- Facebook Pixel strategy planned
- Event tracking requirements identified
- Lead capture flow designed
- Conversion goals established

✅ **Design & Content**
- Brand guidelines established
- Content strategy planned
- Modern design elements selected
- Compliance requirements identified

✅ **Technical Setup**
- Next.js 14 project structure planned
- Integrations identified
- Performance targets set
- Deployment strategy confirmed

**Next Step:** Create project-specific CLAUDE.md file and begin Phase 1 execution!