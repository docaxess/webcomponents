# Demo App E2E Tests - Minimal Setup

Simple, reliable e2e tests for the demo application.

## Test Files

- `home.spec.ts` - Basic home page tests
- `demo-basic.spec.ts` - Navigation tests for main component pages

## Running Tests

### Local Development
```bash
# Run demo e2e tests
npm run e2e:demo

# Manual run (if server already running)
npm run demo:e2e:manual

# Build and test (full local CI simulation)
npm run ci:demo
```

### CI Pipeline
```bash
# Basic CI (no e2e)
npm run ci:basic

# Full CI with e2e
npm run build && npm run e2e:demo
```

## Configuration

- **Browser**: Chromium only (for speed and reliability)
- **Auto-server**: Starts demo app automatically on port 4201
- **Timeout**: 5s per test
- **Parallelization**: All tests run in parallel

## Test Strategy

**Minimal and Focused:**
- ✅ Page loads successfully  
- ✅ Basic navigation works
- ✅ Components render on their pages
- ✅ No complex interactions (to avoid flakiness)

**What's NOT tested:**
- ❌ Complex component interactions
- ❌ Form submissions
- ❌ Animation states
- ❌ Mobile menu toggles
- ❌ Tooltips/dropdowns

This keeps tests fast, reliable, and focused on critical functionality.