import { test, expect, type Page } from '@playwright/test';

import {HomePage} from '../pages/home-page';

const URL = 'https://playwright.dev/';

let homePage : HomePage;

test.beforeEach(async ({page})=>{
  await page.goto(URL);
  homePage = new HomePage(page);

})

async function clickGetStarted(){
  await homePage.clickGetStarted();
  //await page.getByRole('link', { name: 'Get started' }).click();
}

test.describe('Playwright website', () =>{
    
  test('has title', async () => {
      // Expect a title "to contain" a substring.
      await homePage.assertPageTitle();
    });

    test('get started link', async ({ page }) => {
      // Click the get started link.
      await clickGetStarted();

      // Expects page to have a heading with the name of Installation.
      await expect(page).toHaveURL(/.*intro/);
    });

})



