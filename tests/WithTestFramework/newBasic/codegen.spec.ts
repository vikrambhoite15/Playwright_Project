import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('vikram');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('abc@gmail.con');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await expect(page.getByText('Sunday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Tuesday' })).toBeVisible();
  await page.getByLabel('Country:').selectOption('australia');
  await expect(page.getByLabel('Country:')).toContainText('United States Canada United Kingdom Germany France Australia Japan China Brazil India');
  await page.getByLabel('Sorted List:').selectOption('cat');
});