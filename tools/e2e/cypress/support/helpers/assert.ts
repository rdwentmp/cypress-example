// Assert is visible element instead of .should('be.visible')
export class Assertion {
  isVisible = (elem) =>
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
}
