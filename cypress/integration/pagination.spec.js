describe("Pagination", () => {
  it("should render pagination", () => {
    cy.visit("/search");
    cy.get("[data-cy=pagination-element]");
  });

  it("should redirect to page 2", () => {
    cy.visit("/search");
    cy.get("[data-cy=pagination-element]")
      .get(":nth-child(3) > .MuiButtonBase-root")
      .click({ multiple: true, force: true });
    cy.location("search").should("contain", "page=2");
  });
});
