describe('App Footer', () => {
  it('Footer statement displayed', () => {
    cy.visit('/');
    cy.get('.footer').should('have.text', " DualSun, +33 4 13 41 53 70, contact@dualsun.fr\n");
  });
})
