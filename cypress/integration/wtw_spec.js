describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://waste-to-wonder.herokuapp.com/',{timeout: 30000})
    })
  })