// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './exceptions'
import 'cypress-real-events/support';
require("cypress-xpath");

// Alternatively you can use CommonJS syntax:
// require('./commands')

// beforeEach(() => {
//     cy.session("mySesion", ()=>{
//     cy.visit(`${Cypress.env("demoQA")}/login`);
//     // cy.get("#userName").type("test");
//     cy.get("#password").type("Test1234*");
//     cy.get("#login").click();
//     // cy.url().should("contain","profile"); 
//     })      
// });

// after(() => {
//     cy.session("My session",()=>{
//         cy.clearCookies();
//         cy.getCookies().then((cookies)=>{
//         expect(cookies).to.have.length(0)
//     })
//     })
    
// });