# Universal Next.js Project Execution Plan Template

## Instructions for Claude
When starting a new Next.js project, use this template to:

### **STEP 1: PROCESS CUSTOMER DATA (START HERE)**
1. **Read `CUSTOMER_DATA.md` file first** - This contains the GrowInity form submission
2. **Extract all customer information** from the email data in that file
3. **Auto-generate project files** using the extracted data
4. **Create project-specific CLAUDE.md** with customer specifications
5. **Populate asset folders** with available information
6. **Follow the 6-phase execution plan** for consistent delivery

### **STEP 2: VALIDATE TEMPLATE ASSETS**
1. **Read template assets**: Check the following files and folders for project information
2. **Verify competitive analysis**: Check competitor URLs and analysis requirements
3. **Confirm brand assets**: Ensure brand information is properly extracted
4. **Integrate modern best practices and tools**

**Note**: MCPs (Bright Data and Context-7) should already be installed before reaching this plan.

### Step 1: Process Customer Data from GrowInity Form
**First, read the `CUSTOMER_DATA.md` file to extract customer form submission:**

#### 1.1 Read Customer Data File
```
Read the CUSTOMER_DATA.md file and extract all customer information from the email content.
The email contains structured data from the GrowInity form with all project requirements.
```

#### 1.2 Extract Key Information
From the email data, extract:
- Project name and business goals
- Target audience demographics  
- Design preferences and brand requirements
- Technical specifications and integrations
- Budget, timeline, and contact information
- All optional fields that were completed

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

## Pre-Development Questions (Please Fill Out)

### 1. Project Overview & Goals
- **Project Name:** ___________
- **Primary Business Goal:** 
  - [ ] Lead generation/Email collection
  - [ ] Direct sales/E-commerce
  - [ ] Brand awareness
  - [ ] Service bookings
  - [ ] Community building
  - [ ] Other: ___________
- **Target Industry:** ___________
- **Brief Description:** ___________

### 2. Target Audience Analysis
- **Primary Demographics:** 
  - Age range: ___________
  - Gender focus: ___________
  - Income level: ___________
  - Location: ___________
- **Audience Pain Points:** ___________
- **User Personas (describe 2-3):** ___________
- **Audience Behavior Online:** ___________

### 3. Competitive Analysis & Research
**📁 Competitor URLs**: Add competitor websites to `./assets/competitor-urls.txt` (one URL per line)

**Additional Questions:**
- **What you like about competitors:** ___________
- **What you want to improve upon:** ___________
- **Direct competitors in your space:** ___________
- **Specific features to analyze:** ___________

**Note for Claude:** 
- Read `./assets/competitor-urls.txt` and analyze each URL with Bright Data MCP
- Focus on layout structures, UX flows, content strategies, visual hierarchy, CTAs, and modern design elements
- Compare findings with project goals and target audience

### 4. Advanced Design & Layout Preferences

#### 4.1 Visual Style Direction
- **Design Aesthetic:** 
  - [ ] Minimalist/Clean
  - [ ] Bold/Vibrant
  - [ ] Corporate/Professional
  - [ ] Creative/Artistic
  - [ ] Modern/Futuristic
  - [ ] Warm/Friendly
- **Color Preferences:** ___________
- **Fonts/Typography Style:** ___________
- **Mood/Atmosphere:** ___________

#### 4.2 Layout & Effects (2025 Trends)
- **Layout Preference:**
  - [ ] Symmetric/Traditional grid
  - [ ] Asymmetric/Bold blocks
  - [ ] Anti-design/Experimental
  - [ ] Minimalist with negative space
- **Animation Preferences:**
  - [ ] Micro-interactions (hover effects, button animations)
  - [ ] Scroll-triggered animations
  - [ ] 3D elements/immersive graphics
  - [ ] Parallax effects
  - [ ] Minimal/subtle animations only
- **Interactive Elements Desired:**
  - [ ] Animated buttons and CTAs
  - [ ] Loading animations
  - [ ] Page transitions
  - [ ] Interactive forms
  - [ ] Scroll progress indicators
