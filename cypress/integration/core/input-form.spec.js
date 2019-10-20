describe('input-form', () => {
    it('focus on input when loaded', () => {
        cy.visit('http://localhost:3030/')

        cy.focused()
            .should('have.class', 'new-todo')
    })
})