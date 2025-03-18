import BasePage from "./basePage";

class ReviewLink extends BasePage {

    /*
    Elements defined in the Review Link page
    */

    get comment() {
        return cy.get('textarea[id="comment"]');
    }

    get post() {
        return cy.contains('button', 'Post');
    }
    get guestName() {
        return cy.get('input[placeholder="Enter Guest name"]');
    }

    get submitGuestDetails() {
        return cy.contains('button', 'Submit');
    }

    /*
    Functions to perform actions on the Review Link page
    */

    visitReviewLink() {
        cy.visit(Cypress.env('reviewLink'));
    }

    addGuestDetails(name) {
        this.guestName.type(name);
        this.submitGuestDetails.click();
    }

    addComment(comment) {
        this.comment.scrollIntoView().type(comment);
        this.post.click();
        cy.get('body').then($body => {
            if ($body.find('input[placeholder="Enter Guest name"]').length > 0) {
              this.addGuestDetails('Ashish');
              this.comment.clear().type(comment);
              this.post.click();
            }
        });
    }

    

}

export const reviewLink = new ReviewLink();