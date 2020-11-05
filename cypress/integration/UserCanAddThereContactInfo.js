describe("User can add there contact information", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#contactme-tab").click();
    });

    it("display email, name and message", () => {
        cy.get("#how").should("contain", "name:", "email:", "message:");
        cy.get(".header").should("contain", "This is where I've been")
        cy.get(".description").should("contain", "I'm showing this embarrassing excuse of a website as a testament of growth");

    });
})
    