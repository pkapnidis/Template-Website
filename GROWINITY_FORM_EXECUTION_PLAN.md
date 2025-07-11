# GrowInity "Offerte Aanvragen" Form - Execution Plan

## Instructions for Claude Code
This execution plan will integrate a professional customer questionnaire form into your existing GrowInity Next.js website. The form will collect all information needed for flawless execution of website projects and send data via Resend email service.

**Important: Before starting, read the existing GrowInity project to extract design tokens, colors, fonts, and component patterns for seamless integration.**

---

## Phase 1: Project Analysis & Setup (45 minutes)

### 1.1 Analyze Existing GrowInity Project
```markdown
**Task: Read and extract existing design system**
1. Read all CSS/SCSS files to extract:
   - Color variables and theme tokens
   - Typography (font families, sizes, weights)
   - Spacing and layout patterns
   - Button styles and hover effects
   - Input field designs
   - Card/container styling

2. Examine existing components to understand:
   - Component architecture patterns
   - Framer Motion animation styles
   - Responsive breakpoints
   - Navigation structure and styling

3. Identify the main layout components:
   - Header/Navigation component location
   - Footer component
   - Page layout patterns
```

### 1.2 Create New Route Structure
```typescript
// Create new route: app/offerte-aanvragen/page.tsx
// Follow existing GrowInity routing patterns
```

### 1.3 Install Required Dependencies
```bash
npm install react-hook-form zod @hookform/resolvers resend
npm install @types/node (if not already installed)
```

---

## Phase 2: Navigation Integration (30 minutes)

### 2.1 Update Navigation Component
```typescript
**Task: Add "Offerte Aanvragen" to existing navigation**

// Find the navigation component (likely in components/nav or layout)
// Add new menu item matching existing style patterns:

const navigationItems = [
  // ... existing items
  {
    name: "Offerte Aanvragen",
    href: "/offerte-aanvragen",
    // Apply same styling patterns as other nav items
  }
];

// Ensure mobile navigation also includes the new item
// Match hover effects, active states, and styling
```

---

## Phase 3: Form Component Development (2-3 hours)

