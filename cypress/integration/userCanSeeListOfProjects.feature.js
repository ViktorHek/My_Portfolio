describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#project-tab").click();
    });

    it("displays first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "This is where I've been")
            cy.get(".description").should("contain", "I'm showing this embarrassing excuse of a website as a testament of growth");
        });
    });

    it("displays second project", () => {
        cy.get("#project-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "Master Thesis (Swedish)")
            cy.get(".description").should("contain", "Gambling-Advertisement: What is it Good fore?");
        });
    });

    it("displays third project", () => {
        cy.get("#project-3").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "Self-Designed Poster")
            cy.get(".description").should("contain", "I just like drawing");
        });
    });
});