- **Modern Effects:**
  - [ ] Glassmorphism
  - [ ] Gradient overlays
  - [ ] Custom illustrations
  - [ ] Video backgrounds
  - [ ] AI-powered personalization

### 5. Branding & Assets
**📁 Brand Information**: Fill out `./assets/branding/brand-info.txt` with your brand guidelines

**📁 Asset Folders**: Upload your assets to the appropriate folders:
- **Logos**: `./assets/branding/logos/` (SVG, PNG formats)
- **Images**: `./assets/branding/images/` (hero, product, team photos)

**Additional Brand Questions:**
- **Brand Voice/Tone:** ___________
- **Brand Personality:** ___________
- **Brand Values:** ___________
- **Unique Selling Proposition:** ___________

**Note for Claude:** 
- Read `./assets/branding/brand-info.txt` for color palette, typography, and brand guidelines
- Check asset folders for available logos and images
- Use brand information to customize CLAUDE.md file

### 6. Content Strategy
**📁 Content References**: Add content inspiration URLs to `./assets/content-links.txt`

**Core Content Questions:**
- **Primary Value Proposition:** ___________
- **Key Messages (3-5 main points):** ___________
- **Content Types Needed:**
  - [ ] Hero headlines
  - [ ] Product descriptions
  - [ ] About us/team
  - [ ] Testimonials
  - [ ] Blog posts
  - [ ] FAQ
  - [ ] Legal pages
- **SEO Keywords (if known):** ___________
- **Content Creation:** 
  - [ ] I'll provide all content
  - [ ] Help me create content
  - [ ] Claude should suggest content

**Note for Claude:** 
- Read `./assets/content-links.txt` for content inspiration and examples
- Use content references to understand desired tone and style
- Incorporate insights into content recommendations

### 7. Facebook Marketing & Pixel Integration
- **Facebook Marketing:**
  - [ ] Yes, Facebook is my primary marketing channel
  - [ ] Planning to use Facebook ads
  - [ ] No Facebook marketing planned
- **Facebook Pixel Setup:**
  - [ ] Already have Facebook Pixel ID
  - [ ] Need help setting up Facebook Pixel
  - [ ] Not using Facebook Pixel
- **Facebook Pixel ID (if available):** ___________
- **Events to Track:**
  - [ ] Page views
  - [ ] Lead generation (form submissions)
  - [ ] Contact button clicks
  - [ ] Purchase/conversion
  - [ ] Custom events: ___________
- **Conversion Goals:** ___________

### 8. Lead Capture & Contact Strategy
- **Primary Conversion Goal:**
  - [ ] Email collection
  - [ ] Phone calls
  - [ ] Form submissions
  - [ ] WhatsApp contact
  - [ ] Direct sales
  - [ ] Appointment booking
- **Form Fields Required:** ___________
- **Contact Methods:**
  - [ ] Contact form
  - [ ] WhatsApp integration
  - [ ] Phone number display
  - [ ] Social media links
  - [ ] Live chat
- **Follow-up Strategy:** ___________

### 9. Technical Requirements & Integrations
- **Required Integrations:**
  - [ ] Email marketing (which service: _______)
  - [ ] CRM system (which: _______)
  - [ ] Analytics (Google Analytics, etc.)
  - [ ] Payment processing (if applicable)
  - [ ] Booking system
  - [ ] Social media feeds
- **Special Functionality:**
  - [ ] Multi-language support
  - [ ] User accounts/login
  - [ ] Search functionality
  - [ ] Blog/CMS
  - [ ] E-commerce features
  - [ ] Interactive tools/calculators

### 10. SEO & Performance Requirements
- **SEO Priority Level:**
  - [ ] High - Need aggressive SEO strategy
  - [ ] Medium - Basic SEO optimization
  - [ ] Low - Minimal SEO focus
- **Target Keywords (if researched):** ___________
- **Local SEO Needed:** [ ] Yes [ ] No
- **Performance Targets:**
  - Lighthouse Score target: ___________
  - Loading time expectation: ___________
