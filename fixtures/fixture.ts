import { BrowserContext, test as baseTest } from "@playwright/test";
import { MainPage } from "../page-object/MainPage";
import { ElementsPage } from "../page-object/ElementsPage";
import { AlertsPage } from "../page-object/AlertsPage";
import { BooksApplicationsPage } from "../page-object/BooksApplicationsPage";
import { FormsPage } from "../page-object/FormsPage";
import { InteractionsPage } from "../page-object/InteractionsPage";
import { WidgetsPage } from "../page-object/WidgetsPage";
import { chromium } from "@playwright/test";
import { Page } from "@playwright/test";

type basePage = {
    mainPage: MainPage
    alertPage: AlertsPage
    bookApplicationsPage: BooksApplicationsPage
    elementsPage: ElementsPage
    formsPage: FormsPage
    interactionsPage: InteractionsPage
    widgetsPage: WidgetsPage

    browserContext: BrowserContext
    page: Page
}

export const test = baseTest.extend<basePage>({
    browserContext: async ({}, use) =>{
        let browser = await chromium.launch({headless:true}) 
        let context = await browser.newContext()
        await use(context);
    },
    page: async ({browserContext}, use) =>{
        let page = await browserContext.newPage();
        await use(page);
    },
    mainPage: async ({page}, use) =>{
        let mainPage = new MainPage(page);
        await use(mainPage);
    },
    alertPage: async ({page}, use) =>{
        let alertPage = new AlertsPage(page);
        await use(alertPage);
    },
    bookApplicationsPage: async ({page}, use) =>{
        let bookApplicationsPage = new BooksApplicationsPage(page);
        await use(bookApplicationsPage);
    },
    elementsPage: async ({page}, use) =>{
        let elementsPage = new ElementsPage(page);
        await use(elementsPage);
    },
    formsPage: async ({page}, use) =>{
        let formsPage = new FormsPage(page);
        await use(formsPage);
    },
    interactionsPage: async ({page}, use) =>{
        let interactionsPage = new InteractionsPage(page);
        await use(interactionsPage);
    },
    widgetsPage: async ({page}, use) =>{
        let widgetsPage = new WidgetsPage(page);
        await use(widgetsPage);
    },
})