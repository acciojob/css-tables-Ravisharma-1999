//your JS code here. If required.
() => {
    // Ensure Cypress waits for the element to appear before asserting
    cy.get("th").first().should("contain", "Table-Header 1");
    cy.get("th").last().should("contain", "Table-Header 2");
}
