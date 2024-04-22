/// <reference types="@testing-library/cypress" />
describe("Just visit e2e test", () => {
	it('successfully loads the home page', () => {
		cy.visit('/');
		cy.contains('Launch Mission Dashboard').should('be.visible');
	});

	it('can perform a search', () => {
		cy.visit('/');
		cy.get('[data-test="search-submit"]').type('Falcon').wait(500).type('{enter}');
		cy.contains('FalconSat');
	});

	it('show upcoming cases only', () => {
		cy.visit('/');
		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Upcoming')
			.click();
		cy.get('[data-test="lauchstatus"]').not(':contains("Success")')
			.not(':contains("Failure")')
			.contains('Upcoming');
	});

	it('show success cases only', () => {
		cy.visit('/');
		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Success')
			.click();
		cy.get('[data-test="lauchstatus"]').not(':contains("Upcoming")')
			.not(':contains("Failure")')
			.contains('Success');
	});

	it('show failure cases only', () => {
		cy.visit('/');
		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Failure')
			.click();
		cy.get('[data-test="lauchstatus"]').not(':contains("Success")')
			.not(':contains("Upcoming")')
			.contains('Failure');
	});

	it('can find search fields setting', () => {
		cy.visit('/');
		cy.get('[data-test="search-fields-button"]').click()
			.get('[data-test="search-fields"]')
			.contains('By Name')
	});

	it('can perform a search by text and fields', () => {
		cy.visit('/');
		cy.get('[data-test="search-submit"]').type('FalconSat').wait(500).type('{enter}');
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);

		cy.get('[data-test="search-fields-button"]').click()
			.get('[data-test="search-fields"]')
			.contains('By Name').click()

		cy.get('.ant-list-item')
			.should('not.exist');
	});

	it('can perform a search by text and launchtype', () => {
		cy.visit('/');
		cy.get('[data-test="search-submit"]').type('FalconSat').wait(500).type('{enter}');
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);

		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Failure')
			.click();
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);

		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Upcoming')
			.click();

		cy.get('.ant-list-item')
			.should('not.exist');
	});

	it('can perform a search by text, launchtype and fields', () => {
		cy.visit('/');
		cy.get('[data-test="search-submit"]').type('FalconSat').wait(500).type('{enter}');
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);

		cy.get('[data-test="search-select"]').click()
			.get('.ant-select-item-option-content')
			.contains('Failure')
			.click();
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);

		cy.get('[data-test="search-fields-button"]').click()
			.get('[data-test="search-fields"]')
			.contains('By Name').click()

		cy.get('.ant-list-item')
			.should('not.exist');

		cy.get('[data-test="search-fields-button"]')
			.click()
			.get('[data-test="search-fields"]')
			.contains('By Name').click({ force: true })

		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);
	});

	it('can view learn more details', () => {
		cy.visit('/');
		cy.get('[data-test="search-submit"]').type('FalconSat').wait(500).type('{enter}');
		cy.contains('FalconSat');
		cy.get('.ant-list-item')
			.should('have.length', 1);
		cy.get('[data-test="learn-more"]')
			.contains('Learn More').click();
		cy.contains('Launch Information').should('be.visible');
	});
});

