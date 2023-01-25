import 'cypress-file-upload'
import 'cypress-fill-command'
import 'cypress-wait-until'

Cypress.Commands.add(
  'message',
  { prevSubject: 'optional' },
  (subject, message) => {
    cy.log(`__${message}__`).wrap(subject, { log: false })
  },
)

Cypress.Commands.add('appStable', () => {
  cy.message('check if application is stable')
    .get('.spinner-display', { log: false })
    .should('not.exist')
    .wait(500, { log: false })
    .get('.spinner-display', { log: false })
    .should('not.exist')
})

Cypress.Commands.add('waitProgressBarNotExist', () => {
  cy.message('check if progress bar is not visible')
    .get('.mat-progress-bar-secondary', { log: false })
    .should('not.exist')
    .wait(500, { log: false })
    .get('.mat-progress-bar-secondary', { log: false })
    .should('not.exist')
})

Cypress.Commands.add('waitMessageNotExist', () => {
  cy.message('check if snackbar was displayed')
    .get('.mat-snack-bar-container', { log: false })
    .should('not.exist')
    .get('.snackbar', { log: false })
    .should('not.exist')
    .wait(500, { log: false })
    .get('.mat-snack-bar-container', { log: false })
    .should('not.exist')
    .get('.snackbar', { log: false })
    .should('not.exist')
})

Cypress.Commands.add('getByDataTest', (selector: string) => {
  return cy.get<HTMLElement>(`[data-test=${selector}]`)
})

Cypress.Commands.add('getFormControl', (selector: string) => {
  return cy.get<HTMLElement>(`[formcontrolname=${selector}]`)
})

Cypress.Commands.add(
  'selectOption',
  { prevSubject: true },
  (subject: Cypress.Chainable<Element>, option: string) => {
    cy.appStable()
    cy.message('open dropdown')
    cy.wrap(subject).click()
    cy.message('select option: ' + option)
    cy.appStable()
    cy.get('.mat-option-text')
      .contains(new RegExp('^\\s*' + option + '\\s*$', 'g'))
      .click()
  },
)

Cypress.Commands.add(
  'selectRandomOption',
  { prevSubject: true },
  (subject: Cypress.Chainable<Element>, options: string[]) => {
    const optionToSelect = options[Math.floor(Math.random() * options.length)]
    cy.message(
      `selecting ${optionToSelect} at random from ${JSON.stringify(options)}`,
    )

    cy.wrap(subject).selectOption(optionToSelect)
  },
)
