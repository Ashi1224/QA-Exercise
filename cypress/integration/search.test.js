describe("Game Search", function () {
  it("Search bar Should be visible ", function () {
    cy.visitUrl();
    cy.get('[data-testid="input-input"]').should("be.visible");
  });

  it("should have a placeholder and search icon ", function () {
    cy.visitUrl();
    cy.get('[data-testid="input-input"]').should(
      "have.text.placeholder",
      "Search"
    );
    cy.get('[id="SearchLayout"]')
      .find('[data-testid="icon"]')
      .should("be.visible");
  });

  it("Should be able to search game from search bar ", function () {
    cy.visitUrl();
    cy.get('[data-testid="input-input"]').should("be.visible").type("Action");
    cy.url().should("include", "q=Action");
  });
});
