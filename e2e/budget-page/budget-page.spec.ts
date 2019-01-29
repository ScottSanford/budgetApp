import { Page } from './budget-page.page'

describe('Budget Page', () => {
	let page: Page

	beforeEach(() => {
		page = new Page()
	})

	describe('budget screen', () => {
		beforeEach(() => {
			page.navigateTo('/')
		})

		it('should have December 2018 as the title', async () => {
			expect(await page.getPageOneTitleText()).toEqual('December 2018')
		})
	})
})
