const { test, expect } = require('@playwright/test');
const { WikipediaMainPage } = require('../pages/wiki-main-page');
const { ContentPage } = require('../pages/content-page');
const { request } = require('@playwright/test');

test.describe('Search and change language', () => {
  test.beforeEach(async ({ page }) => {
    const wmp = new WikipediaMainPage(page);
    await wmp.goto();
  });

  test('Search for Alaska, change the language of the found page to Russian and check the translation of the title', async ({ page }) => {
    const wmp = new WikipediaMainPage(page);
    const cp = new ContentPage(page);
    await wmp.searchAndSelectFirst('Аляcка');
    await cp.changeLangTo('Русский');
    await cp.isTitleHaveText('Аляска');
  });

  test('Search for Ukraine, change the search input language to Russian and check the title on the found first page', async ({ page }) => {
    const wmp = new WikipediaMainPage(page);
    const cp = new ContentPage(page);
    await wmp.changeSearhcLangTo('ru');
    await wmp.searchAndSelectFirst('Украина');
    await cp.isTitleHaveText('Украина');
  });
  
  test('Search for Glory to Ukraine! change the language of the found page to Ukraine and check the translation of the title', async ({ page }) => {
    const wmp = new WikipediaMainPage(page);
    const cp = new ContentPage(page);
    await wmp.searchAndSelectFirst('Glory to Ukraine!');    
    await cp.changeLangTo('Українська');
    await cp.isTitleHaveText('Слава Україні!');
  });
});


