import {login as page} from '../support/pages/loginPage';
import { sidebar } from '../support/section/sidebar';
import { reviewLinks } from '../support/pages/reviewLinksListPage';
import { reviewLink } from '../support/pages/reviewLinkPage';
import { commentSection } from '../support/section/commentSection';

describe('When logged in user creates a review link', () => {

    before(() => {
        page.visit();      
    })
  
    it('should show link of created review link', () => {      
        page.login(Cypress.env('username'), Cypress.env('password'));
        sidebar.goToReviewLinks();
        cy.url().should('include', '/review-links#');
        reviewLinks.createReviewLink();
    })
})

describe('When guest perform CRUD in comment section', () => {    

    it('should create, edit and delete a comment', () => {      
        reviewLink.visitReviewLink();
        cy.get('.relative.text-center.cursor-pointer').first().click();
        reviewLink.addComment('This is a test comment');     
        commentSection.editComment('This is a test comment', 'This is an edited comment');
        commentSection.replyToComment('This is an edited comment', 'This is a reply');
        commentSection.deleteComment('This is an edited comment');
        commentSection.commentShouldNotExist('This is an edited comment');
    });
});