const gameList = [
  {
    game: "The Guild 3",
    href: "/en-US/p/the-guild-3",
  },

  {
    game: "Symphony of War",
    href: "/en-US/p/symphony-of-war-60a76e",
  },

  {
    game: "Earthworm Jim 2",
    href: "/en-US/p/earthworm-jim-2-c3710b",
  },

  {
    game: "Very Very Valet",
    href: "/en-US/p/very-very-valet-70633e",
  },
];

describe("Visit Epic Game", function () {
  it("Should Visit Epic Games ", function () {
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
