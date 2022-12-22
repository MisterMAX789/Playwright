const { chromium } = require("playwright");
const userFile = require('./user');
let userName = userFile.userName;
let passwordName = userFile.passwordName;
(async () => {
  await page.screenshot({ path: 'screenshot.png' });
  const browser = await chromium.launch({});
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.fill('[placeholder="Email"]', userName);
  await page.fill('[placeholder="Пароль"]', passwordName);
  await page.click('button:has-text("Войти")');
  await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page.locator('text = Мои курсы и профессии')).toBeVisible();

  const check = await page.waitForSelector("text=Мои курсы и профессии");
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({

  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  const userNameEm = "test" + userName;
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', userNameEm);
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', passwordName);
  await page.click('button:has-text("Войти")');
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
        await expect(
            page.locator('text=Вы ввели неправильно логин или пароль')
        ).toBeVisible();

  const check = await page.waitForSelector("text=Вы ввели неправильно логин или пароль");
  await browser.close();
})();