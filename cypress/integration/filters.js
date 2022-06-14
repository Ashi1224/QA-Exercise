describe("Filter Epic Game", function () {
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

//   });
//   it("filter feature should be visible and placeholder should named as keyword", function () {
//     cy.visitUrl();
//     cy.location("href").should("include", "/en-US/browse");
//     cy.get('[data-testid="browse-filters-header-keywords"]')
//       .should("have.text", "keywords")
//       .type("Free");
//     cy.url().should("include", "/Free");
//     cy.get(".css-cqo4p9").click();
//   });
// });
