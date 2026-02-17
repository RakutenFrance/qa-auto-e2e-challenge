# Playwright Interview Demo

Simple Playwright JavaScript project for technical interview purposes.

## Project Structure

```
playwright-interview-demo/
├── pages/
│   └── LoginPage.js          # Page Object for login page
├── tests/
│   └── login.spec.js         # Login test
├── playwright.config.js      # Playwright configuration
└── package.json              # Project dependencies
```

## Installation

```bash
npm install
npx playwright install chromium
```

## Running Tests

```bash
# Run tests in headless mode
npm test

# Run tests in headed mode
npm run test:headed

# Run tests with UI mode
npm run test:ui

# View test report
npm run test:report
```

## Test Details

- **Test Site**: https://the-internet.herokuapp.com/login
- **Valid Credentials**:
  - Username: `tomsmith`
  - Password: `SuperSecretPassword!`

## Page Object Pattern

The project uses the Page Object Model pattern:
- **LoginPage** class encapsulates all login page elements and actions
- Test file imports and uses the LoginPage class
- Makes tests more maintainable and reusable
