describe('BMI Calculator Test', () => {
    it('successfully calculates BMI', () => {
        cy.visit('http://localhost:3000'); 

        cy.get('#weightPounds').type('150');
        cy.get('#heightInches').type('70');

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', '22.04'); 
    });

    it('successfully calculates my BMI', () => {
        cy.visit('http://localhost:3000');

        cy.get('#weightPounds').type('137');
        cy.get('#heightInches').type('72');

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', '19.03')
    })
});