### 3.1 Create Form Schema with Zod Validation
```typescript
// lib/schemas/customer-form.ts
import { z } from 'zod';

export const customerFormSchema = z.object({
  // Project Overview (Required)
  projectName: z.string().min(2, "Projectnaam is verplicht").max(100),
  businessGoal: z.enum([
    "leads-genereren",
    "directe-verkoop", 
    "merkbekendheid",
    "service-boekingen",
    "community-opbouw",
    "anders"
  ]),
  businessGoalOther: z.string().optional(),
  industry: z.string().max(100).optional(),
  businessDescription: z.string().max(500).optional(),
  
  // Target Audience (Optional)
  customerAge: z.string().max(50).optional(),
  customerLocation: z.string().max(100).optional(),
  customerProblems: z.string().max(300).optional(),
  customerBehavior: z.string().max(300).optional(),
  
  // Inspiration (Optional)
  inspirationUrls: z.array(z.string().url().optional()).optional(),
  inspirationLikes: z.string().max(300).optional(),
  inspirationDifference: z.string().max(300).optional(),
  
  // Design Preferences
  designStyle: z.array(z.enum([
    "minimalistisch",
    "bold-levendig",
    "zakelijk-professioneel",
    "creatief-artistiek", 
    "modern-futuristisch",
    "warm-vriendelijk"
  ])),
  preferredColors: z.string().max(100).optional(),
  desiredMood: z.string().max(100),
  animations: z.array(z.enum([
    "subtiele-hover",
    "scroll-animaties", 
    "gradient-overlays",
    "video-achtergronden",
    "minimaal-geen"
  ])).optional(),
  
  // Brand Message  
  uniqueSellingPoint: z.string().min(10, "Unieke verkooppunt is verplicht").max(300),
  brandTone: z.string().max(100),
  keyMessages: z.array(z.string().max(200)).max(3).optional(),
  hasAssets: z.array(z.enum([
    "logo",
    "professionele-fotos", 
    "bestaande-content",
    "productafbeeldingen",
    "team-fotos"
  ])).optional(),
  
  // Website Content
  websiteComponents: z.array(z.enum([
    "homepage-boodschap",
    "over-ons",
    "producten-diensten",
    "contactformulier", 
    "testimonials",
    "blog",
    "faq",
    "privacy-beleid"
  ])),
  contactMethods: z.array(z.enum([
    "contactformulier",
    "whatsapp-integratie",
    "telefoonnummer",
    "social-media", 
    "live-chat"
  ])),
  formFields: z.string().max(200).optional(),
  
  // Facebook Marketing (Optional)
  usesFacebook: z.enum(["ja-hoofdkanaal", "plan-advertenties", "geen-facebook"]).optional(),
  facebookPixel: z.enum(["ja-heb-id", "nee-help-opzetten", "weet-niet"]).optional(),
  facebookPixelId: z.string().optional(),
  trackingGoals: z.array(z.enum([
    "paginabezoeken",
    "formulier-inzendingen", 
    "contact-clicks",
    "whatsapp-clicks",
    "downloads"
  ])).optional(),
  newsletterSystem: z.string().max(100).optional(),
  
  // Technical Requirements (Optional)
  integrations: z.array(z.enum([
    "google-analytics",
    "boekingssysteem",
    "betaalverwerking", 
    "crm-systeem",
    "newsletter-tool",
    "social-media-feeds"
  ])).optional(),
  crmSystem: z.string().max(100).optional(),
  languages: z.enum(["alleen-nederlands", "nederlands-engels", "andere-talen"]),
  otherLanguages: z.string().max(100).optional(),
  
  // SEO & Performance (Optional)
  seoImportance: z.enum([
    "heel-belangrijk",
    "gemiddeld-belangrijk", 
    "niet-zo-belangrijk"
  ]).optional(),
  targetKeywords: z.string().max(200).optional(),
  customerType: z.enum(["lokaal", "landelijk-internationaal", "weet-niet"]).optional(),
  deviceUsage: z.enum([
    "vooral-telefoon",
    "vooral-computer",
    "beide-even-veel"
  ]).optional(),
  
  // Budget & Timeline
  budget: z.enum([
    "onder-1500",
    "1500-3000", 
    "3000-6000",
    "6000-plus"
  ]),
  timeline: z.enum([
    "zo-snel-mogelijk",
    "normale-planning",
    "geen-haast"
  ]),
  specificDate: z.string().optional(),
  
  // Legal Requirements (Optional)
  industryRules: z.array(z.enum([
    "gezondheid-disclaimers",
    "financiele-diensten",
    "privacy-regels",
    "leeftijdscontrole", 
    "affiliate-vermelding",
    "weet-niet"
  ])).optional(),
  industryRulesOther: z.string().max(100).optional(),
  legalPages: z.array(z.enum([
    "privacybeleid",
    "algemene-voorwaarden",
    "cookie-beleid", 
    "disclaimer"
  ])).optional(),
  
  // Hosting & Support
  hostingPreference: z.enum([
    "growinity-regelt",
    "heb-al-hosting",
    "weet-nog-niet"
  ]),
  existingWebsite: z.string().max(200).optional(),
  supportType: z.enum([
    "eenmalige-oplevering",
    "maandelijks-onderhoud",
    "training-zelf-beheer"
  ]),
  
  // Additional Information
  additionalInfo: z.string().max(500).optional(),
  
  // Contact Information (Required)
  contactName: z.string().min(2, "Naam is verplicht").max(100),
  contactEmail: z.string().email("Geldig email adres is verplicht"),
  contactPhone: z.string().max(20).optional(),
  companyName: z.string().max(100).optional()
});

export type CustomerFormData = z.infer<typeof customerFormSchema>;
```

