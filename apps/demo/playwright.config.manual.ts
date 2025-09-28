import { defineConfig, devices } from '@playwright/test';

// Alternative config without automatic server startup
// Use this if you want to manually start the server first
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: process.env['CI'] ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome'] },
    },
  ],

  // No webServer - expects you to start the server manually
});
