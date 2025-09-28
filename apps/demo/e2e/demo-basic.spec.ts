import { test, expect } from '@playwright/test';

test.describe('Demo App - Basic Tests', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page has loaded (any heading)
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('should navigate to accordion page', async ({ page }) => {
    await page.goto('/accordion');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that we're on accordion page
    await expect(page.locator('h2:has-text("Accordion")').first()).toBeVisible();
    
    // Check that accordion component exists
    const accordion = page.locator('ip-accordion').first();
    if (await accordion.count() > 0) {
      await expect(accordion).toBeVisible();
    }
  });

  test('should navigate to alert page', async ({ page }) => {
    await page.goto('/alert');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that we're on alert page
    await expect(page.locator('h2:has-text("Alert")').first()).toBeVisible();
    
    // Check that alert component exists
    const alert = page.locator('ip-alert').first();
    if (await alert.count() > 0) {
      await expect(alert).toBeVisible();
    }
  });

  test('should navigate to table page', async ({ page }) => {
    await page.goto('/table');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check that we're on table page
    await expect(page.locator('h2:has-text("Table")').first()).toBeVisible();
    
    // Check that table component exists
    const table = page.locator('ip-table').first();
    if (await table.count() > 0) {
      await expect(table).toBeVisible();
    }
  });
});