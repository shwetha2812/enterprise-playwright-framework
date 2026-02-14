import { Locator, Page } from "@playwright/test";

export class UIAutomation {
  readonly page: Page;
  readonly product: Locator;
  readonly addToCart: Locator;
  readonly viewProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.locator('//div[@class="features_items"]');
    this.addToCart = page.locator('//a[@data-product-id="1"][@class="fa fa-shopping-cart"]');
    this.viewProduct = page.locator('//a[@href="/product_details/1"]');
  }
}