import { Page } from "@playwright/test";
import { GitHubUrls } from "../utils/constants";

export default class LoginPage {
  private page: Page;
  constructor(page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    await this.page.goto(GitHubUrls.LOGIN_PAGE);
  }
  async fillUsername(username: string = process.env.USER_NAME ) {
    await this.page.fill("#login_field", username);
  }
  
  async fillPassword(password: string = process.env.PASSWORD) {
    await this.page.fill("#password", password);
  }

  async clickSignInButton() {
    await this.page.click('[name="commit"]');
  }

  async getCurrentUrl() {
    return this.page.url();
  }
}
