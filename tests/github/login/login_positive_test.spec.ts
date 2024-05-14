import { test, expect } from "@playwright/test";
import {  GitHubUrls } from "../../utils/constants.js";
import LoginPage from "../../pages/LoginPage.js";

test("Log in with correct credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickSignInButton();

  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe(GitHubUrls.HOME_PAGE);
});
