describe('App Header', () => {
  it('Logo Link redirects to dualsun', () => {
    cy.visit('/');
    cy.get('#logo-link').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('include', 'dualsun.com');
    });
  });
  it('PVME link should redirect to form', () => {
    cy.visit('/preview');
    cy.get('#menu-item-pv').click().then(() => {
      cy.url().should('equal', 'http://localhost:4200/');
    });
  });
  it('Preview link should redirect to list of PVMEs', () => {
    cy.visit('/');
    cy.get('#menu-item-preview').click().then(() => {
      cy.url().should('include', '/preview');
    });
  });
})
