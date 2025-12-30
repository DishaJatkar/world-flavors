# Testing Guide

This folder contains test cases for the Recipe Discovery App.

## Test Structure

```
tests/
├── unit/           # Unit tests for individual components and functions
├── integration/    # Integration tests for component interactions
└── e2e/           # End-to-end tests for full user workflows
```

## Setup Testing Environment

To set up testing, you'll need to install testing dependencies:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

For E2E testing, you can choose:

- **Cypress**: `npm install --save-dev cypress`
- **Playwright**: `npm install --save-dev @playwright/test`

## Running Tests

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "cypress run" // or "playwright test"
  }
}
```

## Writing Tests

### Unit Tests

- Test individual components in isolation
- Mock external dependencies
- Focus on component logic and rendering

### Integration Tests

- Test how components work together
- Test user interactions across components
- Mock API calls and external services

### E2E Tests

- Test complete user workflows
- Run against a real browser
- Test the full application stack

## Example Test Files

- `unit/RecipeCard.test.jsx` - Tests for the RecipeCard component
- `integration/HomePage.test.jsx` - Tests for HomePage interactions
- `e2e/app.spec.js` - End-to-end test examples

## Best Practices

1. Use descriptive test names
2. Test both success and error scenarios
3. Keep tests isolated and independent
4. Use appropriate mocking for external dependencies
5. Follow the Arrange-Act-Assert pattern
