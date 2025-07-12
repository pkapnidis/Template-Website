# Playwright Strategy Guide: When to Use What & Claude Code Prompts

## 🎯 Decision Framework: Choose Your Testing Approach

### **Quick Decision Tree**

**Is this a new feature/component?** → Start with **Basic Functionality Tests**
**Having user-reported bugs?** → Use **Bug Investigation Tests** 
**Preparing for production?** → Run **Comprehensive Test Suite**
**Mobile issues reported?** → Focus on **Mobile-Specific Testing**
**Performance concerns?** → Use **Load & Performance Tests**
**Cross-browser problems?** → Deploy **Cross-Platform Testing**

---

## 📋 Testing Scenarios & When to Use Each

### 1. **Basic Functionality Testing**
**When to Use:**
- New components or features
- After code changes
- Quick validation during development
- Regular development workflow

**Characteristics:**
- Fast execution (< 30 seconds)
- Core user paths only
- Single browser/device
- Headless mode

**Claude Code Prompt:**
```
Create basic Playwright tests for [component/feature name]. Test the main user interactions like [clicking buttons, form submission, navigation]. Use headless mode and focus on happy path scenarios. Include test IDs for reliable element selection.
```

### 2. **Mobile-Specific Testing**
**When to Use:**
- Mobile user complaints
- Touch interaction issues
- Responsive design verification
- Button/form accessibility problems

**Characteristics:**
- Multiple mobile viewports
- Touch event simulation
- Click area verification
- Visual debugging when needed

**Claude Code Prompt:**
```
I'm having mobile issues with [specific problem - e.g., "buttons not clickable on iPhone"]. Create comprehensive mobile Playwright tests that check different screen sizes, touch interactions, and click areas. Include headed mode for debugging and test multiple mobile devices.
```

### 3. **Bug Investigation & Debugging**
**When to Use:**
- User-reported issues
- Intermittent failures
- Complex interaction problems
- Element visibility issues

**Characteristics:**
- Headed mode for visualization
- Detailed logging and screenshots
- Step-by-step interaction testing
- Error reproduction focus

**Claude Code Prompt:**
```
Help me debug this issue: [describe the problem]. Create Playwright tests that reproduce the bug with headed mode, detailed logging, and screenshots. Test different scenarios that might trigger the issue and help identify the root cause.
```

### 4. **Comprehensive Pre-Production Testing**
**When to Use:**
- Before deployment
- Major feature releases
- Quality assurance cycles
- Client demonstrations

**Characteristics:**
- Full user journey testing
- Multiple browsers and devices
- All critical paths covered
- Detailed reporting

**Claude Code Prompt:**
```
Create a comprehensive Playwright test suite for production deployment. Cover all critical user journeys, test on multiple browsers and mobile devices, include edge cases, and generate detailed HTML reports. Focus on [list key features/pages].
```

### 5. **Cross-Platform & Browser Testing**
**When to Use:**
- Different browser behavior reported
- Client uses various devices
- Wide audience requirements
- Browser-specific issues

**Characteristics:**
- Multiple browser projects
- Various device emulations
- Compatibility verification
- Feature parity testing

**Claude Code Prompt:**
```
Set up cross-platform Playwright testing for [feature/website]. Test on Chrome, Firefox, Safari, and mobile browsers. Check for browser-specific issues with [specific functionality] and ensure consistent behavior across platforms.
```

### 6. **Performance & Load Testing**
**When to Use:**
- Slow page loads reported
- Large form submissions
- Image/media heavy pages
- User experience optimization

**Characteristics:**
- Network throttling
- Performance metrics collection
- Load time measurements
- Resource usage monitoring

**Claude Code Prompt:**
```
Create Playwright performance tests for [page/feature]. Measure load times, check for performance bottlenecks, test with slow networks, and identify optimization opportunities. Include metrics collection and performance budgets.
```

### 7. **Form & Input Validation Testing**
**When to Use:**
- Contact forms
- Checkout processes
- User registration
- Data input workflows

**Characteristics:**
- Input validation testing
- Error message verification
- Submission flow testing
- Edge case handling

**Claude Code Prompt:**
```
Create comprehensive form testing for [form name/type]. Test input validation, error messages, required fields, edge cases (long text, special characters), and successful submission flows. Include mobile keyboard interactions.
```

### 8. **Accessibility & UX Testing**
**When to Use:**
- Accessibility compliance
- Screen reader compatibility
- Keyboard navigation
- UX improvement initiatives

**Characteristics:**
- Keyboard-only navigation
- Focus management testing
- ARIA attribute verification
- Color contrast checking

