describe('Form Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3003/')
    })
  
    it('should type a name in the Name input and assert its presence', () => {
      const name = 'John Doe';
      cy.get('#username').type(name);
      cy.get('#username').should('have.value', name);
    })
    it('fill in the email input', () => {
      const email = 'john.d@example.com'
      cy.get('#email').type(email)
      cy.get('#email').should('have.value', email)
    })
    it('input password and check value', () => {
      const password = 'strongPass'
      cy.get('#password').type(password)
      cy.get('#password').should('have.value', password)
    })
    it('check terms of service box', () => {
      cy.get('#agreement').check()
      cy.get('#agreement').should('be.checked')
    })
    it('submits form data', () => {
      cy.get('#username').type('John Doe')
      cy.get('[name="favLanguage"]').check('javascript')
      cy.get('#favFood').select('pizza')
      cy.get('#agreement').check()
      cy.get('form').submit()
      cy.get('.success').should('exist')
    })
    cy.get('.validation').should('have.length', 4)

    })