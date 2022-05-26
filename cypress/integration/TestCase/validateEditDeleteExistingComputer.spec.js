/// <reference types="cypress" />
import computedDB from '../Pages/computedDB';

var computedDBPage = new computedDB();

describe('validates the filter of computer database application',()=>{

    beforeEach('navigate to application page',()=>{
        computedDBPage.validatesAppPageTitle();
    });

    it('validate the details of an existing computer',()=>{
        computedDBPage.validatesFullSearchFilter(Cypress.env('fullComputerName'))
        computedDBPage.verifyExitingComputerDetails(Cypress.env('fullComputerName'));
    });
})
