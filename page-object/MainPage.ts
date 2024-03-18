import { expect } from "@playwright/test";

export class MainPage{
    page:                               any;
    expectedUrlElementsPage:            string;
    elementsPageLocator:                any;
    expectedUrlMainPage:                string;
    formsPageLocator:                   any;
    alertsPageLocator:                  any;
    interactionsPageLocator:            any;
    bookApplicationPageLocator:         any;
    widgetsPageLocator:                 any;
    expectedUrlFormsPage:               string;
    expectedUrlAlertsPage:              string;
    expectedUrlWidgetsPage:             string;
    expectedUrlBookApplicationsPage:    string;
    expectedUrlInteractionsPage:        string;

    constructor(page){
        this.page = page;

        this.expectedUrlMainPage =             "https://demoqa.com/";
        this.expectedUrlElementsPage =         "https://demoqa.com/elements";
        this.expectedUrlFormsPage =            "https://demoqa.com/forms";
        this.expectedUrlAlertsPage =           "https://demoqa.com/alertsWindows";
        this.expectedUrlWidgetsPage =          "https://demoqa.com/widgets";
        this.expectedUrlInteractionsPage =     "https://demoqa.com/interaction";
        this.expectedUrlBookApplicationsPage = "https://demoqa.com/books";

        this.elementsPageLocator =              page.locator("(//div[@class='avatar mx-auto white'])[1]");
        this.formsPageLocator =                 page.locator("(//div[@class='avatar mx-auto white'])[2]");
        this.alertsPageLocator =                page.locator("(//div[@class='avatar mx-auto white'])[3]");
        this.widgetsPageLocator =               page.locator("(//div[@class='avatar mx-auto white'])[4]");
        this.interactionsPageLocator =          page.locator("(//div[@class='avatar mx-auto white'])[5]");
        this.bookApplicationPageLocator =       page.locator("(//div[@class='avatar mx-auto white'])[6]");
    }

    async openElementsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.elementsPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlElementsPage);
    }
    async openFormsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.formsPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlFormsPage);
    }
    async openAlertsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.alertsPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlAlertsPage);
    }
    async openWidgetsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.widgetsPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlWidgetsPage);
    }
    async openInteractionsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.interactionsPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlInteractionsPage);
    }
    async openBookApplicationsPage(){
        await this.page.goto(this.expectedUrlMainPage);
        await this.bookApplicationPageLocator.click();
        await expect(this.page.url()).toBe(this.expectedUrlBookApplicationsPage);
    }
}