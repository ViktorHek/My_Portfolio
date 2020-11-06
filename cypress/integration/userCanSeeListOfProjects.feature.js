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

describe("User can see CV", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#why-tab").click();
    });

    it("displays CV - Education", () => {
        cy.get("#CV-4").within(() => {
            cy.get(".header").should("contain", "Educations")
            cy.get(".content").should("contain", "* Full Stack Web Developer Bootcamp at Craft Academy /n * Leadership and Communication at Marina Läroverkets gymnasium")
        });
    });
    it("displays CV - Work Experience", () => {
        cy.get("#CV-5").within(() => {
            cy.get(".header").should("contain", "Work Experience")
            cy.get(".content").should("contain", "* Project Leader at Båtmässan(älvsjömässan) jan-mar 2013")
        });
    });
    it("displays CV - Merits", () => {
        cy.get("#6").within(() => {
            cy.get(".header").should("contain", "Merits")
            cy.get(".content").should("contain", "* Driving license /n * Ship Commander(Fartygsbefäl) Class 8")
        });
    });
})
