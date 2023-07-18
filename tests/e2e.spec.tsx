import { test, expect } from '@playwright/test';
import { _electron as electron } from 'playwright';

test('launch app and test save', async () => {
  const electronApp = await electron.launch({ args: ['./src/main/main.ts'] });

  // create window
  const window = await electronApp.firstWindow();

  // load url
  await window.goto('http://localhost:1212/');
  await window.waitForLoadState('domcontentloaded');

  // click on the editor
  await window.locator('#test').click();

  // type in the editor
  await window.locator('#test').fill('Hello, this is a test!! ');

  // click on the save button
  await window.getByRole('button', { name: 'Save' }).click();

  // eslint-disable-next-line jest/no-standalone-expect
  expect(
    window
      .locator('div')
      .filter({ hasText: 'Hello, this is a test!!' })
      .nth(2)
      .isVisible()
  ).resolves.toBeTruthy();

  // close app
  await electronApp.close();
});

test('launch app and test spellchecking context menu', async () => {
  const electronApp = await electron.launch({ args: ['./src/main/main.ts'] });

  // create window
  const window = await electronApp.firstWindow();

  // load url
  await window.goto('http://localhost:1212/');
  await window.waitForLoadState('domcontentloaded');

  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('#test').fill('tesrr');
  await page.locator('#test').click({
    button: 'right'
  });

});
}
