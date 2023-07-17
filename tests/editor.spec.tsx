import { test, expect } from '@playwright/experimental-ct-react';
import App from '../src/renderer/App';
import { EditorSaveButton, Editor, Results } from '../src/renderer/editor';

test.use({ viewport: { width: 500, height: 500 } });

// make sure the app renders overall
test('app should render', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toBeTruthy();
});

// make sure the editor save button renders
test('editor save button should have correct text', async ({ mount }) => {
  const component = await mount(<EditorSaveButton />);
  await expect(component).toBeTruthy();
});

// make sure the editor save button contains the text "Save"
test('editor save button should mount', async ({ mount }) => {
  const component = await mount(<EditorSaveButton />);
  await expect(component).toContainText('Save');
});

// make sure the notes editor renders
test('notes editor should render', async ({ mount }) => {
  const component = await mount(<Editor />);
  await expect(component).toBeTruthy();
});

// make sure the notes editor displays the text that is typed into it
test('notes editor should display typed text', async ({ mount }) => {
  const component = await mount(<Editor />);
  await component.type('test value');
  await expect(component).toHaveValue('test value');
});

// notes box renders
test('notes box should render', async ({ mount }) => {
  const component = await mount(<Results />);
  await expect(component).toBeTruthy();
});

// notes box displays text
test('notes box should display text', async ({ mount }) => {
  const component = await mount(<Results />);
  await component.isVisible();
});
