describe('template spec', () => {
  it('Inicio de Sesion', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#username').type("JuanPablo")
    cy.get('#password').type("123456")
    cy.get('.fl').click()
    cy.url().should('include', 'http://localhost:4200/tramites')
  })

  it('recordar usuario', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#username').type("JuanPablo")
    cy.get('#password').type("123456")
    cy.get(':nth-child(1) > .activar > label').click().check()
  })

  it('Campos vacios', () => {
    cy.visit('http://localhost:4200/')
    cy.get('.fl').click()
    cy.get('.alert-danger').should('be.visible')
    cy.url().should('include', 'http://localhost:4200/tramites')
  })
})

