describe('PVME', () => {
    it('Fill out the form', () => {
      cy.visit('/');
      // company
      cy.get('#company-name').type('John Doe');
      cy.get('#company-siren').type('wrong value');

      cy.get('#company-next-btn').should('be.disabled');

      cy.get('#company-siren').clear();
      cy.get('#company-siren').type('123456789');

      cy.get('#company-next-btn').should('not.be.disabled');
      cy.get('#company-next-btn').click();

      // customer
      cy.get('#customer-name').type('Peppa P');
      cy.get('#customer-email').type('peppa.p@a.fr');
      cy.get('#customer-phone').type('wrong value');

      cy.get('#customer-next-btn').should('be.disabled');

      cy.get('#customer-phone').clear();
      cy.get('#customer-phone').type('0786459837');

      cy.get('#customer-next-btn').should('not.be.disabled');
      cy.get('#customer-next-btn').click();

      // installation
      cy.get('#installation-address').type('260 Bvd de la Madeleine Nice');
      cy.get('#installation-date').type('04/06/2024');
      cy.get('#installation-nb-panel').type('1');
      cy.get('#installation-type').type('hybrid');
      cy.get('#installation-id').type('WRONG ID');

      cy.get('#installation-send-btn').should('be.disabled');
      cy.get('#installation-add-btn').should('be.disabled');
      cy.get('.empty-panels').should('have.text', ' You do not have added any panel yet. ');
      
      cy.get('#installation-id').clear();
      cy.get('#installation-id').type('123456');

      cy.get('#installation-send-btn').should('be.disabled');
      cy.get('#installation-add-btn').should('not.be.disabled');

      cy.get('#installation-add-btn').click();
      cy.get('.p-type').invoke('text').should('include', 'HYBRID');

      cy.get('#installation-send-btn').click().then(() => {
        cy.get('#done-start-new').should('have.text', ' Start new ');
      });
    });
  })
  