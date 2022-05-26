
/**
 * Objects Locator page stores the Web Element of application components,
 * this elements can be used in automation to locate the feilds on web via DOM.
 */

//locatorValue is constant objects which exports stored elements

export const locatorValue = {
    computerDbTitle:'h1.fill > .fill',
    searchbox:'#searchbox',
    filterByName:'#searchsubmit',
    fullNameSearchResult:'tbody > tr > :nth-child(1)',
    NoResult:'em',
    displayCount:'.current > a',
    totalComputerCount : '#main > h1',
    addNewComputerbtn:"#add",
    computerNameText:"#name",
    introducedDateText:"#introduced",
    discontinuedText:"#discontinued",
    companyDropDown : "#company",
    createComputerbtn : ".primary",
    deleteComputerbtn : ".topRight > .btn",
    invalidDateFormateMessage : ":nth-child(2) > .input > .help-inline",
    invalidDateFormateMessageDicontinued : ":nth-child(3) > .input > .help-inline",
    cancelbtn : "#main > form > div > a"
}
