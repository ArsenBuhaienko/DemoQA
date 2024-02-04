import { test } from "../../fixtures/fixture";

test('Open Elements Page', async ({elementsPage}) => {
    await elementsPage.openElementsPage();
});
test('Open Forms Page', async ({elementsPage}) => {
    await elementsPage.openFormsPage();
});
test('Open Alerts Page', async ({elementsPage}) => {
    await elementsPage.openAlertsPage();
});
test('Open Widgets Page', async ({elementsPage}) => {
    await elementsPage.openWidgetsPage();
});
test('Open Interactions Page', async ({elementsPage}) => {
    await elementsPage.openInteractionsPage();
});
test('Open Book Application Page', async ({elementsPage}) => {
    await elementsPage.openBookApplicationsPage();
});
