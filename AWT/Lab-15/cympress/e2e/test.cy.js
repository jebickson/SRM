
describe('My Website Test', () => {
    it('checks the heading and button', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.contains('h1', 'My Website').should('be.visible');
        cy.contains('button', 'Click Me').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Success!');
        });
    });
});
