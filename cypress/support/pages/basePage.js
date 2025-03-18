
export default class BasePage {
  
  visit() {
    cy.visit(`${Cypress.config('baseUrl')}`);
  }


}