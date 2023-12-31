import { test, expect } from '@playwright/test';
import { _electron as electron } from 'playwright';

test.use({ viewport: { width: 500, height: 500 } });

// make sure the app launches and saves content
test('launch app and test save', async () => {
  const electronApp = await electron.launch({ args: ['./src/main/main.ts'] });

  // create window
  const window = await electronApp.firstWindow();

  // load dev url
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
  // launch app
  const electronApp = await electron.launch({ args: ['./src/main/main.ts'] });

  // create window
  const window = await electronApp.firstWindow();

  // load url
  await window.goto('http://localhost:1212/');
  await window.waitForLoadState('domcontentloaded');

  // enter erroneous text
  await window.locator('#test').fill('tesrr');
  await window.locator('#test').click({
    button: 'right',
  });
});
