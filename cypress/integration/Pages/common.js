
/**
 * This is base class contains the cypress commands to perform automation over webElements
 * author : Nishit Gupta
 * 
 */

class common{

  /**
   * This function will naviage to the app URL over selected browser in Cypress
   * author : Nishit Gupta 
   */
  navigatePage(){
      cy.visit(Cypress.env('app_url'))
  }
  
  /**
   * calls the cypress command to validatses the any text on web
   *  Paramater : takes two parameter i.e. webelement and expected value to be compared
   *  author : Nishit Gupta
   */
  validatesText(locator,value){
    return cy.get(locator,{timeout:3000}).should('have.text',value)
   }

  /**
   * calls the cypress command to enters the values to input fields on web
   *  Paramater : takes two parameter i.e. webelement and expected value to be entered in input box
   *  author : Nishit Gupta
   */
   enterText(locator,value){
       return cy.get(locator,{timeout:3000}).type(value);
   }

     /**
   * calls the cypress command to click on button or elements on web
   *  Paramater : takes only locator of element to be clicked
   *  author : Nishit Gupta
   */

   clickOnElement(locator){
     return cy.get(locator,{timeout:3000}).click();
   }

  /**
   * calls the cypress command to validatses the list on web page
   *  Paramater : takes three parameter i.e. parents webelement,child elements and expected value to be compared with list
   *  author : Nishit Gupta
   */
   validateList(parentLocator,childLocator,listvalue)
   {
       return cy.get(parentLocator,{timeout:3000}).find(childLocator).contains(listvalue);
   }


/**
   * calls the cypress command to select the values from dropdown list
   *  Paramater : takes two parameter i.e. webelement and expected value to select from dropdown
   *  author : Nishit Gupta
   */
   selectDropdownValue(locator,value){
    return cy.get(locator,{timeout:3000}).select(value);
   }

   /**
    * this function round up any numeric digits to its two digit values
    * pramaeter : ask for the numeric values
    * author : Nishit Gupta
   */
   padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  /**
    * calls cypress commands to get text from web page
    * pramaeter : ask for webElements of an element whose text to be extracted from page
    * author : Nishit Gupta
    * returns text
   */
  getTextValues(locator){
    cy.get(locator).invoke('text').then((text)=>{
       return text 
    });
  }
  
}

export default common;