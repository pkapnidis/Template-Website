# MCP Setup Guide - Required Before Project Execution

## ⚠️ IMPORTANT: Run This FIRST Before Any Project

Before using the Universal Next.js Project Execution Plan, you MUST install the required MCP tools. This only needs to be done once per Claude session.

---

## 🔧 Required MCP Installation

Run these commands in your Claude terminal to install the necessary MCP tools:

### 1. Install Bright Data MCP (for competitor analysis)
```bash
claude mcp add --transport http bright-data "https://server.smithery.ai/@luminati-io/brightdata-mcp/mcp?api_key=b08ba228-c8b2-4316-82a2-6718b5a66b50&profile=allied-tortoise-xgvJ5k"
```

### 2. Install Context-7 MCP (for documentation and research)
```bash
claude mcp add --transport http context-7 "https://server.smithery.ai/@upstash/context7-mcp/mcp?api_key=b08ba228-c8b2-4316-82a2-6718b5a66b50&profile=allied-tortoise-xgvJ5k"
```

---

## ✅ Installation Verification

After running both commands, verify installation by checking:
- Bright Data MCP is available for website analysis
- Context-7 MCP is available for documentation research

---

## 🎯 What These MCPs Enable

### Bright Data MCP
- **Competitor Analysis**: Fetch and analyze competitor websites
- **Layout Research**: Extract design patterns and structures
- **Content Analysis**: Review competitor content strategies
- **UX Research**: Understand user flows and interactions

### Context-7 MCP
- **Documentation Research**: Access latest framework documentation
- **Best Practices**: Get up-to-date coding standards
- **Technical Solutions**: Find solutions for implementation challenges
- **Library Research**: Understand tool capabilities and usage

---

## 🚀 Next Steps

1. ✅ **Install MCPs** (run the commands above)
2. ✅ **Verify installation** (check that both MCPs are available)
3. ✅ **Proceed to** `UNIVERSAL_NEXTJS_PROJECT_EXECUTION_PLAN.md`

---

## 🔄 When to Re-install

You may need to re-install MCPs if:
- Starting a new Claude session
- Claude cannot access the MCP tools
- You receive MCP-related errors

Simply re-run the installation commands above.

---
 
## ⚡ Quick Installation Script

Copy and paste both commands at once:

```bash
claude mcp add --transport http bright-data "https://server.smithery.ai/@luminati-io/brightdata-mcp/mcp?api_key=b08ba228-c8b2-4316-82a2-6718b5a66b50&profile=allied-tortoise-xgvJ5k"

claude mcp add --transport http context-7 "https://server.smithery.ai/@upstash/context7-mcp/mcp?api_key=b08ba228-c8b2-4316-82a2-6718b5a66b50&profile=allied-tortoise-xgvJ5k"
```

**After installation is complete, proceed to the main execution plan!**