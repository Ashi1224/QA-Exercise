describe('Visit Epic Game', function() {

    // beforeEach(function() {
    //     cy.server()
    //     cy.route('POST', 'https://graphql.epicgames.com/graphql').as('visit')
    // })

    it('Should Visit Epic Games ', function() {
        cy.visit('https://store.epicgames.com/en-US/browse')
        //cy.wait('@visit').its('status').should('equal', 200)
    })
});