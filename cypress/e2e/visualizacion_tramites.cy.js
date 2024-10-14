describe('template spec', () => {
  it('Campos Vacios', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#username').type("JuanPablo")
    cy.get('#password').type("123456")
    cy.get('.fl').click()
    cy.url().should('include', 'http://localhost:4200/tramites')
    cy.get('.progress').should('exist')
  })

  describe('template spec', () => {
    it('Campos Vacios', () => {
      cy.visit('http://localhost:4200/tramites')
      cy.get('.registro-info > :nth-child(10)').click()
      cy.url().should('include', 'http://localhost:4200/tramites/verdocumentos') //Debería mandar a ver los documentos del trámite
    })
  })

  describe('template spec', () => {
    it('Campos Vacios', () => {
      cy.visit('http://localhost:4200/tramites')
      cy.get('.registro-info > :nth-child(8)').click()
      cy.url().should('include', 'http://localhost:4200/tramites/pendientes') //Debería mandar a ver los trámites pendientes
    })
  })

})