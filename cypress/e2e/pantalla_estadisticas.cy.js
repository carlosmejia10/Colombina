describe('template spec', () => {
    it('Campos Vacios', () => {
      cy.visit('http://localhost:4200/')
      cy.get('#username').type("JuanPablo")
      cy.get('#password').type("123456")
      cy.get('.fl').click()
      cy.url().should('include', 'http://localhost:4200/tramites')
      cy.visit('http://localhost:4200/renovar')
      cy.get('.fin > button')
      cy.get('.fin > button > a').click()
      cy.url().should('include','http://localhost:4200/renovar')

    })
  
    
  })
  