### 3.2 Create Multi-Step Form Component
```typescript
// components/customer-form/CustomerForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { customerFormSchema, type CustomerFormData } from '@/lib/schemas/customer-form';

// Import existing GrowInity components and styles
// Use existing Button, Input, Card components from the project

const STEPS = [
  { id: 'project', title: 'Uw Project', subtitle: 'Vertel ons over uw project' },
  { id: 'audience', title: 'Uw Klanten', subtitle: 'Wie zijn uw doelgroep?' },
  { id: 'design', title: 'Design & Stijl', subtitle: 'Hoe moet het eruitzien?' },
  { id: 'content', title: 'Content & Boodschap', subtitle: 'Wat wilt u vertellen?' },
  { id: 'features', title: 'Functionaliteiten', subtitle: 'Wat moet er op uw website?' },
  { id: 'marketing', title: 'Marketing', subtitle: 'Hoe wilt u klanten bereiken?' },
  { id: 'technical', title: 'Technische Wensen', subtitle: 'Speciale vereisten?' },
  { id: 'business', title: 'Budget & Planning', subtitle: 'Wanneer en voor hoeveel?' },
  { id: 'contact', title: 'Contact', subtitle: 'Hoe kunnen we u bereiken?' }
];

export default function CustomerForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormSchema),
    mode: 'onChange'
  });

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: CustomerFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        // Success handling - show thank you message
        // Redirect or show success state
      } else {
        throw new Error('Formulier verzending mislukt');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Show error message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar - Use existing GrowInity styling */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Offerte Aanvragen</h1>
          <span className="text-sm text-gray-600">
            Stap {currentStep + 1} van {STEPS.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            className="bg-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step Content Components */}
            {currentStep === 0 && <ProjectStep form={form} />}
            {currentStep === 1 && <AudienceStep form={form} />}
            {currentStep === 2 && <DesignStep form={form} />}
            {currentStep === 3 && <ContentStep form={form} />}
            {currentStep === 4 && <FeaturesStep form={form} />}
            {currentStep === 5 && <MarketingStep form={form} />}
            {currentStep === 6 && <TechnicalStep form={form} />}
            {currentStep === 7 && <BusinessStep form={form} />}
            {currentStep === 8 && <ContactStep form={form} />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Use existing GrowInity button styles */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="btn-secondary"
          >
            Vorige
          </button>
          
          {currentStep < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Volgende
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
            >
              {isSubmitting ? 'Versturen...' : 'Offerte Aanvragen'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
```

### 3.3 Create Individual Step Components
```typescript
// components/customer-form/steps/ProjectStep.tsx
// components/customer-form/steps/AudienceStep.tsx
// components/customer-form/steps/DesignStep.tsx
// etc.

// Each step component should:
// 1. Use existing GrowInity form styling
// 2. Include clear labels and help text
// 3. Show which fields are optional vs required
// 4. Use appropriate input types (text, select, checkbox, radio)
// 5. Include validation error displays
```

---

## Phase 4: Security Implementation (30 minutes)

### 4.1 Rate Limiting Middleware
```typescript
// lib/rate-limit.ts
import { NextRequest } from 'next/server';

const RATE_LIMIT_MAP = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 form submissions per 15 minutes

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Clean old entries
  for (const [key, value] of RATE_LIMIT_MAP) {
    if (value.timestamp < windowStart) {
      RATE_LIMIT_MAP.delete(key);
    }
  }
  
  const current = RATE_LIMIT_MAP.get(ip);
  
  if (!current) {
    RATE_LIMIT_MAP.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (current.timestamp < windowStart) {
    RATE_LIMIT_MAP.set(ip, { count: 1, timestamp: now });
    return true;
  }
  
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  current.count++;
  return true;
}
```

### 4.2 Input Sanitization
```typescript
// lib/sanitize.ts
export function sanitizeInput(input: string): string {
  // Remove potential XSS vectors
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

export function sanitizeFormData(data: any): any {
  const sanitized = { ...data };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key]);
    } else if (Array.isArray(sanitized[key])) {
      sanitized[key] = sanitized[key].map((item: any) => 
        typeof item === 'string' ? sanitizeInput(item) : item
      );
    }
  }
  
  return sanitized;
}
```

---

## Phase 5: Email Integration with Resend (45 minutes)

### 5.1 Environment Variables Setup
```bash
# Add to .env.local
RESEND_API_KEY=your_resend_api_key_here
BUSINESS_EMAIL=info@growinity.nl
NEXT_PUBLIC_SITE_URL=https://growinity.nl
```

