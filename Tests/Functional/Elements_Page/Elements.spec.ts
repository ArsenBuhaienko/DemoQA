import { test } from "../../../fixtures/fixture";

test('Test Text Box Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openTextBoxSubMenu();
});
test('Test Check Box Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openCheckBoxSubMenu();
});
test('Test Radio Button Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openRadioButtonSubMenu();
});
test('Test Web Tables Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openWebTablesSubMenu();
});
test('Test Buttons Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openButtonsSubMenu();
});
test('Test Links Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openLinksSubMenu();
});
test('Test Broken Links Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openBrokenLinksSubMenu();
});
test('Test Uoload and Download Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openUploadAnDownloadSubMenu();
});
test('Test Dynamic Properties Sub Section', async ({elementsPage}) => {
    await elementsPage.openElementsMenuSection();
    await elementsPage.openDynamicPropertiesSubMenu();
});
