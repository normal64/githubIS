import { test, expect } from "@playwright/test";
import { GitHubValidationMessages } from "../../utils/constants.js";
import LoginPage from "../../pages/LoginPage.js";

test("Log in with empty required fields", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.clickSignInButton();
  //getting tooltip message with JS
  const validationMessageValue = await page.evaluate(() => {
    const inputElement = document.querySelector(
      "#login_field"
    ) as HTMLInputElement;
    return inputElement ? inputElement.validationMessage : null;
  });

  expect(validationMessageValue).toBe(
    GitHubValidationMessages.LOGIN_FIELD_EMPTY_VALIDATION_MESSAGE
  );
});
