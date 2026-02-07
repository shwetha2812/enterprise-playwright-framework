import { chromium } from '@playwright/test';
import { ENV } from '../env/test.env';
import { USERS } from '../auth/test.auth';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(ENV.loginURL);
  await page.fill('#username', USERS.admin.username);
  await page.fill('#password', USERS.admin.password);
  await page.click('button[type="submit"]');

  await page.context().storageState({
    path: 'storage/admin.json'
  });

  await browser.close();
}

export default globalSetup;
