describe("User can add there contact information", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    describe("to contact and it", () => {

        it("shows your name", () =>{
            cy.get("#how-ContactForm").should("contain", "Your Name:");
        })

        it("shows your email", () =>{
            cy.get("#how-ContactForm").should("contain", "Your Email:");
        })

        it("shows your email", () =>{
            cy.get("#how-ContactForm").click();
        })

    })
})