describe('template spec', () => {
  it('informacion tramite nacional', () => {
    cy.visit('http://localhost:4200/tramites')
    cy.get(':nth-child(1) > td > .registro > a').click()
    cy.contains('Información del Trámite').should('exist')
  })

  it('Barra de progreso', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#username').type("JuanPablo")
    cy.get('#password').type("123456")
    cy.get('.fl').click()
    cy.url().should('include', 'http://localhost:4200/tramites')
    cy.get('.progress').should('exist')
  })

  it('Ver documentos', () => {
    cy.visit('http://localhost:4200/tramites')
    cy.get('.registro-info > :nth-child(10)').click()
    cy.url().should('include', 'http://localhost:4200/tramites/verdocumentos') //Debería mandar a ver los documentos del trámite
  })

  it('Tramites pendientes', () => {
    cy.visit('http://localhost:4200/tramites')
    cy.get('.registro-info > :nth-child(8)').click()
    cy.url().should('include', 'http://localhost:4200/tramites/pendientes') //Debería mandar a ver los trámites pendientes
  })
})