**Claude Code Prompt:**
```
Create accessibility-focused Playwright tests for [component/page]. Test keyboard navigation, focus management, ARIA labels, and screen reader compatibility. Include mobile accessibility patterns and WCAG compliance checks.
```

---

## 🚀 Ready-to-Use Claude Code Prompts by Situation

### **Quick Development Testing**
```
Create fast Playwright tests for my latest changes to [component]. Use headless mode, test the main functionality, and run on mobile Chrome only. Keep it simple and fast for development workflow.
```

### **Mobile Bug Investigation**
```
Users report [specific mobile issue]. Create Playwright tests with headed mode to debug this. Test multiple mobile screen sizes, check element positioning, and help identify what's intercepting clicks/touches.
```

### **Pre-Launch Quality Check**
```
I'm about to deploy [feature/website]. Create a comprehensive Playwright test suite that covers all critical user paths, tests on multiple devices, and generates a detailed report I can review before going live.
```

### **Cross-Browser Issue**
```
This works in Chrome but not [other browser]. Create Playwright tests that run on multiple browsers to identify browser-specific issues with [specific functionality].
```

### **Performance Investigation**
```
Users complain about slow [page/feature]. Create Playwright tests that measure performance, simulate slow networks, and identify what's causing delays.
```

### **Form Problems**
```
My [contact/checkout/registration] form has issues. Create comprehensive Playwright tests that check validation, error handling, submission process, and mobile form interactions.
```

### **Responsive Design Verification**
```
Verify my responsive design works properly. Create Playwright tests that check layout, functionality, and user experience across different screen sizes from mobile to desktop.
```

### **Accessibility Compliance**
```
Make sure my [website/component] is accessible. Create Playwright tests that check keyboard navigation, focus management, and screen reader compatibility.
```

---

## 📊 Testing Strategy Matrix

| Situation | Speed | Coverage | Browsers | Debug Mode | Reporting |
|-----------|--------|----------|----------|------------|-----------|
| **Development** | Fast | Basic | Single | Headless | Minimal |
| **Mobile Issues** | Medium | Focused | Mobile | Headed | Screenshots |
| **Bug Investigation** | Slow | Deep | Targeted | Headed | Detailed |
| **Pre-Production** | Slow | Comprehensive | Multiple | Headless | Full HTML |
| **Cross-Browser** | Medium | Targeted | All | Headless | Comparison |
| **Performance** | Medium | Specific | Key | Headless | Metrics |
| **Accessibility** | Medium | Focused | Key | Headless | Compliance |

---

## 🎪 Escalation Path: When Tests Get Complex

### **Level 1: Simple & Fast**
- Basic functionality works
- Happy path testing
- Development workflow
- **Prompt:** "Quick Playwright test for [feature]"

### **Level 2: Investigation Mode**
- Something's not working
- Need visual debugging
- Mobile or browser issues
- **Prompt:** "Debug [issue] with headed Playwright tests"

### **Level 3: Comprehensive Coverage**
- Pre-production testing
- Client demos
- Quality assurance
- **Prompt:** "Full Playwright test suite for [project]"

### **Level 4: Specialized Testing**
- Performance optimization
- Accessibility compliance
- Complex integrations
- **Prompt:** "Specialized Playwright tests for [specific requirement]"

---

## 💡 Pro Tips for Prompting Claude Code

### **Be Specific About Context**
❌ "Test my website"
✅ "Test the mobile checkout process on my e-commerce site"

### **Mention Your Priority**
❌ "Create tests"
✅ "Create fast tests for development" or "Create thorough tests for production"

### **Include Your Problem**
❌ "Test the button"
✅ "Button clicks don't work on mobile - test and debug"

### **Specify Output Needs**
❌ "Run tests"
✅ "Run tests with HTML report for client review"

### **Mention Constraints**
❌ "Test everything"
✅ "Test critical paths only - we deploy tomorrow"

---

## 🎯 Quick Reference: Choose Your Prompt

**Just built something new?**
→ "Create basic Playwright tests for [new feature]"

**Users reporting issues?**
→ "Debug [reported issue] with Playwright tests using headed mode"

**About to deploy?**
→ "Create comprehensive pre-production Playwright tests"

**Mobile problems?**
→ "Create mobile-focused Playwright tests for [issue]"

**Cross-browser concerns?**
→ "Test [feature] across multiple browsers with Playwright"

**Performance issues?**
→ "Create performance-focused Playwright tests for [slow feature]"

**Accessibility requirements?**
→ "Create accessibility Playwright tests for [component]"

---

*Save this guide to always know exactly what to ask Claude Code for your testing needs!* 🎭✨