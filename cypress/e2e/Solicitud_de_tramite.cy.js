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
  
    /*
    it('Verificar Carga de Documentos', () => {
    cy.visit('http://localhost:4200/')
      cy.get('#username').type("JuanPablo")
      cy.get('#password').type("123456")
      cy.get('.fl').click()
      cy.visit('http://localhost:4200/crearTramite')
      cy.get(':nth-child(2) > .cuadro > .fl > a').click()
      cy.get(':nth-child(2) > .cuadro > .fl > a').click()

      const filePath = '/Users/Desktop/imagen.pdf';//revisar el path

    // Simular arrastre del archivo al área de carga
    cy.get('#upload-area').attachFile(filePath);

    */

    
  })
  
  
