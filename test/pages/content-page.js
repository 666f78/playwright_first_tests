const { expect } = require('@playwright/test');

exports.ContentPage = class ContentPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.firstHeading');
    }

    async changeLangTo(text) {
        await this.page.locator(`text=${text}`).click();
    }
    async isTitleHaveText(text) {
        await expect(this.title).toHaveText(`${text}`);
    }
}