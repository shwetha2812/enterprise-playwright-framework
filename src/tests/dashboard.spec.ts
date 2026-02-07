import { test, expect } from '@playwright/test';
import { DashboardPage } from '../object-repository/dashboard.spec';

test('User should access secure area without login', async ({ page }) => {
  await page.goto('/secure');
  await expect(page).toHaveURL(/login/);
  const dashboardPage = new DashboardPage(page);
  await expect(dashboardPage.loginPageMessage).toBeVisible();
});