- **Mobile Priority:**
  - [ ] Mobile-first (majority mobile users)
  - [ ] Desktop-first (majority desktop users)
  - [ ] Equal priority

### 11. Budget & Timeline
- **Project Budget Range:**
  - [ ] Under $2,000
  - [ ] $2,000 - $5,000
  - [ ] $5,000 - $10,000
  - [ ] $10,000+
- **Timeline Urgency:**
  - [ ] ASAP (within 1 week)
  - [ ] Normal (2-3 weeks)
  - [ ] Flexible (1-2 months)
- **Launch Date (if specific):** ___________

### 12. Compliance & Legal Requirements
- **Industry Regulations:**
  - [ ] Health/supplement disclaimers
  - [ ] Financial services compliance
  - [ ] GDPR compliance needed
  - [ ] CCPA compliance needed
  - [ ] Affiliate disclosure requirements
  - [ ] Age verification
  - [ ] Other: ___________
- **Required Legal Pages:**
  - [ ] Privacy Policy
  - [ ] Terms of Service
  - [ ] Cookie Policy
  - [ ] Disclaimer
  - [ ] Affiliate Disclosure

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
Email: EmailJS or Resend
Deployment: Vercel
Analytics: Vercel Analytics (built-in)
Marketing: Facebook Pixel (when applicable)
Testing: Playwright (E2E) with UI Mode
```

### Facebook Pixel Implementation Guide

#### Setup for Next.js 14 App Router
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

#### Common Events Implementation
- **Lead Event:** Form submissions
- **Contact Event:** WhatsApp/contact button clicks
- **ViewContent Event:** Product/service page views
- **Custom Events:** Based on project needs

---

## Development Phases (6-Phase Approach)

### Phase 1: Setup & Foundation (30-45 minutes)
- [ ] Initialize Next.js project with TypeScript
- [ ] Install dependencies: Tailwind, Framer Motion, React Hook Form, Zod
- [ ] Configure Tailwind with custom brand colors
- [ ] Set up basic project structure
- [ ] Create reusable UI components (Button, Input)
- [ ] Configure Facebook Pixel (if applicable)
- [ ] Install Playwright testing framework: `npm init playwright@latest`
- [ ] Configure playwright.config.ts with webServer and base settings
- [ ] Create /test folder structure (empty, ready for tests)
- [ ] Add test scripts to package.json

### Phase 2: Core Layout & Design (45-60 minutes)
- [ ] Build responsive layout with header/footer
- [ ] Implement Hero section with brand-specific messaging
- [ ] Create product/service showcase sections
- [ ] Add benefits/features section with 2025 design trends
- [ ] Implement mobile-first responsive design
- [ ] Apply competitor analysis insights

### Phase 3: Interactive Elements & Effects (30-45 minutes)
- [ ] Implement contact form with validation
- [ ] Add Framer Motion animations based on preferences
- [ ] Create smooth scroll navigation
- [ ] Add hover effects and micro-interactions
- [ ] Implement loading states and transitions
- [ ] Apply modern effects (glassmorphism, gradients, etc.)

### Phase 4: Content Integration & Personalization (30 minutes)
- [ ] Add provided content and images
- [ ] Implement lead capture strategy
- [ ] Add testimonials/social proof section
- [ ] Integrate WhatsApp/contact methods
- [ ] SEO optimization (meta tags, structured data)
- [ ] Apply AI-powered personalization (if requested)

### Phase 5: Marketing & Analytics Integration (20-30 minutes)
- [ ] Configure Facebook Pixel events
- [ ] Set up conversion tracking
- [ ] Implement email integration
- [ ] Add analytics tracking
- [ ] Test all marketing integrations
- [ ] Verify event firing with Facebook Pixel Helper

### Phase 6: Testing, Compliance & Deployment (30 minutes)
- [ ] Add compliance requirements (disclaimers, privacy policy)
- [ ] Test form submissions and integrations
- [ ] Mobile responsiveness testing
- [ ] Performance optimization (Lighthouse 95+)
- [ ] Deploy to Vercel with custom domain
- [ ] Final testing and optimization

---

## Testing Infrastructure (Only When Requested)

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