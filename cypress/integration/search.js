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

  it("Auto search", function () {
    Cypress.env("gameSearchData").forEach((search) => {
      cy.visit("/store/en-US/browse");
      cy.get('[data-testid="input-input"]').type(search.gameName.slice(0, 3));
      cy.get("div[role=navigation] > div").within(() => {
        cy.location().its("href").should("include", "journey/home");
      });
    });
  });
});
