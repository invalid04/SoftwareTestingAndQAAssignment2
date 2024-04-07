describe('BMI Calculator with Category', () => {
    it('calculates BMI and categorizes as Underweight', () => {
        cy.visit('http://localhost:3000'); 

        cy.get('#weightPounds').type('100');
        cy.get('#heightInches').type('72'); 

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', 'Your BMI is: 13.89').and('contain', 'Your BMI category is: Underweight');
    });

    it('calculates BMI and categorizes as Normal weight', () => {
        cy.visit('http://localhost:3000'); 

        cy.get('#weightPounds').type('137');
        cy.get('#heightInches').type('72'); 

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', 'Your BMI is: 19.03').and('contain', 'Your BMI category is: Normal weight');
    });

    it('calculates BMI and categorizes as Overweight', () => {
        cy.visit('http://localhost:3000'); 

        cy.get('#weightPounds').type('180');
        cy.get('#heightInches').type('72'); 

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', 'Your BMI is: 25').and('contain', 'Your BMI category is: Overweight');
    });

    it('calculates BMI and categorizes as Obese', () => {
        cy.visit('http://localhost:3000'); 

        cy.get('#weightPounds').type('230');
        cy.get('#heightInches').type('72'); 

        cy.get('input[type="button"]').click();

        cy.get('#result').should('contain', 'Your BMI is: 31.94').and('contain', 'Your BMI category is: Obese');
    });
});

