import { test, expect } from '@playwright/test';
import { test as authTest } from '../Configuration/auth.setup.spec';
import { DashboardPage } from '../object-repository/dashboard.spec';

test('User should be redirected to login when accessing secure area without authentication', async ({ page }) => {
  await page.goto('/secure');
  
  // Should be redirected to login page
  await expect(page).toHaveURL(/login/);
  
  const dashboardPage = new DashboardPage(page);
  await expect(dashboardPage.loginPageMessage).toBeVisible();
});

authTest('User should successfully login with valid credentials', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  
  // Should be on secure page (not redirected to login)
  await expect(authenticatedPage).toHaveURL(/secure/);
  
  // Verify secure page content
  await expect(authenticatedPage.locator('h2')).toContainText('Secure Area');
  await expect(authenticatedPage.locator('.subheader')).toBeVisible();
});
