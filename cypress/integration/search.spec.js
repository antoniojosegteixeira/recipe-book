describe("Search", () => {
  it("should render search bar", () => {
    cy.visit("/");
    cy.get("#search-input").should("exist");
  });

  it("should perform simple search", () => {
    cy.get("#search-input").type("lemon", { force: true });
    cy.get("#search-form").submit();
    cy.location().should((loc) => {
      expect(loc.pathname).to.include("/search");
      expect(loc.search).to.include("query=lemon");
    });
  });

  it("should show correct search term", () => {
    cy.get("#search-results-text").should("contain", "lemon");
  });

  it("should keep search term on search bar", () => {
    cy.get("#search-input").should("have.value", "lemon");
  });

  it("should render recipe cards", () => {
    cy.get("#search-card-grid")
      .find(".search-recipe-card")
      .should("not.have.length", 0);
  });

  it("should recipe card redirect to recipe page", () => {
    cy.get("#search-card-grid").find(".search-recipe-card").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.contain("/recipe");
    });
  });
});
