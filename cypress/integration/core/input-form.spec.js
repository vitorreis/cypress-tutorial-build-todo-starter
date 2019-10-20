describe('input-form', () => {
    it('focus on input when loaded', () => {
        cy.visit('http://localhost:3030/')

        cy.focused()
            .should('have.class', 'new-todo')
    })

    it.only('accepts input', () => {
        cy.visit('http://localhost:3030')
        const typedText = 'React meetup'

        cy.get('[test-id=new-todo]')
            .type(typedText)
            .should('have.value', typedText)

    })
})