### 5.2 Email Templates
```typescript
// lib/email-templates.ts
import { CustomerFormData } from '@/lib/schemas/customer-form';

export function generateBusinessEmail(data: CustomerFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nieuwe Offerte Aanvraag - GrowInity</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .section { margin-bottom: 30px; }
    .section h3 { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 5px; }
    .field { margin-bottom: 10px; }
    .field strong { color: #333; }
    .optional { color: #666; font-style: italic; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🌱 Nieuwe Offerte Aanvraag</h1>
    <p>GrowInity - Professionele Website Ontwikkeling</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h3>📋 Project Overzicht</h3>
      <div class="field"><strong>Projectnaam:</strong> ${data.projectName}</div>
      <div class="field"><strong>Hoofddoel:</strong> ${data.businessGoal}</div>
      ${data.businessGoalOther ? `<div class="field"><strong>Anders:</strong> ${data.businessGoalOther}</div>` : ''}
      ${data.industry ? `<div class="field"><strong>Branche:</strong> ${data.industry}</div>` : ''}
      ${data.businessDescription ? `<div class="field"><strong>Beschrijving:</strong> ${data.businessDescription}</div>` : ''}
    </div>

    <div class="section">
      <h3>🎯 Doelgroep</h3>
      ${data.customerAge ? `<div class="field"><strong>Leeftijd:</strong> ${data.customerAge}</div>` : '<div class="optional">Niet ingevuld</div>'}
      ${data.customerLocation ? `<div class="field"><strong>Locatie:</strong> ${data.customerLocation}</div>` : ''}
      ${data.customerProblems ? `<div class="field"><strong>Klantproblemen:</strong> ${data.customerProblems}</div>` : ''}
      ${data.customerBehavior ? `<div class="field"><strong>Online gedrag:</strong> ${data.customerBehavior}</div>` : ''}
    </div>

    <div class="section">
      <h3>🎨 Design Voorkeuren</h3>
      <div class="field"><strong>Stijl:</strong> ${data.designStyle.join(', ')}</div>
      ${data.preferredColors ? `<div class="field"><strong>Kleuren:</strong> ${data.preferredColors}</div>` : ''}
      <div class="field"><strong>Gewenste sfeer:</strong> ${data.desiredMood}</div>
      ${data.animations?.length ? `<div class="field"><strong>Animaties:</strong> ${data.animations.join(', ')}</div>` : ''}
    </div>

    <div class="section">
      <h3>💼 Bedrijfsinformatie</h3>
      <div class="field"><strong>Uniek verkooppunt:</strong> ${data.uniqueSellingPoint}</div>
      <div class="field"><strong>Merktoon:</strong> ${data.brandTone}</div>
      ${data.keyMessages?.length ? `<div class="field"><strong>Belangrijkste boodschappen:</strong><ul>${data.keyMessages.map(msg => `<li>${msg}</li>`).join('')}</ul></div>` : ''}
      ${data.hasAssets?.length ? `<div class="field"><strong>Beschikbare materialen:</strong> ${data.hasAssets.join(', ')}</div>` : ''}
    </div>

    <div class="section">
      <h3>🌐 Website Functionaliteiten</h3>
      <div class="field"><strong>Gewenste onderdelen:</strong> ${data.websiteComponents.join(', ')}</div>
      <div class="field"><strong>Contactmogelijkheden:</strong> ${data.contactMethods.join(', ')}</div>
      ${data.formFields ? `<div class="field"><strong>Formuliervelden:</strong> ${data.formFields}</div>` : ''}
    </div>

    ${data.usesFacebook && data.usesFacebook !== 'geen-facebook' ? `
    <div class="section">
      <h3>📱 Facebook Marketing</h3>
      <div class="field"><strong>Facebook gebruik:</strong> ${data.usesFacebook}</div>
      ${data.facebookPixel ? `<div class="field"><strong>Facebook Pixel:</strong> ${data.facebookPixel}</div>` : ''}
      ${data.facebookPixelId ? `<div class="field"><strong>Pixel ID:</strong> ${data.facebookPixelId}</div>` : ''}
      ${data.trackingGoals?.length ? `<div class="field"><strong>Tracking doelen:</strong> ${data.trackingGoals.join(', ')}</div>` : ''}
      ${data.newsletterSystem ? `<div class="field"><strong>Newsletter systeem:</strong> ${data.newsletterSystem}</div>` : ''}
    </div>
    ` : ''}

    ${data.integrations?.length ? `
    <div class="section">
      <h3>⚙️ Technische Integraties</h3>
      <div class="field"><strong>Gewenste integraties:</strong> ${data.integrations.join(', ')}</div>
      ${data.crmSystem ? `<div class="field"><strong>CRM systeem:</strong> ${data.crmSystem}</div>` : ''}
      <div class="field"><strong>Talen:</strong> ${data.languages}</div>
      ${data.otherLanguages ? `<div class="field"><strong>Andere talen:</strong> ${data.otherLanguages}</div>` : ''}
    </div>
    ` : ''}

    ${data.seoImportance ? `
    <div class="section">
      <h3>🔍 SEO & Vindbaarheid</h3>
      <div class="field"><strong>SEO prioriteit:</strong> ${data.seoImportance}</div>
      ${data.targetKeywords ? `<div class="field"><strong>Zoektermen:</strong> ${data.targetKeywords}</div>` : ''}
      ${data.customerType ? `<div class="field"><strong>Klanttype:</strong> ${data.customerType}</div>` : ''}
      ${data.deviceUsage ? `<div class="field"><strong>Apparaat gebruik:</strong> ${data.deviceUsage}</div>` : ''}
    </div>
    ` : ''}

    <div class="section">
      <h3>💰 Budget & Planning</h3>
      <div class="field"><strong>Budget:</strong> ${data.budget}</div>
      <div class="field"><strong>Timeline:</strong> ${data.timeline}</div>
      ${data.specificDate ? `<div class="field"><strong>Specifieke datum:</strong> ${data.specificDate}</div>` : ''}
    </div>

    ${data.industryRules?.length ? `
    <div class="section">
      <h3>📋 Wettelijke Vereisten</h3>
      <div class="field"><strong>Branche regels:</strong> ${data.industryRules.join(', ')}</div>
      ${data.industryRulesOther ? `<div class="field"><strong>Andere regels:</strong> ${data.industryRulesOther}</div>` : ''}
      ${data.legalPages?.length ? `<div class="field"><strong>Juridische pagina's:</strong> ${data.legalPages.join(', ')}</div>` : ''}
    </div>
    ` : ''}

    <div class="section">
      <h3>🏠 Hosting & Ondersteuning</h3>
      <div class="field"><strong>Hosting voorkeur:</strong> ${data.hostingPreference}</div>
      ${data.existingWebsite ? `<div class="field"><strong>Bestaande website:</strong> ${data.existingWebsite}</div>` : ''}
      <div class="field"><strong>Ondersteuning type:</strong> ${data.supportType}</div>
    </div>

    ${data.additionalInfo ? `
    <div class="section">
      <h3>📝 Aanvullende Informatie</h3>
      <div class="field">${data.additionalInfo}</div>
    </div>
    ` : ''}

    <div class="section">
      <h3>📞 Contactgegevens</h3>
      <div class="field"><strong>Naam:</strong> ${data.contactName}</div>
      <div class="field"><strong>Email:</strong> ${data.contactEmail}</div>
      ${data.contactPhone ? `<div class="field"><strong>Telefoon:</strong> ${data.contactPhone}</div>` : ''}
      ${data.companyName ? `<div class="field"><strong>Bedrijfsnaam:</strong> ${data.companyName}</div>` : ''}
    </div>
  </div>
  
  <div class="footer">
    <p>Deze offerte aanvraag is verzonden via growinity.nl</p>
    <p>© 2025 GrowInity - Professionele Website Ontwikkeling</p>
  </div>
</body>
</html>
  `;
}

