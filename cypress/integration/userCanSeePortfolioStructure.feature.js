describe("portfolio interface", () => {
    it("successfully renders", () => {
        cy.visit("http://localhost:3000");
        cy.get("#header").should("contain", "Home");
        cy.get("#footer").should("contain", "Made with React 17.0.1");
        cy.get("#hello").should("contain", "Hello! my name is Viktor Karlsson!");
    })
})