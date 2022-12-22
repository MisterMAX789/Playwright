import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto('https://netology.ru/');
  // Click text=Войти
  await page.locator('text=Войти').click();
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('');
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill('');
  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();
});