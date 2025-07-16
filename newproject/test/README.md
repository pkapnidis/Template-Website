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