import  BasePage from '../pages/basePage';
class Sidebar extends BasePage {
    /*
    Elements defined in the sidebar section
    */
    reviewLinks() {
        return cy.contains('a', 'Review Links');
    }
    
    filespace() {
        return cy.contains('a', 'Filespaces');
    }


    /*
    Functions to perform actions on the sidebar section
    */
    goToReviewLinks() {
        this.reviewLinks().click();
    }

}
      
export const sidebar = new Sidebar();
    
