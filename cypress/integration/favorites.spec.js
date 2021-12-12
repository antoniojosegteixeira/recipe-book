describe("Favorites", () => {
  it("should add recipe to favorites", () => {
    cy.visit("/recipe/661835");
    cy.get("[data-cy=add-favorite]").click();
  });

  it("should store recipe in cookies", () => {
    cy.visit("/recipe/661835");
    cy.get("[data-cy=add-favorite]").click();
    cy.getCookie("favorites").should((cookies) => {
      expect(cookies.value).to.exist;
    });
  });

  it("should remove favorite on recipe page", () => {
    cy.visit("/recipe/661835");
    cy.get("[data-cy=add-favorite]").click();
    cy.get("[data-cy=remove-favorite]").click();
  });

  it("should remove favorite data from cookies", () => {
    cy.visit("/recipe/661835");
    cy.get("[data-cy=add-favorite]").click();
    cy.get("[data-cy=remove-favorite]").click();
    cy.getCookie("favorites").should((cookies) => {
      expect(cookies.value.length).to.equal(2);
    });
  });
});
