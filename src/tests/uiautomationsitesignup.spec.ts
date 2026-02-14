import { test, expect } from '@playwright/test';
import { ENV } from '../env/test.env';
import { UIAutomation } from '../object-repository/uiautomation.spec';

test('User should be redirected to login when accessing secure area without authentication', async ({ page }) => {
  await page.goto(ENV.uiautomationURL);
  const uiAutomationPage = new UIAutomation(page);
  await expect(uiAutomationPage.product).toBeVisible();
  await uiAutomationPage.product.scrollIntoViewIfNeeded();
  await uiAutomationPage.viewProduct.hover();
  await expect(uiAutomationPage.viewProduct).toBeVisible();
  await uiAutomationPage.viewProduct.click();
});
