import {expect, type Locator, type Page} from "@playwright/test";

export class HomePage {
    //variable
    readonly page:Page;
    readonly getStartedButton:Locator;
    readonly title:RegExp;

    //constructor
    constructor (page:Page){
        this.page=page;
        this.getStartedButton=page.getByRole('link', { name: 'Get started' });
        this.title=/Playwright/;
    }

    //method
    async clickGetStarted(){
        await this.getStartedButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }


}

export default HomePage;
