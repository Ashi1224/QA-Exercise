describe("Search bar Epic Game", function () {
  it("Should be visible ", function () {
    cy.visitUrl();
    cy.get('[data-testid="input-input"]');
  });

  it("should have a placeholder and search icon ", function () {
    cy.visitUrl();
    cy.wait("@visit").its("status").should("equal", 200);
    cy.get('[data-testid="input-input"]').should(
      "have.text.placeholder",
      "Search"
    );
  });
});
