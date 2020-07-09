import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Weekday App Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('WeekDay UI');
  });

  it('should display API response', () => {
    page.navigateTo();
    expect(page.getFirstLine()).toContain(new Date().getDate());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
