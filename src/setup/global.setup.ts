import { chromium } from '@playwright/test';
import { ENV } from '../env/test.env';
import { USERS } from '../auth/test.auth';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to login page
  await page.goto(ENV.loginURL);

  // Fill login credentials
  await page.fill('#username', USERS.admin.username);
  await page.fill('#password', USERS.admin.password);
  await page.click('button[type="submit"]');

  // Wait for successful login (adjust selector based on your app)
  await page.waitForURL(/secure/);

  console.log('✅ Login successful, saving auth state...');
  
  // Save authentication state
  await page.context().storageState({path: 'storage/admin.json'
  });

  await browser.close();
}

export default globalSetup;
