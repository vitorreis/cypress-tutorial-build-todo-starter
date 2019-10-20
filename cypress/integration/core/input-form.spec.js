describe('input-form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('focus on input when loaded', () => {
        cy.focused()
            .should('have.class', 'new-todo')
    })

    it('accepts input', () => {
        const typedText = 'React meetup'

        cy.get('[test-id=new-todo]')
            .type(typedText)
            .should('have.value', typedText)

    })
})