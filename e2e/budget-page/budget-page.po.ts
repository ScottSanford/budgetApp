import { browser, by, element } from 'protractor';

export class Page {
	getCategories = () => element(by.id('categories'))
	getCategoryTab = () => element(by.cssContainingText('.budget-tabs__tab', 'Categories'))
	getLists = () => element(by.tagName('daily-expense'))
	getListTab = () => element(by.cssContainingText('.budget-tabs__tab', 'List'))
	getOverallBudget = () => element(by.css('.balance'))
	getOverview = () => element(by.css('.overview'))
	getPageTitle = () => element(by.css('.budget-header__title')).getText()
	navigateTo = (destination: string) => browser.get(destination)
}
