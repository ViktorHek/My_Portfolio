
describe("User can navigate the app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    describe("to About tab and it", () => {
        beforeEach(() => {
            cy.get("#about-tab").click();
        });

        it("displays About me header", () => {
            cy.get("#about-header").should("contain", "Who?")
        });

        it("displays component name in url", () => {
            cy.url().should("contain", "about");
        });

        it("does not displays my projects header", () => {
            cy.get("#projects-header").should("not.exist");
        });

        it("does not display Hello", () => {
            cy.get("#hello").should("not.exist");
        });
    });

    describe("to My Project tab and it", () => {
        beforeEach(() => {
            cy.get("#project-tab").click();
        });

        it("displays my projects header", () => {
            cy.get("#projects-header").should("contain", "What?");
        });

        it("displays component name in url", () => {
            cy.url().should("contain", "projects");
        });

        it("does not displays about me header", () => {
            cy.get("#about-header").should("not.exist");
        });

        it("does not displays hello", () => {
            cy.get("#hello").should("not.exist");
        });
    });

    describe("back to my portfolio/hello tab and it", () => {
        beforeEach(() => {
            cy.get("#about-tab").click();
            cy.get("#header").click();
        });

        it("displays hello", () => {
            cy.get("#hello").should("contain", "Hello");
        });

        it("displays correct url", () => {
            cy.url()
            .should("not.contain", "projects")
            .and("not.contain", "about");
        });

        it("does not displays about me header", () => {
            cy.get("#about-header").should("not.exist");
        });

        it("does not displays my projects header", () => {
            cy.get("#projects-header").should("not.exist");
        });
    });

    describe("to Why tab and it", () => {
        beforeEach(() => {
            cy.get("#why-tab").click();
        });

        it("displays About me header", () => {
            cy.get("#why-header").should("contain", "Why?")
        });

        it("displays component name in url", () => {
            cy.url().should("contain", "why");
        });

        it("does not displays my projects header", () => {
            cy.get("#projects-header").should("not.exist");
        });

        it("does not display Hello", () => {
            cy.get("#hello").should("not.exist");
        });
    });

    describe("to How tab and it", () => {
        beforeEach(() => {
            cy.get("#how-tab").click();
        });

        it("displays How header", () => {
            cy.get("#how-header").should("contain", "How?")
        });

        it("displays component name in url", () => {
            cy.url().should("contain", "how");
        });

        it("does not displays my projects header", () => {
            cy.get("#projects-header").should("not.exist");
        });

        it("does not display Hello", () => {
            cy.get("#hello").should("not.exist");
        });
    });
});