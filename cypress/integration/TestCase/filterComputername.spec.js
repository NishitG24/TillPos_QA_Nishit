/// <reference types="cypress" />
import computedDB from '../Pages/computedDB';

var computedDBPage = new computedDB();

describe('validates the filter of computer database application',()=>{

    beforeEach('navigate to application page',()=>{
        computedDBPage.validatesAppPageTitle();
    })

   it('validates the computer should display when filtered with full name',()=>{
     computedDBPage.validatesFullSearchFilter(Cypress.env('fullComputerName'));
   })

   it('validates that no result should display if computer name searched not present',()=>{
     computedDBPage.validatesNoSearchFileter();
   })

   it('validates that computer name should displayed when filtered with partial name',()=>{
     computedDBPage.validatesPartialSearchFilter(Cypress.env('PartialComputerName'));
   })
})