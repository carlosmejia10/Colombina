describe('template spec', () => {
    it('Verificar pantalla de enviado', () => {
      cy.visit('http://localhost:4200/')
      cy.get('#username').type("JuanPablo")
      cy.get('#password').type("123456")
      cy.get('.fl').click()
      cy.url().should('include', 'http://localhost:4200/tramites')
      cy.visit('http://localhost:4200/crearTramite')
      cy.get('#nombreProducto').type("Nucitas")
      //falta validar lo de los campos donde se adjuntan documentos
      cy.get('.fin > button')
      cy.get('.fin > button > a').click()
      cy.url().should('include','http://localhost:4200/confirmacion')
    })
  
    
  })
  