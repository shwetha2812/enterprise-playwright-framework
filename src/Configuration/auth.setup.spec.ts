import { test as base, Page } from '@playwright/test';
import { ENV } from '../env/test.env';

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Perform login
    await page.goto(ENV.loginURL || '/login');
    
    // Fill login credentials
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    
    // Click login button
    await page.click('button[type="submit"]');
    
    // Wait for successful login
    await page.waitForURL(/secure/);
    
    // Use the authenticated page in tests
    await use(page);
    
    // Cleanup (optional)
    // await page.close();
  },
});

export { expect } from '@playwright/test';