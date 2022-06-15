describe("Verify Game tiles", function () {
  it("Verify game tiles are functional ", function () {
    cy.visitUrl();
    cy.get('[data-testid="section-wrapper-content"]')
      .find("ul")
      .children()
      .then(($li) => {
        cy.get($li)
          .eq(Math.floor(Math.random() * 5))
          .click();
      });
    cy.url().then((url) => {
      const gamename = url.substring(url.indexOf("p/") + 2).slice(0, -8);
      cy.log(gamename);
      cy.contains(gamename).should("be.visible");
    });
  });
});
