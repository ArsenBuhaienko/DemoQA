import { MainPage } from "./MainPage";

export class ElementsPage extends MainPage{
    elementsMenuSectionLocator:         any;
    textBoxSubMenuLocator:              any;
    сheckBoxSubMenuLocator:             any;
    webTablesSubMenuLocator:            any;
    radioButtonSubMenuLocator:          any;
    buttonsSubMenuLocator:              any;
    brokenLinksSubMenuLocator:          any;
    dynamicPropertiesSubMenuLocator:    any;
    uploadAnDownloadSubMenuLocator:     any;
    linksSubMenuLocator:                any;
    
    constructor(page){
        super(page);
        this.elementsMenuSectionLocator =       page.locator("(//div[@class='header-text'])[1]")
        this.textBoxSubMenuLocator =            page.locator("(//li[@class='btn btn-light '])[1]")
        this.сheckBoxSubMenuLocator =           page.locator("(//li[@class='btn btn-light '])[2]")
        this.radioButtonSubMenuLocator =        page.locator("(//li[@class='btn btn-light '])[3]")
        this.webTablesSubMenuLocator =          page.locator("(//li[@class='btn btn-light '])[4]")
        this.buttonsSubMenuLocator =            page.locator("(//li[@class='btn btn-light '])[5]")
        this.linksSubMenuLocator =              page.locator("(//li[@class='btn btn-light '])[6]")
        this.brokenLinksSubMenuLocator =        page.locator("(//li[@class='btn btn-light '])[7]")
        this.uploadAnDownloadSubMenuLocator =   page.locator("(//li[@class='btn btn-light '])[8]")
        this.dynamicPropertiesSubMenuLocator =  page.locator("(//li[@class='btn btn-light '])[9]")
    }
    async openElementsMenuSection(){
        await super.openElementsPage();
    }
    async openTextBoxSubMenu(){
        await this.textBoxSubMenuLocator.click();
    }
    async openCheckBoxSubMenu(){
        await this.сheckBoxSubMenuLocator.click();
    }
    async openRadioButtonSubMenu(){
        await this.radioButtonSubMenuLocator.click();
    }
    async openWebTablesSubMenu(){
        await this.webTablesSubMenuLocator.click();
    }
    async openButtonsSubMenu(){
        await this.buttonsSubMenuLocator.click();
    }
    async openLinksSubMenu(){
        await this.linksSubMenuLocator.click();
    }
    async openBrokenLinksSubMenu(){
        await this.brokenLinksSubMenuLocator.click();
    }
    async openUploadAnDownloadSubMenu(){
        await this.uploadAnDownloadSubMenuLocator.click();
    }
    async openDynamicPropertiesSubMenu(){
        await this.dynamicPropertiesSubMenuLocator.click();
    }
}