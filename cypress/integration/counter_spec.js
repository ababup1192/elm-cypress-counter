describe("Elm Counter Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  const counterButtonElementId = '[data-cypress-id="counter-num"]';

  describe("+ button", () => {
    it("Increment number", () => {
      cy.contains("+").click();

      cy.get(counterButtonElementId).should("have.text", "1");
    });
  });

  describe("- button", () => {
    it("Decrement number", () => {
      cy.contains("-").click();

      cy.get(counterButtonElementId).should("have.text", "-1");
    });
  });
});
