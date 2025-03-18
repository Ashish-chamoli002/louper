import  BasePage from './basePage';

class ReviewLinks extends BasePage {
    /*
    Elements defined in the Review Links page
    */
    get createReviewLinkButton() {
        return cy.contains('button', 'Create Review Link');
    }
    
    get nextButton() {
        return cy.contains('button', 'Next');
    }
    get doneButton() {
        return cy.contains('button', 'Done');
    }
    get filespace_Demo() {
        return cy.get('[data-tip="Demo"]');
    }
    get reviewLinkName() {
        return cy.get('input[placeholder="Review Link name"]');
    }

    /*
    Functions to perform actions on the Review Links page
    */

    selectFile(filename) {
        cy.contains('p', filename)                        
            .closest('div[data-type="file"]')             
            .find('input[type="checkbox"]')               
            .check(); 
    }
    
    // Copy the created review link to the environment variable
    copyReviewLink() {
        cy.contains('h3', 'Review Link created')
            .closest('.w-full.transform.rounded-xl.p-6')
            .find('input[type="text"]')
            .invoke('val')
            .should('include', 'https://app.louper.io/rl')            
            .then((linkValue) => {
                Cypress.env('reviewLink', linkValue);
            });

    }

    createReviewLink() {
        this.createReviewLinkButton.click();
        this.filespace_Demo.dblclick();
        this.selectFile('Louper_2.0_Launch.mp4');
        this.selectFile('Siren_MusicVideo.mp4');
        this.nextButton.click();
        this.reviewLinkName.type('Test Link');
        this.doneButton.click();
        this.copyReviewLink();

    }
}

export const reviewLinks = new ReviewLinks();