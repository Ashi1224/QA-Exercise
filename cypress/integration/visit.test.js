describe("Visit Epic Game", function () {
  it("Should Visit Epic Games ", function () {
    cy.visitUrl();
    cy.wait("@visit").its("status").should("equal", 200);
  });
});
