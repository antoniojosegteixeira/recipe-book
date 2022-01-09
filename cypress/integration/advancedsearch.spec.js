describe("Advanced search", () => {
  it("should open advanced search modal", () => {
    cy.visit("/");
    cy.get("#advanced-search-button").click({ multiple: true, force: true });
    cy.get("#advanced-search-modal");
  });

  it("should render radio and checkboxes", () => {
    cy.get("#advanced-search-modal")
      .find(".advanced-item")
      .should("have.length", "60");
  });

  it("should select radio and checkboxes", () => {
    cy.get("#advanced-search-modal")
      .find(".advanced-item")
      .click({ multiple: true });
  });

  it("should render filter boxes", () => {
    cy.get("[data-cy=advanced-submit]").click({ multiple: true, force: true });
    cy.location("pathname").should("contain", "/search");
    cy.get("[data-cy=filter-box-wrapper]")
      .find(".advanced-filter-box")
      .should("have.length", "40");
  });

  it("should get search results", () => {
    cy.get("#search-card-grid")
      .find(".search-recipe-card")
      .should("not.have.length", 0);
  });
});
