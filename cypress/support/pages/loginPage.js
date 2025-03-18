import  BasePage from './basePage';

class Login extends BasePage {

  get username() {
    return cy.get('#signup-email');
  }

  get nextEmailButton() {
    return cy.get('#page-1-button');
  }
  
  get password() { 
    return cy.get('#signup-password');
  }

  get sign_in() {
    return cy.contains('#page-1-button', 'Sign in').click();
  }

  login(username, password) {
    this.username.type(username);
    this.nextEmailButton.click();
    this.password.type(password);
    this.sign_in.click();
  }
}

export const login = new Login();