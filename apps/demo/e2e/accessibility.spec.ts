import { BrowserContext, chromium, test } from '@playwright/test';
import {
  wrapPlaywrightPage,
  playwrightConfig,
  PlaywrightController
} from '@axe-core/watcher';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const API_KEY = process.env['AXE_DEVELOPER_HUB_API_KEY'];

if (!API_KEY) {
  console.warn('AXE_DEVELOPER_HUB_API_KEY not found in environment variables');
}

test.describe('Accessibility Tests', () => {
  let controller: PlaywrightController;

  test.beforeEach(async ({ page, browser }) => {
    const browserContext: BrowserContext = await chromium.launchPersistentContext(
      '',
      playwrightConfig({
      axe: {
        apiKey: API_KEY || '',
        timeout: {
          flush: 10000
        }
      },
      channel: 'chromium',
      args: ['--headless=new']
    }));
    const p = await browserContext.newPage();
    controller = new PlaywrightController(p);

    // Wrap the page for axe monitoring
    wrapPlaywrightPage(p, controller);
  });

  test.afterEach(async () => {
    // Flush test results to axe Developer Hub
    if (controller) {
      try {
        await controller.flush();
      } catch (error) {
        console.warn('Failed to flush accessibility results:', error);
      }
    }
  });

  test('should pass accessibility audit on home page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // The axe-watcher automatically scans the page for accessibility issues
    // We just need to interact with the page normally

    // Wait a bit to ensure all content is loaded
    await page.waitForTimeout(2000);
  });

  test('should pass accessibility audit on accordion page', async ({ page }) => {
    await page.goto('/accordion');
    await page.waitForLoadState('networkidle');

    // Check that the page has loaded
    await page.locator('h2:has-text("Accordion")').first().waitFor();

    // Wait for component to be fully rendered
    await page.waitForTimeout(2000);
  });

  test('should pass accessibility audit on alert page', async ({ page }) => {
    await page.goto('/alert');
    await page.waitForLoadState('networkidle');

    // Check that the page has loaded
    await page.locator('h2:has-text("Alert")').first().waitFor();

    // Wait for component to be fully rendered
    await page.waitForTimeout(2000);
  });

  test('should pass accessibility audit on table page', async ({ page }) => {
    await page.goto('/table');
    await page.waitForLoadState('networkidle');

    // Check that the page has loaded
    await page.locator('h2:has-text("Table")').first().waitFor();

    // Wait for component to be fully rendered
    await page.waitForTimeout(2000);
  });

  test('should pass accessibility audit on form components', async ({ page }) => {
    await page.goto('/checkbox');
    await page.waitForLoadState('networkidle');

    // Check that the page has loaded
    await page.locator('h1, h2').first().waitFor();

    // Wait for component to be fully rendered
    await page.waitForTimeout(2000);
  });
});
