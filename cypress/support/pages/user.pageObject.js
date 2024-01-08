import PageObject from '../PageObject';

class UserPageObject extends PageObject {
  visitUserPage(username) {
    cy.visit(`/#/@${username}`);
  }

  get followBtn() {
    return cy.getByDataQa('follow-btn');
  }

  clickFollowBtn() {
    this.followBtn.click();
  }

  assertFollowBtnBroken(username) {
    this.followBtn
      .invoke('text')
      .should('match', new RegExp(`^\\s*Follow\\s*${username}\\s*$`));
  }

  assertFollowButtonStateUnchanged(username) {
    this.followBtn
      .invoke('text')
      .should('not.match', new RegExp(`^\\s*Unfollow\\s*${username}\\s*$`));
  }
}

export default UserPageObject;
