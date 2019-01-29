import { Page } from './budget-page.po'

describe('Budget Page', () => {
	let page: Page

	beforeEach(() => {
		page = new Page()
		page.navigateTo('/')
	})

	it('should have December 2018 as the title', async () => {
		expect(await page.getPageTitle()).toEqual('December 2018')
	})

	it('should have an overall budget amount', async () => {
		expect(await page.getOverallBudget().isPresent()).toBe(true)
	})

	it('should have an budget overview section', async () => {
		expect(await page.getOverview().isPresent()).toBe(true)
	})

	it('should show the List view when clicking on the `List` tab', async () => {
		page.getListTab().click()
		expect(await page.getLists().isPresent()).toBe(true)
	})

	it('should show the Categories view when clicking on `Categories` tab', async () => {
		page.getCategoryTab().click()
		expect(await page.getCategories().isPresent()).toBe(true)
	})

})
