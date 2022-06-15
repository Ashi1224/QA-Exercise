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
    gameList.forEach((element) => {
      it(`Home page : ${element.game} should function correctly `, () => {
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
