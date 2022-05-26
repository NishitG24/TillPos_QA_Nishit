/// <reference types="cypress" />
import computedDB from '../Pages/computedDB';

var computedDBPage = new computedDB();

describe('validates the filter of computer database application',()=>{

    beforeEach('navigate to application page',()=>{
        computedDBPage.validatesAppPageTitle();
    });

    it('validates the cancel button should be working on application',()=>{
        computedDBPage.verifyCancelButtonFunctionality();
    });
})
