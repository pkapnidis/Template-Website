# Bright Data MCP Comprehensive Website Analysis Prompt

## The Challenge
When using Bright Data MCP tools to scrape websites, you may encounter token limits (25,000 tokens max). Large websites with extensive HTML/CSS content will exceed this limit, requiring a strategic approach.

## Optimized Prompt for Complete Website Analysis

```
Use Bright Data MCP to perform comprehensive website analysis of [URL] with the following multi-step approach to avoid token limits:

STEP 1 - Initial Content Scraping:
- Use mcp__bright-data__scrape_as_markdown to get clean content structure
- Take a full-page screenshot using mcp__bright-data__scraping_browser_screenshot
- Get clean text content using mcp__bright-data__scraping_browser_get_text

STEP 2 - Technical Analysis (if HTML fails due to size):
- Use curl/bash to extract CSS file URLs from the main page
- Fetch the primary CSS file (usually largest) using curl with head -100 to get styling info
- Extract color codes, fonts, and framework details from CSS
- Use curl with grep to find specific styling patterns (colors, fonts, animations)

STEP 3 - Structured Data Extraction:
- Use mcp__bright-data__extract with custom prompts for specific data types:
  * Business information and contact details
  * Product/service information and pricing
  * Technical stack and frameworks used
  * Performance metrics and testimonials

STEP 4 - Detailed Styling Analysis:
- Navigate with mcp__bright-data__scraping_browser_navigate
- Extract HTML head section using curl for meta tags and CSS links
- Get font information, color palette, and layout specifications
- Document responsive breakpoints and component styling

STEP 5 - Comprehensive Documentation:
Create a detailed markdown file with:
- Business overview and contact information
- Complete product/service catalog with pricing
- Technical architecture and stack details
- Full color palette with hex codes
- Typography specifications and font details
- Layout measurements and responsive design
- Animation and interaction details
- Visual design elements and branding
- User experience features and functionality
- Marketing strategy and competitive advantages

IMPORTANT TECHNIQUES:
1. Always start with markdown scraping - it's most reliable and gives structure
2. Use browser navigation + screenshot for visual layout understanding
3. For large sites, use curl + head/grep to get CSS in manageable chunks
4. Extract styling info progressively rather than all at once
5. Use custom extraction prompts for specific business data
6. Break down HTML analysis into sections if needed
7. Compile everything into a comprehensive final document

OUTPUT FORMAT:
Generate a professional markdown analysis document covering all aspects: business, technical, design, and strategic insights with exact specifications and measurements.
```

## Pro Tips for Token Management

### 1. Progressive CSS Extraction
```bash
# Get CSS file URLs first
curl -s "URL" | grep -E "(css|stylesheet)" | head -20

# Fetch CSS in chunks
curl -s "CSS_URL" | head -100  # First 100 lines
curl -s "CSS_URL" | grep -E "(color|font|#)" | head -50  # Color/font specific
```

### 2. Strategic Data Extraction
- **Business Info**: Use extract tool with business-focused prompts
- **Technical Stack**: Look for framework clues in HTML head section
- **Styling**: Get CSS files separately, extract colors/fonts with grep
- **Layout**: Use screenshots and browser tools for visual understanding

### 3. Chunk HTML When Needed
If HTML is too large:
- Get head section: `curl -s "URL" | sed -n '1,100p'`
- Get specific sections: Use CSS selectors with browser tools
- Extract by components: Header, nav, main content, footer separately

### 4. Effective Use of Browser Tools
```
1. Navigate to site
2. Take screenshot for visual reference
3. Get clean text content
4. Extract specific elements if HTML fails
5. Use links tool to understand navigation structure
```

## Sample Implementation Order

1. **Quick Win**: Markdown scrape + screenshot + text extraction
2. **Technical**: CSS analysis via curl + head/grep commands
3. **Business**: Structured extraction with targeted prompts
4. **Styling**: Progressive CSS analysis in chunks
5. **Compilation**: Comprehensive markdown document

## Error Recovery Strategies

**If HTML scraping fails (token limit):**
- Switch to browser-based extraction
- Use curl with head/tail to get specific sections
- Extract CSS files separately
- Focus on head section for meta data

**If extract tool fails:**
- Use markdown content as fallback
- Parse business info from clean text
- Extract contact details manually from content

**If CSS is too large:**
- Get first 100-200 lines with curl + head
- Use grep to filter for colors: `grep -E "(#[0-9a-f]{6}|rgb\(|color:)"`
- Extract fonts: `grep -E "(font-family|@font-face)"`

This approach ensures comprehensive analysis while respecting token limits and provides fallback strategies for every potential bottleneck.