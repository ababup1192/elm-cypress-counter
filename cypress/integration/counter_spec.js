describe("Elm Counter Test", function() {
  beforeEach(function() {
    cy.visit("http://localhost:8000/");
  });

  const counterButtonElementId = '[data-cypress-id="counter-num"]';

  describe("+ button", function() {
    it("Increment number", function() {
      cy.contains("+").click();

      cy.get(counterButtonElementId).should("have.text", "1");
    });
  });

  describe("- button", function() {
    it("Decrement number", function() {
      cy.contains("-").click();

      cy.get(counterButtonElementId).should("have.text", "-1");
    });
  });
});
