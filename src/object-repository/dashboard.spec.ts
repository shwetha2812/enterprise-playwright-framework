import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly flashMessage: Locator;
  readonly loginPageMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('//div[@data-testid="flashMessage"]');
    this.loginPageMessage = page.locator('//div[@class="example"]//h2[text()="Login Page"]')
  }
}