//Calendario no cambia a la fecha indicada
describe('template spec', () => {
    it('Campos Vacios', () => {
      cy.visit('http://localhost:4200/calendario')
      cy.get('.month-selector > :nth-child(1)')
      .click()
      .should('include', 'Noviembre')
    })
  })
  