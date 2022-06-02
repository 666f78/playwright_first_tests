const { expect } = require('@playwright/test');

exports.WikipediaMainPage = class WikipediaMainPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[name="search"]');
        this.searchInputSelectionFirst = page.locator('.suggestions-dropdown .suggestion-link:first-child');
    }

    async goto() {
        await this.page.goto('https://www.wikipedia.org/');
    }

    async searchAndSelectFirst(text) {
        await this.searchInput.fill(text);
        await this.searchInputSelectionFirst.click();
    }

    async changeSearhcLangTo(text) {
        await this.page.selectOption('#searchLanguage', { value: `${text}` });
    }
    
}