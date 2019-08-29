import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000';
Given('I open Home page', () => {
    cy.visit(url)
});


When('I click the {string} button', (buttonName) =>{
    let id = buttonName.replace(/\s/g,'');
    cy.get('button#'+id).click()
});

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
});

Then('I see a button named {string}', (name) => {
    cy.get('#'+clearSpacesForId(name)).should('exist').and('have.text', name)
});

Then('I see a table of {string} with a column header {string}', (tableName, columnName) => {
    cy.get('table#'+clearSpacesForId(tableName)).should('exist').get('th#'+clearSpacesForId(columnName)).should('exist').and('have.text', columnName.toUpperCase());
});

Then('I see a value of {string} in column {string} and row {int}', (expectedValue, columnName, row) => {
    let id = 'td#' + clearSpacesForId(columnName) + '-' + (row-1);
    cy.get(id).should('exist').and('have.text', expectedValue);
});



function clearSpacesForId(name) {
    return name.replace(/\s/g, '');
}