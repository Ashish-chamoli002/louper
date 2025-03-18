
class CommentSection {
    /*
    Elements defined in the Comment section in Review Link page
    */

    get commentSection() {
        return cy.get('#comment\\ wrapper');
    }

    get post() {
        return cy.contains('button', 'Post');
    }

    /*
    Functions to perform actions on the Comment section in Review Link page
    */


    findCommentByText(commentText) {
        return this.commentSection.contains('p', commentText).last();
    }

    editComment(commentText, newCommentText) {
        this.findCommentByText(commentText).parent().next()
          .within(() => {
            cy.get('#buttons').eq(1).find('button').eq(0).click();
            cy.focused().clear().type(newCommentText);            
          });
          this.post.click();
    }

    replyToComment(commentText, replyContent) {
        this.findCommentByText(commentText).parent().next()
          .within(() => {
            cy.get('#buttons').eq(0).find('button').eq(0).click();         
          });
        cy.focused().type(replyContent);
        this.post.click();
    }

    deleteComment(commentText) {
        this.findCommentByText(commentText).parent().next()
          .within(() => {
            cy.get('#buttons').eq(1).find('button').eq(1).click();
          });
        cy.get('*[id^=headlessui-dialog-panel]').within(() => {
            cy.contains('button', 'Delete').click();
          });
    }

    commentShouldNotExist(commentText) {
        this.commentSection
            .contains('p', commentText)
            .should('not.exist');
    }


}
export const commentSection = new CommentSection();