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

  it.only("should get correct offset on pagination", () => {
    cy.visit("/search?page=2")
      .its("__NEXT_DATA__.props.pageProps.data")
      .should((data) => {
        expect(data.offset).to.equal(data.number);
      });
  });
});
