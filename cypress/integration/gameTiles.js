describe("Visit Epic Game", function () {

    it("Should Visit Epic Games ", function () {
        cy.visitUrl();

        // cy.visit("https://store.epicgames.com/en-US/browse", {
        //     headers: {
        //         Accept: "application/json,text/plain,*/*",
        //         "user-agent": "axios/0/18/0",
        //     },
        //     timeout: 60000,
        // });
        //   beforeEach(function () {
        //     cy.server();
        //     cy.route("POST", "https://graphql.epicgames.com/graphql").as("visit");
        //     cy.route(
        //       "GET",
        //       "https://www.epicgames.com/store/en-US/api/content/products/*"
        //     ).as("gameContent");
        //     cy.visit("/store/en-US/browse");
        //     cy.wait("@visit").its("status").should("equal", 200);
        //   });

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
                // cy.get('[class^=OfferTitleInfo-title_]').contains(e.game).click();
                // cy.url().should('include', e.href)
                // cy.get('.NavigationHorizontal-item_7b610e46 > span').contains(e.game)
            });
        });
    })
