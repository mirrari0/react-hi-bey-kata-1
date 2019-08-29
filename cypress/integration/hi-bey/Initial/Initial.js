import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000';
Given('I open Home page', () => {
    cy.visit(url)
});

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
});

Then('I see a button named {string}', (name) => {
    let id = name.replace(/\s/g, '');
    cy.get('#'+id).should('exist').and('have.text', name)
});