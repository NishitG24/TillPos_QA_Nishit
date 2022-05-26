import common from './common';
import {locatorValue} from './objectsLocator';

const CommonPage = new common();

class computedDB{

    /**
     * This function validates the coorect url should be opned on web browser
     * author : Nishit Gupta
     *  */    
    validatesAppPageTitle(){
    //navigate to web page by entering url
       CommonPage.navigatePage();
       //vaidates that user landed on correct page or not
       CommonPage.validatesText(locatorValue.computerDbTitle,Cypress.env('app_homePage_title'))
    }

    /**
     * performs filter operations by entering the full computer name
     * author : Nishit Gupta
     */
    validatesFullSearchFilter(value){
        //enter the name of the existing computer in search box
        CommonPage.enterText(locatorValue.searchbox,value)
        //clicks on the filter button
        CommonPage.clickOnElement(locatorValue.filterByName)
        //validates the name of existing computer should display in list
        CommonPage.validatesText(locatorValue.fullNameSearchResult,value)
    }

     /**
     * performs no search filter operations
     * author : Nishit Gupta
     */
      validatesNoSearchFileter(){
        const text = 'Nothing to display'
        CommonPage.enterText(locatorValue.searchbox,Cypress.env('NoComputerName'))
        CommonPage.clickOnElement(locatorValue.filterByName)
        CommonPage.validatesText(locatorValue.NoResult,text)
        CommonPage.validatesText(locatorValue.displayCount,Cypress.env('noResultDisplayCount'))
    }

    /**
     * performs filter operations by entering the partial computer name
     * author : Nishit Gupta
     */
    validatesPartialSearchFilter(value){
        CommonPage.enterText(locatorValue.searchbox,value)
        CommonPage.clickOnElement(locatorValue.filterByName)
        cy.get(locatorValue.fullNameSearchResult).contains(value)
    }

    /**
     * verifying the functionality of cancel button
     * author : Nishit Gupta
     */
    verifyCancelButtonFunctionality(){
        //getting the text from the web page total computers found
        let value;
        cy.get(locatorValue.totalComputerCount).invoke('val').then((text)=>{
            value = text; 
         });

         //validating the total computer before cancel
       CommonPage.validatesText(locatorValue.totalComputerCount,value);
       //selects existing computer from list
       CommonPage.clickOnElement(locatorValue.addNewComputerbtn);
       //click on cancle button after navigating to details page
       CommonPage.clickOnElement(locatorValue.cancelbtn)
    }

    /**
     * creates new computer on application computer database
     * author : Nishit Gupta
     */
    verifyAddNewComputerFunctionality(newComputerName,companyName,introducedDate,discontinuedDate){
        //clicks on add new computer button
        CommonPage.clickOnElement(locatorValue.addNewComputerbtn);
        //provide computer name
        CommonPage.enterText(locatorValue.computerNameText,newComputerName);
        //provide the introudced date in format "yyyy-mm-dd"
        CommonPage.enterText(locatorValue.introducedDateText,introducedDate)
        //provide the discontinued date in format "yyyy-mm-dd"
        CommonPage.enterText(locatorValue.discontinuedText,discontinuedDate)
        //select any company from the drop down list
        CommonPage.selectDropdownValue(locatorValue.companyDropDown,companyName)
        //Click on Create new computer button
        CommonPage.clickOnElement(locatorValue.createComputerbtn)
    }

    /**
     * Perform delete operation of an existing computer on computer database application
     * author : Nishit Gupta
     */
    verifyDeleteComputer(){
     CommonPage.clickOnElement(locatorValue.deleteComputerbtn);
    }

    /**
     * verifes the details of an existing computer on details page
     * author : Nishit Gupta
     */
    verifyExitingComputerDetails(value){
        //selects any existing computer from list
        CommonPage.clickOnElement(locatorValue.fullNameSearchResult +" > a")
        //get the details from the detail page such as name, details should match with the actual search results
        cy.get(locatorValue.computerNameText).invoke('val').should('contain',value)
    }
}

export default computedDB