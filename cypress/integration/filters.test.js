describe("Filter Games", function () {
  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visitUrl();
    cy.location("href").should("include", "/en-US/browse");
  });
  it("Should be able to filter by search", function () {
    cy.get('[data-testid="browse-filters-header-keywords"]').type("Free");
    cy.url().should("include", "q=Free");
  });
  it("Placeholder should be verified", function () {
    cy.get("css-1pp9j5x")
      .find("input")
      .invoke("attr", "placeholder")
      .should("contain", "Keywords");
  });
  it("The resest button should be checked", function () {
    cy.get('[data-testid="browse-filters-header-keywords"]').type("price");
    cy.contains("RESET").click();
  });
});
