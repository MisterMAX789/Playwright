import { test, expect } from '@playwright/test';
const { email, password } = require("./user.js");

test("Успешная авторизация", async ({ page }) => {
  test.setTimeout(5000);
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(Email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill({Password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  expect(page.locator("text=Мои курсы и профессии").isVisible);
});

test("Неуспешная авторизация", async ({ page }) => {
  test.setTimeout(5000);
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("NotExistEmail@mail.ru");
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("NotExistPass");
  await page.locator('[data-testid="login-submit-btn"]').click();
  expect(page.locator('[data-testid="login-error-hint"]').isVisible);
});