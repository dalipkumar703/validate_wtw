describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://waste-to-wonder.herokuapp.com/recycle-sustainable-map',{timeout: 30000})
    })
  })