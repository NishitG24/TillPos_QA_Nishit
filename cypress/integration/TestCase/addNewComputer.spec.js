/// <reference types="cypress" />
import computedDB from '../Pages/computedDB';
import common from '../Pages/common';
import {locatorValue} from '../Pages/objectsLocator';

var computedDBPage = new computedDB();
const CommonPage = new common();

describe('validates the filter of computer database application',()=>{

    beforeEach('navigate to application page',()=>{
        computedDBPage.validatesAppPageTitle();
    });

    it('this test case validates that new computer are added succesfully',()=>{
        var today = new Date();
        const introducedDate = today.getFullYear()+'-'+(CommonPage.padTo2Digits(today.getMonth()+1))+'-'+CommonPage.padTo2Digits(today.getDate());
        const discontinuedDate = today.getFullYear()+'-'+(CommonPage.padTo2Digits(today.getMonth()+2))+'-'+CommonPage.padTo2Digits(today.getDate())
        computedDBPage.verifyAddNewComputerFunctionality(Cypress.env('newComputerName'),Cypress.env('companyName'),introducedDate,discontinuedDate)
        computedDBPage.validatesFullSearchFilter(Cypress.env('newComputerName'))
    });

    it('adding computer by entering only required value',()=>{
        computedDBPage.verifyAddNewComputerFunctionality(Cypress.env('newComputerName'));
        computedDBPage.validatesFullSearchFilter(Cypress.env('newComputerName'),' ',' ',' ')
    });

    it('test adding computer by providing invalid date format',()=>{
        var today = new Date();
        const introducedDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const discontinuedDate = today.getFullYear()+'-'+(today.getMonth()+2)+'-'+today.getDate();
        const inValidText = 'Text '
        const invalidTextLast =' could not be parsed'
        computedDBPage.verifyAddNewComputerFunctionality(Cypress.env('newComputerName'),Cypress.env('companyName'),introducedDate,discontinuedDate)
        cy.get(locatorValue.invalidDateFormateMessage).contains(inValidText+"'"+introducedDate+"'"+invalidTextLast)
        cy.get(locatorValue.invalidDateFormateMessageDicontinued).contains(inValidText+"'"+discontinuedDate+"'"+invalidTextLast)
    });

})