export function generateCustomerConfirmationEmail(data: CustomerFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bedankt voor uw offerte aanvraag - GrowInity</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .highlight { background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🌱 Bedankt, ${data.contactName}!</h1>
    <p>Uw offerte aanvraag is succesvol ontvangen</p>
  </div>
  
  <div class="content">
    <p>Beste ${data.contactName},</p>
    
    <p>Hartelijk dank voor uw interesse in GrowInity! We hebben uw offerte aanvraag voor <strong>${data.projectName}</strong> succesvol ontvangen.</p>
    
    <div class="highlight">
      <h3>⏰ Wat gebeurt er nu?</h3>
      <ul>
        <li>We bekijken uw aanvraag binnen 24 uur</li>
        <li>U ontvangt een persoonlijke offerte op maat</li>
        <li>We plannen een gratis consult om uw wensen te bespreken</li>
      </ul>
    </div>
    
    <p>Heeft u nog vragen of wilt u iets toevoegen aan uw aanvraag? Neem gerust contact met ons op:</p>
    
    <ul>
      <li>📧 Email: info@growinity.nl</li>
      <li>🌐 Website: www.growinity.nl</li>
    </ul>
    
    <p>We kijken ernaar uit om samen uw perfecte website te bouwen!</p>
    
    <p>Met vriendelijke groet,<br>
    Het GrowInity Team</p>
  </div>
  
  <div class="footer">
    <p>© 2025 GrowInity - Professionele Website Ontwikkeling</p>
    <p>www.growinity.nl | info@growinity.nl</p>
  </div>
</body>
</html>
  `;
}
```

### 5.3 API Route for Form Submission
```typescript
// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { customerFormSchema } from '@/lib/schemas/customer-form';
import { sanitizeFormData } from '@/lib/sanitize';
import { rateLimit } from '@/lib/rate-limit';
import { generateBusinessEmail, generateCustomerConfirmationEmail } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel aanvragen. Probeer het later opnieuw.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Sanitize input data
    const sanitizedData = sanitizeFormData(body);
    
    // Validate with Zod schema
    const validationResult = customerFormSchema.safeParse(sanitizedData);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Ongeldige formuliergegevens', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Send business notification email
    await resend.emails.send({
      from: 'Offerte Aanvragen <noreply@growinity.nl>',
      to: [process.env.BUSINESS_EMAIL!],
      subject: `Nieuwe Offerte Aanvraag: ${formData.projectName}`,
      html: generateBusinessEmail(formData),
    });

    // Send customer confirmation email
    await resend.emails.send({
      from: 'GrowInity <info@growinity.nl>',
      to: [formData.contactEmail],
      subject: 'Bedankt voor uw offerte aanvraag - GrowInity',
      html: generateCustomerConfirmationEmail(formData),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Formulier succesvol verzonden' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van het formulier' },
      { status: 500 }
    );
  }
}
```

---

## Phase 6: Page Layout & Integration (30 minutes)

### 6.1 Create Main Form Page
```typescript
// app/offerte-aanvragen/page.tsx
import { Metadata } from 'next';
import CustomerForm from '@/components/customer-form/CustomerForm';

export const metadata: Metadata = {
  title: 'Offerte Aanvragen | GrowInity',
  description: 'Vraag een gratis offerte aan voor uw professionele website. GrowInity maakt websites die converteren.',
  keywords: 'website offerte, website laten maken, professionele website, Next.js website',
};

export default function OfferteAanvragenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Use existing GrowInity styling */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vraag uw gratis offerte aan
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Vertel ons over uw project en ontvang een persoonlijke offerte op maal
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <span>⏱️ 5 minuten invullen</span>
            <span>•</span>
            <span>🎯 Offerte op maat</span>
            <span>•</span>
            <span>💬 Gratis consult</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <CustomerForm />
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Waarom kiezen voor GrowInity?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold mb-2">Snelle Oplevering</h3>
              <p className="text-gray-600">Uw website binnen 2-3 weken online</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Eerlijke Prijzen</h3>
              <p className="text-gray-600">Transparante prijzen zonder verborgen kosten</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold mb-2">Persoonlijke Service</h3>
              <p className="text-gray-600">Direct contact met uw projectmanager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## Phase 7: Resend Setup Instructions (15 minutes)

### 7.1 Resend Account Setup
```markdown
**Step-by-Step Resend Setup:**

1. **Create Resend Account:**
   - Go to https://resend.com
   - Sign up with your GrowInity email
   - Verify your email address

2. **Get API Key:**
   - Go to "API Keys" in Resend dashboard
   - Click "Create API Key"
   - Name it "GrowInity Form"
   - Copy the API key and add to .env.local:
     ```
     RESEND_API_KEY=re_xxxxxxxxxx
     ```

3. **Domain Setup (Recommended):**
   - Go to "Domains" in Resend dashboard
   - Add "growinity.nl" domain
   - Add the provided DNS records to your domain provider
   - Verify domain (may take up to 24 hours)

4. **Environment Variables:**
   Add to your .env.local file:
   ```
   RESEND_API_KEY=your_api_key_here
   BUSINESS_EMAIL=info@growinity.nl
   NEXT_PUBLIC_SITE_URL=https://growinity.nl
   ```

5. **Test Email Sending:**
   - Use the test form to send a sample email
   - Check both business email and customer confirmation
   - Verify emails appear in inbox (not spam)
```

---

## Phase 8: Testing & Deployment (30 minutes)

### 8.1 Testing Checklist
```markdown
**Pre-Deployment Testing:**

□ **Form Functionality:**
  - Test all form steps and navigation
  - Verify form validation (required fields)
  - Test optional field behavior
  - Check mobile responsiveness
  - Verify animations and transitions

□ **Email Delivery:**
  - Test business notification email
  - Test customer confirmation email
  - Verify email formatting
  - Check spam folder if needed

□ **Security Testing:**
  - Test rate limiting (try submitting multiple times)
  - Verify input sanitization
  - Check XSS prevention
  - Test with malicious input

□ **Navigation Integration:**
  - Verify "Offerte Aanvragen" appears in menu
  - Test navigation styling matches existing
  - Check mobile menu functionality
  - Verify active states

□ **Performance:**
  - Test form loading speed
  - Verify no layout shifts
  - Check bundle size impact
  - Test on various devices
```

### 8.2 Deployment to Vercel
```markdown
**Deployment Steps:**

1. **Environment Variables:**
   - Add all environment variables to Vercel dashboard
   - Set RESEND_API_KEY in production environment
   - Add BUSINESS_EMAIL and other configs

2. **Deploy:**
   - Commit changes to Git
   - Push to main branch
   - Vercel will automatically deploy

3. **Post-Deployment Verification:**
   - Test form submission on production
   - Verify email delivery works
   - Check all links and navigation
   - Test mobile functionality

4. **Monitor:**
   - Check Resend dashboard for email delivery stats
   - Monitor form submissions
   - Watch for any error logs in Vercel
```

---

## Security Considerations & Best Practices

### Input Validation & Sanitization
- All inputs are validated with Zod schemas
- XSS prevention through input sanitization
- SQL injection protection (no direct DB queries)
- Rate limiting to prevent spam (3 submissions per 15 minutes)

### Email Security
- Business emails contain sanitized data only
- No sensitive API keys in client-side code
- Secure environment variable handling
- Email content validation before sending

### Form Security
- CSRF protection through Next.js
- Secure API routes with proper error handling
- Input length limits to prevent abuse
- File upload restrictions (if implemented)

---

## Mapping to Universal Execution Plan

### Direct Data Mapping
```typescript
// This form data maps directly to execution plan sections:

// Section 1: Project Overview & Goals
projectName → Project Name
businessGoal → Primary Business Goal
industry → Target Industry
businessDescription → Brief Description

// Section 2: Target Audience Analysis
customerAge → Age range
customerLocation → Location
customerProblems → Audience Pain Points
customerBehavior → Audience Behavior Online

// Section 4: Advanced Design & Layout Preferences
designStyle → Design Aesthetic
preferredColors → Color Preferences
desiredMood → Mood/Atmosphere
animations → Animation Preferences

// Section 5: Branding & Assets
uniqueSellingPoint → Unique Selling Proposition
brandTone → Brand Voice/Tone
keyMessages → Key Messages
hasAssets → Available Assets

// Section 7: Facebook Marketing & Pixel Integration
usesFacebook → Facebook Marketing
facebookPixel → Facebook Pixel Setup
facebookPixelId → Facebook Pixel ID
trackingGoals → Events to Track

// Section 9: Technical Requirements & Integrations
integrations → Required Integrations
crmSystem → CRM system
languages → Multi-language support

// Section 10: SEO & Performance Requirements
seoImportance → SEO Priority Level
targetKeywords → Target Keywords
customerType → Local SEO Needed
deviceUsage → Mobile Priority

// Section 11: Budget & Timeline
budget → Project Budget Range
timeline → Timeline Urgency
specificDate → Launch Date

// Section 12: Compliance & Legal Requirements
industryRules → Industry Regulations
legalPages → Required Legal Pages
```

---

## Success Criteria

✅ **Form successfully integrated into existing GrowInity website**
✅ **"Offerte Aanvragen" navigation menu item added and styled**
✅ **Multi-step form collects all execution plan requirements**
✅ **Professional email delivery via Resend**
✅ **Security measures implemented (rate limiting, sanitization, validation)**
✅ **Mobile-responsive design matching GrowInity branding**
✅ **Customer confirmation emails with professional formatting**
✅ **Form data maps directly to Universal Execution Plan sections**

---

**Estimated Total Implementation Time: 4-5 hours**

This execution plan provides everything needed to create a professional, secure customer questionnaire form that seamlessly integrates with your existing GrowInity website and collects all necessary information for flawless project execution.