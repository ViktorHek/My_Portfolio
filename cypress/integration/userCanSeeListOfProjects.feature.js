describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        /*cy.get("#project-tab").click();*/
    });

    it("displays first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "My First Website") /* ändra till nåt lit */
            cy.get(".description").should("contain", "Won the popular vote!");/* ändra till nåt lit */
        });
    });

    it("displays second project", () => {
        cy.get("#project-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "UI Design") /* ändra till nåt lit */
            cy.get(".description").should("contain", "Designing user interfaces is fun.");/* ändra till nåt lit */
        });
    });

    it("displays third project", () => {
        cy.get("#project-3").within(() => {
            cy.get(".image").should("exist");
            cy.get(".ui.header").should("contain", "Mobile UX") /* ändra till nåt lit */
            cy.get(".description").should("contain", "I like to design the mobile platform.");/* ändra till nåt lit */
        });
    });
});