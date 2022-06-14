describe("Visit Epic Game", function () {
  it("Should Visit Epic Games ", function () {
    cy.visitUrl();
    Cypress.env("gameTitles").forEach((e) => {
      it(`Home page : ${e.game} should function correctly `, () => {
        cy.get("ul")
          .children()
          .each(($li) => {
            cy.get($li)
              .children()
              .eq(Math.floor(Math.random() * 5))
              .click();
          });
      });
    });
  });
});
